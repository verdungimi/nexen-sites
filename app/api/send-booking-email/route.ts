// This route is kept for backward compatibility
// New bookings should use /api/booking instead
import { NextRequest, NextResponse } from "next/server";
import { sendEmail, formatBookingEmail } from "@/lib/email";
import { validateBookingData, sanitizeString, sanitizeText } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Sanitize and format data
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
    };

    // Validate
    const validation = validateBookingData({
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      privacyAccepted: true, // Assume accepted for backward compatibility
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
          error: emailResult.error || "Hiba történt az email küldése során",
          details: emailResult.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sikeresen elküldve",
        messageId: emailResult.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Hiba történt az email küldése során",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
