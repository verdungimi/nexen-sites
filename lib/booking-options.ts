// Single source of truth for the booking form's choice fields.
// Imported by the form (app/(site)/book), the API (app/api/booking) and the e-mail template (lib/email.ts),
// so the stored values and the human labels can never drift apart.

export interface BookingOption {
  value: string;
  label: string;
}

/** Visitor's annual company revenue (qualifying question). */
export const REVENUE_OPTIONS = [
  { value: "under-50m", label: "50 millió Ft alatt" },
  { value: "50-200m", label: "50–200 millió Ft" },
  { value: "200m-1b", label: "200 millió – 1 milliárd Ft" },
  { value: "over-1b", label: "1 milliárd Ft felett" },
  { value: "no-answer", label: "Nem szeretném megadni" },
] as const satisfies readonly BookingOption[];

/** The budget the visitor has in mind for the website (qualifying question, not our price). */
export const BUDGET_OPTIONS = [
  { value: "under-1m", label: "1 millió Ft alatt" },
  { value: "1-2.5m", label: "1–2,5 millió Ft" },
  { value: "2.5-5m", label: "2,5–5 millió Ft" },
  { value: "over-5m", label: "5 millió Ft felett" },
  { value: "unknown", label: "Még nem tudom" },
] as const satisfies readonly BookingOption[];

export const PURPOSE_OPTIONS = [
  { value: "new-site", label: "Új weboldal (most nincs, vagy teljesen elavult)" },
  { value: "redesign", label: "A mostani oldal újratervezése" },
  { value: "landing", label: "Landing oldal hirdetéshez vagy szolgáltatáshoz" },
  { value: "growth", label: "Folyamatos ügyfélszerzés (oldal, landingek, gondozás)" },
  { value: "unknown", label: "Még nem tudom" },
] as const satisfies readonly BookingOption[];

export const DEADLINE_OPTIONS = [
  { value: "asap", label: "Amint lehet" },
  { value: "1-2weeks", label: "1–2 héten belül" },
  { value: "1month+", label: "Egy hónapon belül vagy később" },
] as const satisfies readonly BookingOption[];

/** Consultation start times offered on every weekday (Hungarian time). */
export const TIME_SLOTS = ["09:00", "11:00", "13:00", "15:00", "17:00"] as const;

export type RevenueValue = (typeof REVENUE_OPTIONS)[number]["value"];
export type BudgetValue = (typeof BUDGET_OPTIONS)[number]["value"];
export type PurposeValue = (typeof PURPOSE_OPTIONS)[number]["value"];
export type DeadlineValue = (typeof DEADLINE_OPTIONS)[number]["value"];
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
