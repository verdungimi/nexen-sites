import { NextRequest, NextResponse } from "next/server";
import { PURPOSE_OPTIONS, isOptionValue } from "@/lib/booking-options";
import { ADMIN_EMAIL, formatBookingConfirmation, formatBookingEmail, sendEmail } from "@/lib/email";
import { saveLead } from "@/lib/leads";
import { allowRequest, asString, clientIp, looksLikeBot, sanitizeUtm } from "@/lib/spam";
import { sanitizeString, sanitizeText, validateBookingData } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FAILED = "Most nem sikerült elküldeni a foglalást. Próbáld újra, vagy hívj minket: +36 70 576 7845.";

/** Consultation booking: saved to Supabase, e-mailed to Imi, confirmed to the visitor. */
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

    const purpose = asString(data.purpose, 40);
    const booking = {
      name: sanitizeString(asString(data.name, 120)),
      company: sanitizeText(asString(data.company, 160)),
      email: sanitizeString(asString(data.email, 254)).toLowerCase(),
      phone: sanitizeString(asString(data.phone, 40)),
      // Optional choice: anything outside the whitelist is dropped, not rejected
      purpose: isOptionValue(PURPOSE_OPTIONS, purpose) ? purpose : "",
      description: sanitizeText(asString(data.description, 2000)),
      selectedDate: asString(data.selectedDate, 40).trim() || undefined,
      selectedTime: asString(data.selectedTime, 10).trim() || undefined,
      privacyAccepted: data.privacyAccepted === true,
    };

    const validation = validateBookingData(booking);
    if (!validation.isValid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 });
    }

    const [saved, email] = await Promise.all([
      saveLead({
        source: "booking",
        name: booking.name,
        company: booking.company,
        email: booking.email,
        phone: booking.phone,
        message: [booking.purpose && `Téma: ${booking.purpose}`, booking.description].filter(Boolean).join("\n"),
        booking_date: booking.selectedDate?.slice(0, 10),
        booking_time: booking.selectedTime,
        page: "/book",
        utm: sanitizeUtm(data.utm),
      }),
      sendEmail({ to: ADMIN_EMAIL, replyTo: booking.email, ...formatBookingEmail(booking) }),
    ]);

    if (!saved.saved && !email.success) {
      console.error("Booking lost: neither Supabase nor e-mail worked", { supabase: saved.error, email: email.error });
      return NextResponse.json({ success: false, error: FAILED }, { status: 500 });
    }

    const confirmed = await sendEmail({ to: booking.email, replyTo: ADMIN_EMAIL, ...formatBookingConfirmation(booking) });
    if (!confirmed.success) console.warn("Booking confirmation e-mail not sent:", confirmed.error);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json({ success: false, error: FAILED }, { status: 500 });
  }
}
