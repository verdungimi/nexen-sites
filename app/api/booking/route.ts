import { NextRequest, NextResponse } from "next/server";
import { validateBookingData, sanitizeString, sanitizeText } from "@/lib/validation";
import { sendEmail, formatBookingEmail } from "@/lib/email";
import { DEADLINE_OPTIONS, PURPOSE_OPTIONS, isOptionValue } from "@/lib/booking-options";

/** Non-string JSON values (numbers, objects, null) are treated as empty instead of crashing the sanitizers. */
function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const data = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;

    const purpose = sanitizeText(asString(data.purpose));
    const deadline = sanitizeText(asString(data.deadline));

    // Sanitize input data
    const bookingData = {
      name: sanitizeString(asString(data.name)),
      company: sanitizeText(asString(data.company)),
      email: sanitizeString(asString(data.email)),
      phone: sanitizeString(asString(data.phone)),
      revenue: sanitizeText(asString(data.revenue)),
      budget: sanitizeText(asString(data.budget)),
      // Optional choices: anything outside the whitelist is dropped, not rejected
      purpose: isOptionValue(PURPOSE_OPTIONS, purpose) ? purpose : "",
      deadline: isOptionValue(DEADLINE_OPTIONS, deadline) ? deadline : "",
      description: sanitizeText(asString(data.description)),
      selectedDate: asString(data.selectedDate).trim() || undefined,
      selectedTime: asString(data.selectedTime).trim() || undefined,
      privacyAccepted: data.privacyAccepted === true,
    };

    // Validate data
    const validation = validateBookingData({
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      privacyAccepted: bookingData.privacyAccepted,
      revenue: bookingData.revenue,
      budget: bookingData.budget,
      selectedDate: bookingData.selectedDate,
      selectedTime: bookingData.selectedTime,
    });

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Format and send email
    const emailContent = formatBookingEmail(bookingData);
    const emailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || "verdung.imi@gmail.com",
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    });

    if (!emailResult.success) {
      console.error("Email sending failed:", emailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: "Hiba történt az email küldése során",
        },
        { status: 500 }
      );
    }

    // TODO: Save to database when database is set up
    // await saveBookingToDatabase(bookingData);

    return NextResponse.json(
      {
        success: true,
        message: "Időpontfoglalás sikeresen elküldve",
        messageId: emailResult.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing booking:", error);
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

// GET endpoint to retrieve bookings (for admin - add authentication later)
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication
    // TODO: Fetch from database

    return NextResponse.json(
      {
        success: true,
        bookings: [],
        message: "Database integration pending",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Hiba történt az adatok lekérése során",
      },
      { status: 500 }
    );
  }
}
