import { NextRequest, NextResponse } from "next/server";
import { sendEmail, formatBookingEmail } from "@/lib/email";

// Test endpoint to check email functionality
export async function GET(request: NextRequest) {
  try {
    const testData = {
      name: "Teszt Felhasználó",
      email: "test@example.com",
      phone: "+36123456789",
      company: "Teszt Kft.",
      purpose: "landing",
      deadline: "asap",
      description: "Ez egy teszt email",
      selectedDate: "2024-12-25",
      selectedTime: "10:00",
    };

    const emailContent = formatBookingEmail(testData);
    const emailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || "info@nexensites.hu",
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    });

    return NextResponse.json(
      {
        success: emailResult.success,
        messageId: emailResult.messageId,
        error: emailResult.error,
        config: {
          hasResendKey: !!process.env.RESEND_API_KEY,
          emailFrom: process.env.EMAIL_FROM || "onboarding@resend.dev",
          adminEmail: process.env.ADMIN_EMAIL || "info@nexensites.hu",
        },
      },
      { status: emailResult.success ? 200 : 500 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        config: {
          hasResendKey: !!process.env.RESEND_API_KEY,
          emailFrom: process.env.EMAIL_FROM || "onboarding@resend.dev",
          adminEmail: process.env.ADMIN_EMAIL || "info@nexensites.hu",
        },
      },
      { status: 500 }
    );
  }
}

