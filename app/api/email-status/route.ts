import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const EMAIL_FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@nexensites.hu";

  return NextResponse.json(
    {
      resendApiKey: RESEND_API_KEY ? "✓ Beállítva" : "✗ Nincs beállítva",
      emailFrom: EMAIL_FROM,
      adminEmail: ADMIN_EMAIL,
      nodeEnv: process.env.NODE_ENV || "not set",
      status: RESEND_API_KEY ? "ready" : "development_mode",
      message: RESEND_API_KEY 
        ? "Resend API kulcs beállítva - email küldés aktív" 
        : "Resend API kulcs nincs beállítva - development mód (console log)",
    },
    { status: 200 }
  );
}

