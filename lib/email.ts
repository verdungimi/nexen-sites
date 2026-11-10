import { PURPOSE_OPTIONS, optionLabel } from "./booking-options";
import { QUIZ, answerLabel, recommendPackage, urgencyLabel, isQuizComplete, type QuizAnswers } from "./quiz";
import { CONTACT } from "./site";

// E-mail via Resend. Keys come from environment variables (RESEND_API_KEY, EMAIL_FROM, ADMIN_EMAIL).

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
  /** Where a reply should go (the lead for Imi's copy, Imi for the lead's confirmation) */
  replyTo?: string;
}

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || CONTACT.email;

export async function sendEmail(data: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  // onboarding@resend.dev only delivers to the Resend account owner. Confirmation e-mails to visitors
  // need EMAIL_FROM on a domain verified in Resend (for example "Nexen Sites <hello@nexensites.hu>").
  const from = process.env.EMAIL_FROM || "onboarding@resend.dev";

  if (!apiKey) {
    // Local development without a key: print instead of sending.
    console.log(`[email, not sent: RESEND_API_KEY missing] to=${data.to} subject=${data.subject}\n${data.text}`);
    return { success: process.env.NODE_ENV !== "production", messageId: "dev", error: "RESEND_API_KEY missing" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from,
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html,
        ...(data.replyTo ? { reply_to: data.replyTo } : {}),
      }),
    });

    const raw = await response.text();
    let result: { id?: string; message?: string } = {};
    try {
      result = JSON.parse(raw);
    } catch {
      // non-JSON error body, handled below
    }

    if (!response.ok) {
      const error = result.message || `Resend ${response.status}: ${raw.slice(0, 200)}`;
      console.error("Resend error:", error);
      return { success: false, error };
    }
    return { success: true, messageId: result.id };
  } catch (error) {
    console.error("Resend request failed:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown e-mail error" };
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

/** Given name for a greeting. Hungarian order is family name first, so it is the last word. */
function givenName(fullName: string): string {
  return fullName.trim().split(/\s+/).pop() || fullName;
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

// E-mail palette (hex is fine here: e-mail clients do not see the site's CSS)
const C = {
  navy: "#0B1E3F",
  sky: "#5EC2FF",
  mid: "#1B4C8C",
  mist: "#EEF6FD",
  white: "#FFFFFF",
  muted: "#5A6F8F",
  cloud: "#C7D8EE",
  line: "#D5E3F2",
};

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const LINK_STYLE = `color:${C.mid};font-weight:600;text-decoration:underline;`;

type Row = [label: string, valueHtml: string];

function htmlRows(rows: Row[]): string {
  return rows
    .map(
      ([label, value]) => `<tr>
        <td style="padding:11px 16px 11px 0;border-top:1px solid ${C.line};width:42%;vertical-align:top;color:${C.muted};font-size:14px;line-height:1.4;">${label}</td>
        <td style="padding:11px 0;border-top:1px solid ${C.line};vertical-align:top;color:${C.navy};font-size:15px;line-height:1.4;font-weight:600;">${value}</td>
      </tr>`
    )
    .join("");
}

function htmlSection(title: string, innerHtml: string): string {
  return `<tr><td style="padding:26px 32px 0 32px;">
    <h2 style="margin:0 0 8px 0;font-size:16px;line-height:1.3;color:${C.navy};font-weight:700;">${title}</h2>
    ${innerHtml}
  </td></tr>`;
}

function htmlTable(rows: Row[]): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">${htmlRows(rows)}</table>`;
}

function htmlLayout(options: { subject: string; kicker: string; title: string; subtitle?: string; body: string; footer: string }): string {
  return `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(options.subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.mist};font-family:${FONT};color:${C.navy};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.mist};">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:${C.white};border-collapse:collapse;">
        <tr><td style="background-color:${C.navy};padding:28px 32px;border-bottom:4px solid ${C.sky};">
          <p style="margin:0;font-size:14px;line-height:1.4;color:${C.cloud};">${options.kicker}</p>
          <h1 style="margin:6px 0 0 0;font-size:24px;line-height:1.2;color:${C.white};font-weight:700;">${options.title}</h1>
          ${options.subtitle ? `<p style="margin:8px 0 0 0;font-size:16px;line-height:1.4;color:${C.white};">${options.subtitle}</p>` : ""}
        </td></tr>
        ${options.body}
        <tr><td style="padding:28px 32px 32px 32px;"></td></tr>
      </table>
      <p style="margin:16px 0 0 0;font-size:12px;line-height:1.5;color:${C.muted};">${options.footer}</p>
    </td></tr>
  </table>
</body>
</html>`;
}

function contactRows(data: { name: string; company?: string; email: string; phone?: string; link?: string }): Row[] {
  const email = escapeHtml(data.email);
  const rows: Row[] = [["Név", escapeHtml(data.name)]];
  if (data.company) rows.push(["Cégnév", escapeHtml(data.company)]);
  if (data.phone) {
    rows.push([
      "Telefonszám",
      `<a href="tel:${escapeHtml(data.phone.replace(/[^\d+]/g, ""))}" style="${LINK_STYLE}">${escapeHtml(data.phone)}</a>`,
    ]);
  }
  rows.push(["E-mail", `<a href="mailto:${email}" style="${LINK_STYLE}">${email}</a>`]);
  if (data.link) {
    const href = /^https?:\/\//i.test(data.link) ? data.link : `https://${data.link}`;
    rows.push(["Weboldal vagy Facebook", `<a href="${escapeHtml(href)}" style="${LINK_STYLE}">${escapeHtml(data.link)}</a>`]);
  }
  return rows;
}

export interface LeadEmailData {
  name: string;
  company: string;
  phone: string;
  email: string;
  link?: string;
  answers: QuizAnswers;
  page?: string;
  utm?: Record<string, string>;
}

/** E-mail to Imi about a demo request. The subject carries the company name and the urgency. */
export function formatLeadEmail(data: LeadEmailData) {
  const urgency = urgencyLabel(data.answers);
  const subject = `Demo-kérés: ${data.company} (${urgency})`;
  const complete = isQuizComplete(data.answers);
  const recommendation = complete ? recommendPackage(data.answers) : undefined;

  const quizRows: Row[] = QUIZ.map((question) => [
    question.shortLabel,
    escapeHtml(answerLabel(question.id, data.answers[question.id]) ?? NOT_GIVEN),
  ]);
  if (recommendation) quizRows.push(["Ajánlott csomag", escapeHtml(recommendation.name)]);

  const utmEntries = Object.entries(data.utm ?? {});
  const sourceRows: Row[] = [];
  if (data.page) sourceRows.push(["Oldal", escapeHtml(data.page)]);
  for (const [key, value] of utmEntries) sourceRows.push([escapeHtml(key), escapeHtml(value)]);

  const text = [
    `ÚJ DEMO-KÉRÉS (${urgency})`,
    "",
    `Név: ${data.name}`,
    `Cégnév: ${data.company}`,
    `Telefonszám: ${data.phone}`,
    `E-mail: ${data.email}`,
    `Weboldal vagy Facebook: ${data.link || NOT_GIVEN}`,
    "",
    "A KÉRDÉSSOR VÁLASZAI",
    ...QUIZ.map((question) => `${question.shortLabel}: ${answerLabel(question.id, data.answers[question.id]) ?? NOT_GIVEN}`),
    ...(recommendation ? [`Ajánlott csomag: ${recommendation.name}`] : []),
    "",
    ...(data.page ? [`Oldal: ${data.page}`] : []),
    ...utmEntries.map(([key, value]) => `${key}: ${value}`),
    "",
    "Következő lépés: a demo elkészítése 1 napon belül, utána időpont egyeztetése a bemutató hívásra.",
  ].join("\n");

  const html = htmlLayout({
    subject,
    kicker: "Nexen Sites, demo-kérés",
    title: escapeHtml(data.company),
    subtitle: `${escapeHtml(data.name)}, ${escapeHtml(urgency)}`,
    body:
      htmlSection("Kapcsolat", htmlTable(contactRows(data))) +
      htmlSection("A kérdéssor válaszai", htmlTable(quizRows)) +
      (sourceRows.length ? htmlSection("Honnan érkezett", htmlTable(sourceRows)) : "") +
      htmlSection(
        "Következő lépés",
        `<p style="margin:0;border-top:1px solid ${C.line};padding-top:12px;font-size:15px;line-height:1.5;">A demo elkészítése 1 napon belül, utána időpont egyeztetése a bemutató hívásra.</p>`
      ),
    footer: "A levél automatikusan készült a nexensites.hu demo-kérő űrlapjából.",
  });

  return { subject, text, html };
}

/** Confirmation to the person who asked for a demo. */
export function formatLeadConfirmation(data: { name: string; company: string }) {
  const subject = "Megkaptuk a demo-kérésed";
  const text = [
    `Szia ${givenName(data.name)}!`,
    "",
    `Megkaptuk a demo-kérésed a(z) ${data.company} weboldalára.`,
    "",
    "Mi történik most?",
    "1. Egy napon belül elkészítjük az ingyenes demo weboldalt a cégedre.",
    "2. Jelentkezünk, és egy rövid online hívásban megmutatjuk.",
    "3. Ha tetszik, megbeszéljük a folytatást. Ha nem, nem fizetsz semmit.",
    "",
    `Kérdésed van? Hívj: ${CONTACT.phone} (${CONTACT.hours}), vagy válaszolj erre a levélre.`,
    "",
    "Nexen Sites",
  ].join("\n");

  const html = htmlLayout({
    subject,
    kicker: "Nexen Sites",
    title: "Megkaptuk a demo-kérésed",
    subtitle: `Szia ${escapeHtml(givenName(data.name))}!`,
    body: htmlSection(
      "Mi történik most?",
      `<ol style="margin:0;padding:12px 0 0 20px;border-top:1px solid ${C.line};font-size:15px;line-height:1.6;">
        <li>Egy napon belül elkészítjük az ingyenes demo weboldalt a(z) ${escapeHtml(data.company)} számára.</li>
        <li>Jelentkezünk, és egy rövid online hívásban megmutatjuk.</li>
        <li>Ha tetszik, megbeszéljük a folytatást. Ha nem, nem fizetsz semmit.</li>
      </ol>
      <p style="margin:18px 0 0 0;font-size:15px;line-height:1.6;">Kérdésed van? Hívj: <a href="tel:${CONTACT.phoneHref}" style="${LINK_STYLE}">${CONTACT.phone}</a> (${CONTACT.hours}), vagy válaszolj erre a levélre.</p>`
    ),
    footer: "Ezt a levelet azért kaptad, mert demót kértél a nexensites.hu oldalon.",
  });

  return { subject, text, html };
}

export interface BookingEmailData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  purpose?: string;
  description?: string;
  selectedDate?: string;
  selectedTime?: string;
}

export function formatBookingEmail(data: BookingEmailData) {
  const purpose = optionLabel(PURPOSE_OPTIONS, data.purpose) ?? NOT_GIVEN;
  const slot = `${formatBookingDate(data.selectedDate)}${data.selectedTime ? `, ${data.selectedTime}` : ""}`;
  const subject = `Konzultáció: ${data.company || data.name} (${slot})`;

  const text = [
    "ÚJ KONZULTÁCIÓS FOGLALÁS",
    "",
    `Kért időpont: ${slot}`,
    `Miben segíthetünk: ${purpose}`,
    "",
    `Név: ${data.name}`,
    ...(data.company ? [`Cégnév: ${data.company}`] : []),
    `Telefonszám: ${data.phone}`,
    `E-mail: ${data.email}`,
    ...(data.description ? ["", "Megjegyzés:", data.description] : []),
    "",
    "Következő lépés: igazold vissza az időpontot, és küldd el a hívás linkjét.",
  ].join("\n");

  const html = htmlLayout({
    subject,
    kicker: "Nexen Sites, konzultációfoglalás",
    title: escapeHtml(data.company || data.name),
    subtitle: escapeHtml(slot),
    body:
      htmlSection("Kapcsolat", htmlTable(contactRows(data))) +
      htmlSection("Miben segíthetünk", htmlTable([["Téma", escapeHtml(purpose)]])) +
      (data.description
        ? htmlSection(
            "Megjegyzés",
            `<div style="border-top:1px solid ${C.line};padding-top:12px;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.description)}</div>`
          )
        : ""),
    footer: "A levél automatikusan készült a nexensites.hu foglalási űrlapjából.",
  });

  return { subject, text, html };
}

export function formatBookingConfirmation(data: BookingEmailData) {
  const slot = `${formatBookingDate(data.selectedDate)}${data.selectedTime ? `, ${data.selectedTime}` : ""}`;
  const subject = "Megkaptuk a konzultációs foglalásod";
  const text = [
    `Szia ${givenName(data.name)}!`,
    "",
    `Megkaptuk a foglalásod erre az időpontra: ${slot}.`,
    "Hamarosan visszaigazoljuk, és elküldjük az online hívás linkjét.",
    "",
    `Ha változna valami, hívj: ${CONTACT.phone} (${CONTACT.hours}), vagy válaszolj erre a levélre.`,
    "",
    "Nexen Sites",
  ].join("\n");

  const html = htmlLayout({
    subject,
    kicker: "Nexen Sites",
    title: "Megkaptuk a foglalásod",
    subtitle: escapeHtml(slot),
    body: htmlSection(
      "Mi történik most?",
      `<p style="margin:0;border-top:1px solid ${C.line};padding-top:12px;font-size:15px;line-height:1.6;">Szia ${escapeHtml(givenName(data.name))}! Hamarosan visszaigazoljuk az időpontot, és elküldjük az online hívás linkjét.</p>
      <p style="margin:14px 0 0 0;font-size:15px;line-height:1.6;">Ha változna valami, hívj: <a href="tel:${CONTACT.phoneHref}" style="${LINK_STYLE}">${CONTACT.phone}</a> (${CONTACT.hours}), vagy válaszolj erre a levélre.</p>`
    ),
    footer: "Ezt a levelet azért kaptad, mert konzultációt foglaltál a nexensites.hu oldalon.",
  });

  return { subject, text, html };
}

/** Contact form e-mail (/kapcsolat). */
export function formatContactEmail(data: { name: string; email: string; phone?: string; message: string }) {
  const subject = `Üzenet a weboldalról: ${data.name}`;
  const text = [
    "ÜZENET A NEXENSITES.HU KAPCSOLATI ŰRLAPJÁRÓL",
    "",
    `Név: ${data.name}`,
    `E-mail: ${data.email}`,
    ...(data.phone ? [`Telefonszám: ${data.phone}`] : []),
    "",
    data.message,
  ].join("\n");

  const html = htmlLayout({
    subject,
    kicker: "Nexen Sites, kapcsolati űrlap",
    title: "Új üzenet",
    subtitle: escapeHtml(data.name),
    body:
      htmlSection("Küldő", htmlTable(contactRows(data))) +
      htmlSection(
        "Üzenet",
        `<div style="border-top:1px solid ${C.line};padding-top:12px;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</div>`
      ),
    footer: "A levél automatikusan készült a nexensites.hu kapcsolati űrlapjából.",
  });

  return { subject, text, html };
}
