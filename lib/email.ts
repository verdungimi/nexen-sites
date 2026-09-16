import { BUDGET_OPTIONS, DEADLINE_OPTIONS, PURPOSE_OPTIONS, REVENUE_OPTIONS, optionLabel } from "./booking-options";

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

      let result;
      try {
        result = await response.json();
      } catch (e) {
        // If response is not JSON, get text
        const text = await response.text();
        console.error("Resend API non-JSON error:", text);
        return { 
          success: false, 
          error: `Resend API hiba: ${response.status} ${response.statusText} - ${text}` 
        };
      }

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
          errorMessage = typeof result.error === 'string' ? result.error : JSON.stringify(result.error);
        } else if (result.errors && Array.isArray(result.errors) && result.errors.length > 0) {
          errorMessage = result.errors.map((e: any) => e.message || e).join(", ");
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

const NOT_GIVEN = "Nincs megadva";

/** Escapes user-provided values before they are placed into the HTML template. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Formats the booked day in Hungarian time, so a UTC server cannot shift it by a day. */
function formatBookingDate(isoDate?: string): string {
  if (!isoDate) return NOT_GIVEN;
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return NOT_GIVEN;
  return date.toLocaleDateString("hu-HU", {
    timeZone: "Europe/Budapest",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
}

// E-mail palette (hex is fine here: e-mail clients do not see the site's CSS tokens)
const C = {
  graphite: "#1A1D21",
  bone: "#EDE8DF",
  paper: "#F8F5EF",
  brass: "#C7A263",
  brassTint: "#F3EBDC",
  fog: "#A7A197",
  label: "#5E5A53",
  rule: "#E2DBCF",
};

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function htmlRow(label: string, valueHtml: string): string {
  return `<tr>
              <td style="padding:12px 16px 12px 0;border-top:1px solid ${C.rule};width:40%;vertical-align:top;color:${C.label};font-size:14px;line-height:1.4;">${label}</td>
              <td style="padding:12px 0;border-top:1px solid ${C.rule};vertical-align:top;color:${C.graphite};font-size:15px;line-height:1.4;font-weight:600;">${valueHtml}</td>
            </tr>`;
}

function htmlSection(title: string, rowsHtml: string): string {
  return `<tr>
          <td style="padding:28px 32px 0 32px;">
            <h2 style="margin:0 0 8px 0;font-size:16px;line-height:1.3;color:${C.graphite};font-weight:700;">${title}</h2>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            ${rowsHtml}
            </table>
          </td>
        </tr>`;
}

export function formatBookingEmail(data: {
  name: string;
  company?: string;
  email: string;
  phone: string;
  revenue?: string;
  budget?: string;
  purpose?: string;
  deadline?: string;
  description?: string;
  selectedDate?: string;
  selectedTime?: string;
}) {
  const revenue = optionLabel(REVENUE_OPTIONS, data.revenue) ?? NOT_GIVEN;
  const budget = optionLabel(BUDGET_OPTIONS, data.budget) ?? NOT_GIVEN;
  const purpose = optionLabel(PURPOSE_OPTIONS, data.purpose) ?? NOT_GIVEN;
  const deadline = optionLabel(DEADLINE_OPTIONS, data.deadline) ?? NOT_GIVEN;
  const formattedDate = formatBookingDate(data.selectedDate);
  const slot = `${formattedDate}${data.selectedTime ? `, ${data.selectedTime}` : ""}`;

  const subject = `Új érdeklődő - ${data.name}`;

  const text = `
ÚJ KONZULTÁCIÓS FOGLALÁS

═══════════════════════════════════════
AZ ÉRDEKLŐDŐ CÉGE ÉS PROJEKTJE
═══════════════════════════════════════

Éves árbevétel: ${revenue}
Weboldal-keret: ${budget}
Mire van szüksége: ${purpose}
Mikor indulna: ${deadline}

═══════════════════════════════════════
KÉRT IDŐPONT
═══════════════════════════════════════

${slot}

═══════════════════════════════════════
KAPCSOLAT
═══════════════════════════════════════

Név: ${data.name}
${data.company ? `Cégnév: ${data.company}\n` : ""}E-mail: ${data.email}
Telefonszám: ${data.phone}
${data.description ? `\n═══════════════════════════════════════\nMIT SZERETNE ELÉRNI\n═══════════════════════════════════════\n\n${data.description}\n` : ""}
═══════════════════════════════════════
KÖVETKEZŐ LÉPÉS
═══════════════════════════════════════

Igazold vissza az időpontot e-mailben vagy telefonon, és küldd el a konzultáció linkjét.
`;

  const name = escapeHtml(data.name);
  const company = data.company ? escapeHtml(data.company) : "";
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const phoneHref = escapeHtml(data.phone.replace(/[^\d+]/g, ""));
  const linkStyle = `color:${C.graphite};text-decoration:underline;text-decoration-color:${C.brass};`;

  const leadRows = [
    htmlRow("Éves árbevétel", escapeHtml(revenue)),
    htmlRow("Weboldal-keret", escapeHtml(budget)),
    htmlRow("Mire van szüksége", escapeHtml(purpose)),
    htmlRow("Mikor indulna", escapeHtml(deadline)),
  ].join("");

  const contactRows = [
    htmlRow("Név", name),
    company ? htmlRow("Cégnév", company) : "",
    htmlRow("E-mail", `<a href="mailto:${email}" style="${linkStyle}">${email}</a>`),
    htmlRow("Telefonszám", `<a href="tel:${phoneHref}" style="${linkStyle}">${phone}</a>`),
  ].join("");

  const descriptionHtml = data.description
    ? `<tr>
          <td style="padding:28px 32px 0 32px;">
            <h2 style="margin:0 0 8px 0;font-size:16px;line-height:1.3;color:${C.graphite};font-weight:700;">Mit szeretne elérni</h2>
            <div style="border-top:1px solid ${C.rule};padding-top:12px;color:${C.graphite};font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.description)}</div>
          </td>
        </tr>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.bone};font-family:${FONT};color:${C.graphite};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.bone};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:${C.paper};border-collapse:collapse;">
          <tr>
            <td style="background-color:${C.graphite};padding:28px 32px;border-bottom:3px solid ${C.brass};">
              <p style="margin:0;font-size:14px;line-height:1.4;color:${C.fog};">Nexen Sites</p>
              <h1 style="margin:6px 0 0 0;font-size:24px;line-height:1.2;color:${C.bone};font-weight:700;">Új konzultációs foglalás</h1>
              <p style="margin:8px 0 0 0;font-size:16px;line-height:1.4;color:${C.bone};">${name}${company ? `, ${company}` : ""}</p>
            </td>
          </tr>
          ${htmlSection("Az érdeklődő cége és projektje", leadRows)}
          <tr>
            <td style="padding:28px 32px 0 32px;">
              <h2 style="margin:0 0 8px 0;font-size:16px;line-height:1.3;color:${C.graphite};font-weight:700;">Kért időpont</h2>
              <div style="background-color:${C.brassTint};border-left:3px solid ${C.brass};padding:14px 16px;font-size:18px;line-height:1.4;font-weight:700;color:${C.graphite};">${escapeHtml(slot)}</div>
            </td>
          </tr>
          ${htmlSection("Kapcsolat", contactRows)}
          ${descriptionHtml}
          <tr>
            <td style="padding:28px 32px 32px 32px;">
              <p style="margin:0;border-top:1px solid ${C.rule};padding-top:16px;font-size:15px;line-height:1.5;color:${C.graphite};">Következő lépés: igazold vissza az időpontot e-mailben vagy telefonon, és küldd el a konzultáció linkjét.</p>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0 0;font-size:12px;line-height:1.5;color:${C.label};">A levél automatikusan készült a nexensites.hu foglalási űrlapjából.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  return { subject, text, html };
}
