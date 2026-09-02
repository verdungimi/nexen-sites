import { NextRequest, NextResponse } from "next/server";
import { validateEmail, sanitizeString, sanitizeText } from "@/lib/validation";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Sanitize input
    const contactData = {
      name: sanitizeString(data.name || ""),
      email: sanitizeString(data.email || ""),
      subject: sanitizeString(data.subject || ""),
      message: sanitizeText(data.message),
    };

    // Validate
    if (!contactData.name || contactData.name.length < 2) {
      return NextResponse.json(
        { success: false, error: "A név kötelező és legalább 2 karakter hosszú" },
        { status: 400 }
      );
    }

    if (!contactData.email || !validateEmail(contactData.email)) {
      return NextResponse.json(
        { success: false, error: "Érvénytelen email cím" },
        { status: 400 }
      );
    }

    if (!contactData.message || contactData.message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Az üzenet kötelező és legalább 10 karakter hosszú" },
        { status: 400 }
      );
    }

    // Format email
    const subject = contactData.subject || `Kapcsolatfelvétel - ${contactData.name}`;
    const text = `
Kapcsolatfelvétel a Nexen Sites weboldalról

═══════════════════════════════════════
KÜLDŐ ADATOK
═══════════════════════════════════════

Név: ${contactData.name}
Email: ${contactData.email}
Tárgy: ${subject}

═══════════════════════════════════════
ÜZENET
═══════════════════════════════════════

${contactData.message}

═══════════════════════════════════════
`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #F2A93B 0%, #2DD4BF 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
    .section { margin-bottom: 20px; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #F2A93B; }
    .section-title { font-weight: bold; color: #F2A93B; margin-bottom: 10px; font-size: 16px; }
    .info-row { margin: 8px 0; }
    .label { font-weight: bold; color: #555; }
    .message { margin-top: 10px; padding: 15px; background: #f0f0f0; border-radius: 4px; white-space: pre-wrap; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Kapcsolatfelvétel</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">👤 KÜLDŐ ADATOK</div>
        <div class="info-row"><span class="label">Név:</span> ${contactData.name}</div>
        <div class="info-row"><span class="label">Email:</span> <a href="mailto:${contactData.email}">${contactData.email}</a></div>
        <div class="info-row"><span class="label">Tárgy:</span> ${subject}</div>
      </div>

      <div class="section">
        <div class="section-title">💬 ÜZENET</div>
        <div class="message">${contactData.message}</div>
      </div>

      <div class="footer">
        <p>Ez az email automatikusan generálva lett a Nexen Sites weboldalról.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

    // Send email
    const emailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || "verdung.imi@gmail.com",
      subject: subject,
      text: text,
      html: html,
    });

    if (!emailResult.success) {
      console.error("Email sending failed:", emailResult.error);
      return NextResponse.json(
        { success: false, error: "Hiba történt az email küldése során" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Üzenet sikeresen elküldve",
        messageId: emailResult.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Hiba történt a feldolgozás során",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

