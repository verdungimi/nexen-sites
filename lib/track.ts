// Conversion events. Safe to call anywhere on the client: when a tag has not been loaded
// (no consent or no ID), the call does nothing.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** A successful form submission: GA4 `generate_lead` and Meta Pixel `Lead`. */
export function trackLead(form: "demo" | "booking" | "contact") {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", { form_name: form });
  // Meta counts only the demo request and the booking as leads; a general message is a Contact
  window.fbq?.("track", form === "contact" ? "Contact" : "Lead", { content_name: form });
}

export function trackQuiz(event: "quiz_start" | "quiz_complete", params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const UTM_STORAGE_KEY = "nexen-utm";

/** Campaign parameters of the first page view in this tab, so they survive navigation to the form. */
export function readUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const current: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) current[key] = value;
    }
    if (Object.keys(current).length > 0) {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(current));
      return current;
    }
    const stored = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Record<string, string>) : {};
  } catch {
    return {};
  }
}
