import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function GET(request: NextRequest) {
  try {
    const testEmailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || "info@nexensites.hu",
      subject: "🧪 Próba Email - Nexen Sites Backend Teszt",
      text: `
Ez egy próba email a Nexen Sites backend rendszeréből.

Ha ezt az emailt megkaptad, az azt jelenti, hogy az email küldés működik!

═══════════════════════════════════════
TESZT ADATOK
═══════════════════════════════════════

Időpont: ${new Date().toLocaleString('hu-HU')}
Backend: Next.js API Route
Email Service: Resend

═══════════════════════════════════════

Ez az email automatikusan generálva lett a backend teszteléséhez.
      `,
      html: `
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
    .success { color: #10b981; font-weight: bold; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🧪 Próba Email</h1>
      <p>Nexen Sites Backend Teszt</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">✅ Email Küldés Sikeres!</div>
        <p>Ha ezt az emailt megkaptad, az azt jelenti, hogy az email küldés működik!</p>
      </div>

      <div class="section">
        <div class="section-title">📋 Teszt Adatok</div>
        <div class="info-row"><span class="label">Időpont:</span> ${new Date().toLocaleString('hu-HU')}</div>
        <div class="info-row"><span class="label">Backend:</span> Next.js API Route</div>
        <div class="info-row"><span class="label">Email Service:</span> Resend</div>
        <div class="info-row"><span class="label">Státusz:</span> <span class="success">✓ Működik</span></div>
      </div>

      <div class="footer">
        <p>Ez az email automatikusan generálva lett a backend teszteléséhez.</p>
        <p>Nexen Sites - Weboldal 10 nap alatt</p>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    });

    if (!testEmailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: testEmailResult.error || "Email küldési hiba",
          message: "Az email küldése sikertelen volt. Ellenőrizd a konzolt a részletekért.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Próba email sikeresen elküldve!",
        messageId: testEmailResult.messageId,
        recipient: process.env.ADMIN_EMAIL || "info@nexensites.hu",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending test email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Hiba történt a próba email küldése során",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

