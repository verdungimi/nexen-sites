import { NextRequest, NextResponse } from "next/server";
import { ADMIN_EMAIL, formatLeadConfirmation, formatLeadEmail, sendEmail } from "@/lib/email";
import { saveLead } from "@/lib/leads";
import { recommendPackage, isQuizComplete, sanitizeQuizAnswers } from "@/lib/quiz";
import { allowRequest, asString, clientIp, looksLikeBot, sanitizeUtm } from "@/lib/spam";
import { sanitizeString, validateLeadData } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Demo request: saved to Supabase, e-mailed to Imi, confirmed to the visitor. */
export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const data = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;

    // Bots get a normal-looking success and nothing is sent.
    if (looksLikeBot(data)) {
      return NextResponse.json({ success: true });
    }

    if (!allowRequest(clientIp(request))) {
      return NextResponse.json(
        { success: false, error: "Túl sok beküldés érkezett rövid idő alatt. Próbáld újra pár perc múlva, vagy hívj minket." },
        { status: 429 }
      );
    }

    const lead = {
      name: sanitizeString(asString(data.name, 120)),
      company: sanitizeString(asString(data.company, 160)),
      phone: sanitizeString(asString(data.phone, 40)),
      email: sanitizeString(asString(data.email, 254)).toLowerCase(),
      link: sanitizeString(asString(data.link, 300)),
    };
    const validation = validateLeadData(lead);
    if (!validation.isValid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 });
    }

    const answers = sanitizeQuizAnswers(data.answers);
    const page = sanitizeString(asString(data.page, 200));
    const utm = sanitizeUtm(data.utm);

    const [saved, email] = await Promise.all([
      saveLead({
        source: "demo",
        ...lead,
        industry: answers.industry,
        has_website: answers.website,
        goal: answers.goal,
        lead_source: answers.source,
        timeline: answers.timeline,
        recommended_package: isQuizComplete(answers) ? recommendPackage(answers).name : undefined,
        page,
        utm,
      }),
      (async () => {
        const content = formatLeadEmail({ ...lead, answers, page, utm });
        return sendEmail({ to: ADMIN_EMAIL, replyTo: lead.email, ...content });
      })(),
    ]);

    // The request counts as received when at least one of the two channels worked.
    if (!saved.saved && !email.success) {
      console.error("Lead lost: neither Supabase nor e-mail worked", { supabase: saved.error, email: email.error });
      return NextResponse.json(
        { success: false, error: "Most nem sikerült elküldeni. Próbáld újra, vagy hívj minket: +36 70 576 7845." },
        { status: 500 }
      );
    }

    // Best effort: needs EMAIL_FROM on a domain verified in Resend.
    const confirmation = formatLeadConfirmation(lead);
    const confirmed = await sendEmail({ to: lead.email, replyTo: ADMIN_EMAIL, ...confirmation });
    if (!confirmed.success) console.warn("Lead confirmation e-mail not sent:", confirmed.error);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { success: false, error: "Most nem sikerült elküldeni. Próbáld újra, vagy hívj minket: +36 70 576 7845." },
      { status: 500 }
    );
  }
}
