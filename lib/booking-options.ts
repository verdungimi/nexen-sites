// Single source of truth for the booking form's choice fields.
// Imported by the form (app/(site)/book), the API (app/api/booking) and the e-mail template (lib/email.ts).
// The revenue and budget questions were removed in the 2026 rebuild on purpose.

export interface BookingOption {
  value: string;
  label: string;
}

export const PURPOSE_OPTIONS = [
  { value: "new-site", label: "Új weboldal" },
  { value: "redesign", label: "A mostani oldal újratervezése" },
  { value: "landing", label: "Landing oldal" },
  { value: "webshop", label: "Webshop" },
  { value: "geo", label: "GEO: AI-keresőkre optimalizálás" },
  { value: "unknown", label: "Még nem tudom" },
] as const satisfies readonly BookingOption[];

/** Consultation start times offered on every weekday (Hungarian time). */
export const TIME_SLOTS = ["09:00", "11:00", "13:00", "15:00", "17:00"] as const;

export type PurposeValue = (typeof PURPOSE_OPTIONS)[number]["value"];
export type TimeSlot = (typeof TIME_SLOTS)[number];

export function isOptionValue<T extends readonly BookingOption[]>(
  options: T,
  value: unknown
): value is T[number]["value"] {
  return typeof value === "string" && options.some((option) => option.value === value);
}

export function isTimeSlot(value: unknown): value is TimeSlot {
  return typeof value === "string" && (TIME_SLOTS as readonly string[]).includes(value);
}

/** Human label for a stored value, or undefined when the value is empty or unknown. */
export function optionLabel(options: readonly BookingOption[], value: string | undefined): string | undefined {
  if (!value) return undefined;
  return options.find((option) => option.value === value)?.label;
}
