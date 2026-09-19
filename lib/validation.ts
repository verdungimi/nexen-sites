// Validation utilities (shared by the API routes and the client-side form checks)

import { BUDGET_OPTIONS, REVENUE_OPTIONS, isOptionValue, isTimeSlot } from "./booking-options";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const BOOKING_ERRORS = {
  nameRequired: "Add meg a neved.",
  nameTooShort: "A név legalább 2 karakter legyen.",
  emailRequired: "Add meg az e-mail-címed.",
  emailInvalid: "Adj meg érvényes e-mail-címet, például nev@cegnev.hu.",
  phoneRequired: "Add meg a telefonszámod.",
  phoneInvalid: "Adj meg magyar telefonszámot, +36 vagy 06 kezdettel, például +36 30 123 4567.",
  choiceRequired: "Válassz egy lehetőséget.",
  timeslot: "Válassz napot és időpontot.",
  privacy: "A foglaláshoz el kell fogadnod az adatkezelési tájékoztatót.",
} as const;

/** Country prefixes we accept in front of a Hungarian number: +36, 0036 or the domestic 06. */
const PHONE_PREFIX = /^(?:\+36|0036|06)/;

/** Mobile and special-service area codes; these are followed by 7 digits (9 digits in total). */
const NINE_DIGIT_CODES = ["20", "30", "31", "50", "70", "40", "80", "90"];

/**
 * Hungarian phone number check. The prefix is required (+36, 0036 or 06), followed by
 * - Budapest: 1 + 7 digits, or
 * - a mobile/service code (20, 30, 31, 50, 70, 40, 80, 90) + 7 digits, or
 * - any other 2-digit area code (22–99) + 6 digits.
 * Spaces, dashes, slashes, dots and brackets are ignored.
 */
export function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-/().]/g, "");
  if (!PHONE_PREFIX.test(cleaned)) return false;

  const national = cleaned.replace(PHONE_PREFIX, "");
  if (!/^[1-9]\d+$/.test(national)) return false;
  // 1111111, 0000000 and similar fake numbers (checked on the whole number and on the part after the area code)
  const subscriber = national.startsWith("1") ? national.slice(1) : national.slice(2);
  if (/^(\d)\1+$/.test(national) || /^(\d)\1+$/.test(subscriber)) return false;

  if (national.startsWith("1")) return national.length === 8;
  const areaCode = national.slice(0, 2);
  if (NINE_DIGIT_CODES.includes(areaCode)) return national.length === 9;
  return national.length === 8;
}

/**
 * E-mail check: name@domain.tld with a real top-level domain (at least two letters), dot-separated
 * domain labels without leading/trailing hyphens, and no consecutive dots.
 */
export function validateEmail(email: string): boolean {
  if (email.length > 254) return false;
  const emailRegex =
    /^[A-Za-z0-9._%+'-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
  return emailRegex.test(email) && !email.includes("..") && !email.startsWith(".") && !email.split("@")[0].endsWith(".");
}

const COMMON_EMAIL_DOMAINS = ["gmail.com", "freemail.hu", "citromail.hu", "indamail.hu", "t-online.hu", "outlook.com", "hotmail.com", "yahoo.com", "icloud.com"];

/** Suggests the intended domain for typos such as "gmial.com" or "gmail.hu"; undefined when nothing looks off. */
export function suggestEmailDomain(email: string): string | undefined {
  const at = email.lastIndexOf("@");
  if (at < 1) return undefined;
  const domain = email.slice(at + 1).toLowerCase();
  if (COMMON_EMAIL_DOMAINS.includes(domain)) return undefined;

  const distance = (a: string, b: string): number => {
    const row = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      let prev = row[0];
      row[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = row[j];
        row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
        prev = tmp;
      }
    }
    return row[b.length];
  };

  const domainName = domain.split(".")[0];
  const match = COMMON_EMAIL_DOMAINS.find(
    (known) => distance(domain, known) <= 2 || (domainName.length > 3 && known.split(".")[0] === domainName)
  );
  return match ? `${email.slice(0, at)}@${match}` : undefined;
}

/** Accepts a calendar date or a full ISO 8601 timestamp (what Date#toISOString produces). */
export function isValidIsoDate(value: unknown): boolean {
  if (typeof value !== "string") return false;
  const isoPattern = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?)?$/;
  return isoPattern.test(value) && !Number.isNaN(Date.parse(value));
}

export function validateBookingData(data: {
  name?: string;
  email?: string;
  phone?: string;
  privacyAccepted?: boolean;
  revenue?: string;
  budget?: string;
  selectedDate?: string;
  selectedTime?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name) {
    errors.name = BOOKING_ERRORS.nameRequired;
  } else if (data.name.trim().length < 2) {
    errors.name = BOOKING_ERRORS.nameTooShort;
  }

  if (!data.email) {
    errors.email = BOOKING_ERRORS.emailRequired;
  } else if (!validateEmail(data.email)) {
    errors.email = BOOKING_ERRORS.emailInvalid;
  }

  if (!data.phone) {
    errors.phone = BOOKING_ERRORS.phoneRequired;
  } else if (!validatePhone(data.phone)) {
    errors.phone = BOOKING_ERRORS.phoneInvalid;
  }

  if (!isOptionValue(REVENUE_OPTIONS, data.revenue)) {
    errors.revenue = BOOKING_ERRORS.choiceRequired;
  }

  if (!isOptionValue(BUDGET_OPTIONS, data.budget)) {
    errors.budget = BOOKING_ERRORS.choiceRequired;
  }

  if (!isValidIsoDate(data.selectedDate) || !isTimeSlot(data.selectedTime)) {
    errors.timeslot = BOOKING_ERRORS.timeslot;
  }

  if (!data.privacyAccepted) {
    errors.privacy = BOOKING_ERRORS.privacy;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

export function sanitizeText(input: string | undefined): string {
  if (!input) return "";
  return input.trim().replace(/[<>]/g, "");
}
