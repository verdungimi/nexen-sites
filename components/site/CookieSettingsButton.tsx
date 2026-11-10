"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";
import { cn } from "@/lib/utils";

/** Reopens the cookie banner on its settings view (footer and the cookie page). */
export default function CookieSettingsButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className={cn("inline-flex min-h-10 items-center text-left text-cloud transition-colors hover:text-white", className)}
    >
      {children ?? "Cookie-beállítások"}
    </button>
  );
}
