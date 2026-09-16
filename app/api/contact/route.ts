import { NextRequest, NextResponse } from "next/server";
import { validateEmail, sanitizeString, sanitizeText } from "@/lib/validation";
import { formatContactEmail, sendEmail } from "@/lib/email";

type ContactInput = { name: string; email: string; phone: string; subject: string; message: string };

function validate(input: ContactInput): string | null {
  if (!input.name || input.name.length < 2) return "A név kötelező és legalább 2 karakter hosszú";
  if (!input.email || !validateEmail(input.email)) return "Érvénytelen email cím";
  if (!input.message || input.message.length < 10) return "Az üzenet kötelező és legalább 10 karakter hosszú";
  return null;
}

async function deliver(input: ContactInput) {
  const { subject, text, html } = formatContactEmail({
    name: input.name,
    email: input.email,
    phone: input.phone || undefined,
    message: input.message,
    subject: input.subject || undefined,
  });
  return sendEmail({ to: process.env.ADMIN_EMAIL || "verdung.imi@gmail.com", subject, text, html });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const input: ContactInput = {
      name: sanitizeString(data.name || ""),
      email: sanitizeString(data.email || ""),
      phone: sanitizeString(data.phone || ""),
      subject: sanitizeString(data.subject || ""),
      message: sanitizeText(data.message),
    };

    const error = validate(input);
    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    const emailResult = await deliver(input);
    if (!emailResult.success) {
      console.error("Email sending failed:", emailResult.error);
      return NextResponse.json({ success: false, error: "Hiba történt az email küldése során" }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Üzenet sikeresen elküldve", messageId: emailResult.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ success: false, error: "Hiba történt a feldolgozás során" }, { status: 500 });
  }
}
