// Email service using Resend (or fallback to console in development)

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  // Use Resend if API key is available (works in both development and production)
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  // Use onboarding@resend.dev as default - this always works with Resend
  // If you have a verified domain, set EMAIL_FROM in environment variables
  const EMAIL_FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";
  
  if (RESEND_API_KEY) {
    try {
      // Using Resend API
      const emailPayload = {
        from: EMAIL_FROM,
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html,
      };

      console.log("Sending email via Resend to:", data.to);
      console.log("From:", EMAIL_FROM);

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify(emailPayload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Resend API error:", {
          status: response.status,
          statusText: response.statusText,
          error: result,
        });
        
        // Provide more detailed error message
        let errorMessage = "Email küldési hiba";
        if (result.message) {
          errorMessage = result.message;
        } else if (result.error) {
          errorMessage = result.error;
        }
        
        return { 
          success: false, 
          error: errorMessage || `Resend API hiba: ${response.status} ${response.statusText}` 
        };
      }

      console.log("Email sent successfully via Resend:", result.id);
      return { success: true, messageId: result.id };
    } catch (error) {
      console.error("Error sending email via Resend:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Ismeretlen hiba az email küldése során" 
      };
    }
  } else {
    // Development mode - log to console
    console.log("=".repeat(50));
    console.log("📧 EMAIL KÜLDÉS (Development Mode)");
    console.log("=".repeat(50));
    console.log("Címzett:", data.to);
    console.log("Tárgy:", data.subject);
    console.log("Tartalom:");
    console.log(data.text);
    console.log("=".repeat(50));
    
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return { success: true, messageId: "dev-" + Date.now() };
  }
}

export function formatBookingEmail(data: {
  name: string;
  company?: string;
  email: string;
  phone: string;
  purpose?: string;
  deadline?: string;
  description?: string;
  selectedDate?: string;
  selectedTime?: string;
}) {
  const formattedDate = data.selectedDate 
    ? new Date(data.selectedDate).toLocaleDateString('hu-HU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      })
    : "Nincs megadva";

  const subject = `Új időpontfoglalás - ${data.name}`;

  const text = `
ÚJ IDŐPONTFOGLALÁS

═══════════════════════════════════════
ÜGYFÉL ADATOK
═══════════════════════════════════════

Név: ${data.name}
${data.company ? `Cégnév: ${data.company}` : ""}
Email: ${data.email}
Telefonszám: ${data.phone}

═══════════════════════════════════════
IDŐPONT RÉSZLETEI
═══════════════════════════════════════

${data.selectedDate ? `Kiválasztott dátum: ${formattedDate} (${data.selectedDate})` : ""}
${data.selectedTime ? `Kiválasztott időpont: ${data.selectedTime}` : ""}

═══════════════════════════════════════
PROJEKT RÉSZLETEI
═══════════════════════════════════════

Weboldal célja: ${data.purpose || "Nincs megadva"}
Határidő: ${data.deadline || "Nincs megadva"}
${data.description ? `Leírás:\n${data.description}` : ""}

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
        <div class="info-row"><span class="label">Név:</span> ${data.name}</div>
        ${data.company ? `<div class="info-row"><span class="label">Cégnév:</span> ${data.company}</div>` : ""}
        <div class="info-row"><span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a></div>
        <div class="info-row"><span class="label">Telefonszám:</span> <a href="tel:${data.phone}">${data.phone}</a></div>
      </div>

      ${data.selectedDate || data.selectedTime ? `
      <div class="section">
        <div class="section-title">📅 IDŐPONT RÉSZLETEI</div>
        ${data.selectedDate ? `<div class="info-row"><span class="label">Kiválasztott dátum:</span> <span class="datetime">${formattedDate}</span></div>` : ""}
        ${data.selectedTime ? `<div class="info-row"><span class="label">Kiválasztott időpont:</span> <span class="datetime">${data.selectedTime}</span></div>` : ""}
      </div>
      ` : ""}

      <div class="section">
        <div class="section-title">💼 PROJEKT RÉSZLETEI</div>
        <div class="info-row"><span class="label">Weboldal célja:</span> ${data.purpose || "Nincs megadva"}</div>
        <div class="info-row"><span class="label">Határidő:</span> ${data.deadline || "Nincs megadva"}</div>
        ${data.description ? `<div class="info-row" style="margin-top: 10px;"><span class="label">Leírás:</span><br><div style="margin-top: 5px; padding: 10px; background: #f0f0f0; border-radius: 4px; white-space: pre-wrap;">${data.description}</div></div>` : ""}
      </div>

      <div class="footer">
        <p>Ez az email automatikusan generálva lett a Nexen Sites weboldalról.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

  return { subject, text, html };
}

