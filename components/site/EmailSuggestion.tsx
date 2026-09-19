"use client";

import { suggestEmailDomain, validateEmail } from "@/lib/validation";

interface EmailSuggestionProps {
  /** Current value of the e-mail field */
  email: string;
  /** Only show once the visitor has left the field, so it never interrupts typing */
  visible: boolean;
  onApply: (corrected: string) => void;
}

/** "Erre gondoltál: anna@gmail.com?" for a valid-looking address whose domain is probably a typo. */
export default function EmailSuggestion({ email, visible, onApply }: EmailSuggestionProps) {
  const trimmed = email.trim();
  const suggestion = visible && validateEmail(trimmed) ? suggestEmailDomain(trimmed) : undefined;
  if (!suggestion) return null;

  return (
    <p className="mt-2 text-[0.9375rem] text-fog">
      Erre gondoltál:{" "}
      <button
        type="button"
        onClick={() => onApply(suggestion)}
        className="font-semibold text-bone underline decoration-brass underline-offset-4"
      >
        {suggestion}
      </button>
      ?
    </p>
  );
}
