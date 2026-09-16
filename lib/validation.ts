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
  emailInvalid: "Ez nem tűnik érvényes e-mail-címnek.",
  phoneRequired: "Add meg a telefonszámod.",
  phoneInvalid: "Ez nem tűnik érvényes telefonszámnak.",
  choiceRequired: "Válassz egy lehetőséget.",
  timeslot: "Válassz napot és időpontot.",
  privacy: "A foglaláshoz el kell fogadnod az adatkezelési tájékoztatót.",
} as const;

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // More flexible phone number validation
  // Accepts: +36, 06, or international format
  const cleaned = phone.replace(/[\s-]/g, "");
  // At least 8 digits, can start with +, 00, or 06
  const phoneRegex = /^(\+?36|00?36|06)?[1-9]\d{7,9}$/;
  return phoneRegex.test(cleaned) && cleaned.length >= 8;
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
