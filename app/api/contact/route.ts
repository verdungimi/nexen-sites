import { NextRequest, NextResponse } from "next/server";
import { ADMIN_EMAIL, formatContactEmail, sendEmail } from "@/lib/email";
import { saveLead } from "@/lib/leads";
import { allowRequest, asString, clientIp, looksLikeBot } from "@/lib/spam";
import { sanitizeString, sanitizeText, validateContactData } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FAILED = "Most nem sikerült elküldeni az üzenetet. Próbáld újra, vagy hívj minket: +36 70 576 7845.";

/** Contact form on /kapcsolat. */
export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const data = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;

    if (looksLikeBot(data)) {
      return NextResponse.json({ success: true });
    }

    if (!allowRequest(clientIp(request))) {
      return NextResponse.json(
        { success: false, error: "Túl sok beküldés érkezett rövid idő alatt. Próbáld újra pár perc múlva, vagy hívj minket." },
        { status: 429 }
      );
    }

    const message = {
      name: sanitizeString(asString(data.name, 120)),
      email: sanitizeString(asString(data.email, 254)).toLowerCase(),
      phone: sanitizeString(asString(data.phone, 40)),
      message: sanitizeText(asString(data.message, 4000)),
    };

    const validation = validateContactData(message);
    if (!validation.isValid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 });
    }

    const [saved, email] = await Promise.all([
      saveLead({ source: "contact", ...message, page: "/kapcsolat" }),
      sendEmail({ to: ADMIN_EMAIL, replyTo: message.email, ...formatContactEmail(message) }),
    ]);

    if (!saved.saved && !email.success) {
      console.error("Message lost: neither Supabase nor e-mail worked", { supabase: saved.error, email: email.error });
      return NextResponse.json({ success: false, error: FAILED }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact message:", error);
    return NextResponse.json({ success: false, error: FAILED }, { status: 500 });
  }
}
