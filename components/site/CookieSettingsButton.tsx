"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "@/components/CookieBanner";
import { cn } from "@/lib/utils";

/** Reopens the cookie banner's settings view so visitors can change an earlier choice. */
export default function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className={cn("inline-flex min-h-10 items-center text-left text-fog transition-colors hover:text-bone", className)}
    >
      Cookie-beállítások
    </button>
  );
}
