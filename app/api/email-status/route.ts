import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Shows which integrations are configured. Reports only whether a value is set, never the value itself. */
export async function GET() {
  const set = (value: string | undefined) => (value ? "beállítva" : "nincs beállítva");
  return NextResponse.json({
    resendApiKey: set(process.env.RESEND_API_KEY),
    emailFrom: process.env.EMAIL_FROM ? "beállítva" : "nincs beállítva (alapértelmezés: onboarding@resend.dev, csak a fióktulajdonosnak kézbesít)",
    adminEmail: set(process.env.ADMIN_EMAIL),
    supabase: process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY ? "beállítva" : "nincs beállítva (a beküldések csak e-mailben érkeznek meg)",
    googleAnalytics: set(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
    metaPixel: set(process.env.NEXT_PUBLIC_META_PIXEL_ID),
    googleReviewLink: set(process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL),
  });
}
