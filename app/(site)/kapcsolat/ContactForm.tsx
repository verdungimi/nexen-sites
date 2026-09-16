"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/site/Button";
import { cn } from "@/lib/utils";
import { sanitizeText, validateEmail } from "@/lib/validation";

type FieldName = "name" | "email" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = { name: "", email: "", message: "" };
const FIELD_ORDER: FieldName[] = ["name", "email", "message"];

/** Mirrors the rules of POST /api/contact (the server trims and strips < and > before checking). */
function validate(values: Values): Errors {
  const errors: Errors = {};
  const name = sanitizeText(values.name);
  const email = values.email.trim();
  const message = sanitizeText(values.message);

  if (!name) errors.name = "Add meg a neved.";
  else if (name.length < 2) errors.name = "A név legalább 2 karakter legyen.";

  if (!email) errors.email = "Add meg az e-mail-címed.";
  else if (!validateEmail(email)) errors.email = "Ez nem tűnik érvényes e-mail-címnek.";

  if (!message) errors.message = "Írd meg az üzeneted.";
  else if (message.length < 10) errors.message = "Az üzenet legalább 10 karakter legyen.";

  return errors;
}

/** Focus ring comes from the global brass :focus-visible rule in site.css. */
function controlClass(hasError: boolean) {
  return cn(
    "block min-h-12 w-full rounded-xl border bg-graphite px-4 py-3 text-bone placeholder:text-fog transition-colors duration-200",
    hasError ? "border-rust" : "border-rule hover:border-fog/60"
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const update = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
    setStatus(null);
  };

  const fieldProps = (field: FieldName, className?: string) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    required: true,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => update(field, event.target.value),
    className: cn(controlClass(Boolean(errors[field])), "mt-2", className),
  });

  const errorText = (field: FieldName) =>
    errors[field] && (
      <p id={`contact-${field}-error`} className="mt-2 text-[0.9375rem] text-rust">
        {errors[field]}
      </p>
    );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const first = FIELD_ORDER.find((field) => found[field]);
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setValues(EMPTY);
        setStatus({ type: "success", message: "Megkaptuk az üzeneted. Egy munkanapon belül válaszolunk." });
      } else {
        setStatus({ type: "error", message: data.error || "Hiba történt az üzenet küldése közben. Kérjük, próbáld újra." });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({
        type: "error",
        message: "Hiba történt az üzenet küldése közben. Kérjük, próbáld újra, vagy hívj minket telefonon.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      className="rounded-[1.25rem] border border-rule bg-graphite-raised p-5 sm:p-8 lg:p-10"
    >
      <h2 id="contact-form-title" className="type-h3">
        Írj nekünk
      </h2>

      <div className="mt-8 grid gap-6">
        <div>
          <label htmlFor="contact-name" className="block font-medium text-bone">
            Név
          </label>
          <input
            {...fieldProps("name")}
            type="text"
            autoComplete="name"
            placeholder="Kovács Anna"
          />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor="contact-email" className="block font-medium text-bone">
            E-mail
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="anna@kovacsepito.hu"
          />
          {errorText("email")}
        </div>

        <div>
          <label htmlFor="contact-message" className="block font-medium text-bone">
            Üzenet
          </label>
          <textarea
            {...fieldProps("message", "min-h-40 resize-y")}
            rows={6}
            placeholder="Például: a mostani oldalunkat érdemes átalakítani, vagy inkább újat építeni?"
          />
          {errorText("message")}
        </div>

        <div aria-live="polite" aria-atomic="true">
          {status && <p className={status.type === "success" ? "text-moss" : "text-rust"}>{status.message}</p>}
        </div>

        <div>
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? "Küldés…" : "Üzenet küldése"}
          </Button>
        </div>
      </div>
    </form>
  );
}
