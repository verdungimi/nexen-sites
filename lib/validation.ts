// Validation utilities

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // Hungarian phone number validation (basic)
  const phoneRegex = /^(\+36|06)[\s-]?[1-9][\d\s-]{7,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

export function validateBookingData(data: {
  name?: string;
  email?: string;
  phone?: string;
  privacyAccepted?: boolean;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "A név kötelező és legalább 2 karakter hosszú kell legyen";
  }

  if (!data.email) {
    errors.email = "Az email cím kötelező";
  } else if (!validateEmail(data.email)) {
    errors.email = "Érvénytelen email cím formátum";
  }

  if (!data.phone) {
    errors.phone = "A telefonszám kötelező";
  } else if (!validatePhone(data.phone)) {
    errors.phone = "Érvénytelen telefonszám formátum";
  }

  if (!data.privacyAccepted) {
    errors.privacy = "Az adatvédelmi tájékoztató elfogadása kötelező";
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

