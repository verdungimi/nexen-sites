import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      name,
      company,
      email,
      phone,
      purpose,
      deadline,
      description,
      selectedDate,
      selectedTime,
    } = data;

    // Format the email content
    const emailSubject = `Új időpontfoglalás - ${name}`;
    
    // Format date for better readability
    const formattedDate = new Date(selectedDate).toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
    
    const emailBodyText = `
ÚJ IDŐPONTFOGLALÁS

═══════════════════════════════════════
ÜGYFÉL ADATOK
═══════════════════════════════════════

Név: ${name}
${company ? `Cégnév: ${company}` : ""}
Email: ${email}
Telefonszám: ${phone}

═══════════════════════════════════════
IDŐPONT RÉSZLETEI
═══════════════════════════════════════

Kiválasztott dátum: ${formattedDate} (${selectedDate})
Kiválasztott időpont: ${selectedTime}

═══════════════════════════════════════
PROJEKT RÉSZLETEI
═══════════════════════════════════════

Weboldal célja: ${purpose || "Nincs megadva"}
Határidő: ${deadline || "Nincs megadva"}
${description ? `Leírás:\n${description}` : ""}

═══════════════════════════════════════
`;

    // HTML version of the email
    const emailBodyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #7C5CFF 0%, #50AEDF 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
    .section { margin-bottom: 20px; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #7C5CFF; }
    .section-title { font-weight: bold; color: #7C5CFF; margin-bottom: 10px; font-size: 16px; }
    .info-row { margin: 8px 0; }
    .label { font-weight: bold; color: #555; }
    .datetime { font-size: 18px; color: #7C5CFF; font-weight: bold; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Új Időpontfoglalás</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">👤 ÜGYFÉL ADATOK</div>
        <div class="info-row"><span class="label">Név:</span> ${name}</div>
        ${company ? `<div class="info-row"><span class="label">Cégnév:</span> ${company}</div>` : ""}
        <div class="info-row"><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></div>
        <div class="info-row"><span class="label">Telefonszám:</span> <a href="tel:${phone}">${phone}</a></div>
      </div>

      <div class="section">
        <div class="section-title">📅 IDŐPONT RÉSZLETEI</div>
        <div class="info-row"><span class="label">Kiválasztott dátum:</span> <span class="datetime">${formattedDate}</span></div>
        <div class="info-row"><span class="label">Kiválasztott időpont:</span> <span class="datetime">${selectedTime}</span></div>
      </div>

      <div class="section">
        <div class="section-title">💼 PROJEKT RÉSZLETEI</div>
        <div class="info-row"><span class="label">Weboldal célja:</span> ${purpose || "Nincs megadva"}</div>
        <div class="info-row"><span class="label">Határidő:</span> ${deadline || "Nincs megadva"}</div>
        ${description ? `<div class="info-row" style="margin-top: 10px;"><span class="label">Leírás:</span><br><div style="margin-top: 5px; padding: 10px; background: #f0f0f0; border-radius: 4px; white-space: pre-wrap;">${description}</div></div>` : ""}
      </div>

      <div class="footer">
        <p>Ez az email automatikusan generálva lett a Nexen Sites weboldalról.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

    // For now, we'll log the email content
    // In production, you can use a service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - etc.

    console.log("=".repeat(50));
    console.log("EMAIL KÜLDÉS");
    console.log("=".repeat(50));
    console.log("Címzett:", "verdungimre@nexensites.hu");
    console.log("Tárgy:", emailSubject);
    console.log("Tartalom (text):");
    console.log(emailBodyText);
    console.log("=".repeat(50));

    // TODO: Integrate with your email service
    // Example with Resend (https://resend.com):
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Change this to your verified domain
      to: "verdungimre@nexensites.hu",
      subject: emailSubject,
      text: emailBodyText,
      html: emailBodyHtml,
    });
    
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
    }
    
    console.log("Email sent successfully via Resend:", data);
    */

    // For development, simulate successful email send
    // In production, replace this with actual email service call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true, 
        message: "Email sikeresen elküldve" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { 
        error: "Hiba történt az email küldése során",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

