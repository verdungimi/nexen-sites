import { NextRequest, NextResponse } from "next/server";
import { validateBookingData, sanitizeString, sanitizeText } from "@/lib/validation";
import { sendEmail, formatBookingEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Sanitize input data
    const bookingData = {
      name: sanitizeString(data.name || ""),
      company: sanitizeText(data.company),
      email: sanitizeString(data.email || ""),
      phone: sanitizeString(data.phone || ""),
      purpose: sanitizeText(data.purpose),
      deadline: sanitizeText(data.deadline),
      description: sanitizeText(data.description),
      selectedDate: data.selectedDate || undefined,
      selectedTime: data.selectedTime || undefined,
      privacyAccepted: data.privacyAccepted === true,
    };

    // Validate data
    const validation = validateBookingData({
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      privacyAccepted: bookingData.privacyAccepted,
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
      to: process.env.ADMIN_EMAIL || "info@nexensites.hu",
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

