// Cookie consent, stored in the visitor's browser. Analytics (GA4) and marketing (Meta Pixel)
// load only after the matching consent. Nothing is loaded before a decision.

export interface Consent {
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

export const CONSENT_KEY = "nexen-consent";
export const CONSENT_EVENT = "nexen:consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "nexen:open-cookie-settings";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Consent>;
      return { analytics: parsed.analytics === true, marketing: parsed.marketing === true, decidedAt: parsed.decidedAt ?? "" };
    }
    // Decision made on the previous version of the site
    const legacy = window.localStorage.getItem("cookiePreferences");
    if (legacy && window.localStorage.getItem("cookieConsent")) {
      const parsed = JSON.parse(legacy) as { analytics?: boolean; marketing?: boolean };
      return { analytics: parsed.analytics === true, marketing: parsed.marketing === true, decidedAt: "" };
    }
  } catch {
    // Private mode or blocked storage: treat as no decision
  }
  return null;
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }): Consent {
  const consent: Consent = { ...choice, decidedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked: the choice still applies for this page view
  }
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: consent }));
  return consent;
}
