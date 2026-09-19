"use client";

import { useId, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/site/Button";
import EmailSuggestion from "@/components/site/EmailSuggestion";
import { validateEmail } from "@/lib/validation";

type Field = "name" | "email" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const FIELDS: Field[] = ["name", "email", "message"];
const EMPTY: Values = { name: "", email: "", message: "" };

// Same clean-up and limits as app/api/contact/route.ts, so the form catches mistakes before sending.
const clean = (value: string) => value.trim().replace(/[<>]/g, "");

function validateField(field: Field, values: Values): string | undefined {
  const value = clean(values[field]);
  if (field === "name" && value.length < 2) return "Add meg a neved, legalább 2 karakterrel.";
  if (field === "email") {
    if (!value) return "Add meg az e-mail címed, hogy válaszolni tudjunk.";
    if (!validateEmail(value)) return "Adj meg érvényes e-mail-címet, például nev@cegnev.hu.";
  }
  if (field === "message" && value.length < 10) return "Írj legalább 10 karaktert, hogy tudjuk, miben segíthetünk.";
  return undefined;
}

function validate(values: Values): Errors {
  const errors: Errors = {};
  for (const field of FIELDS) {
    const error = validateField(field, values);
    if (error) errors[field] = error;
  }
  return errors;
}

const fieldClasses =
  "mt-2 block min-h-12 w-full rounded-xl border border-rule bg-graphite px-4 text-bone transition-colors duration-200 placeholder:text-fog/70 hover:border-fog/60 focus-visible:border-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/60 aria-[invalid=true]:border-rust";

export default function ContactForm() {
  const baseId = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [serverError, setServerError] = useState("");
  const [emailLeft, setEmailLeft] = useState(false);
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  const ids = {
    name: `${baseId}-name`,
    email: `${baseId}-email`,
    message: `${baseId}-message`,
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as Field;
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    if (status === "sent" || status === "failed") setStatus("idle");
    // Once a field has shown an error, re-check it while the visitor fixes it
    if (errors[field]) setErrors((current) => ({ ...current, [field]: validateField(field, next) }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const found = validate(values);
    setErrors(found);
    const firstInvalid = FIELDS.find((field) => found[field]);
    if (firstInvalid) {
      refs[firstInvalid].current?.focus();
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: { success?: boolean; error?: string } = await response.json().catch(() => ({}));

      if (data.success) {
        setValues(EMPTY);
        setErrors({});
        setStatus("sent");
      } else {
        setServerError(data.error || "Nem sikerült elküldeni az üzenetet. Próbáld újra, vagy hívj minket.");
        setStatus("failed");
      }
    } catch {
      setServerError("Nem sikerült elküldeni az üzenetet. Ellenőrizd az internetkapcsolatot, és próbáld újra.");
      setStatus("failed");
    }
  };

  const describedBy = (field: Field) => (errors[field] ? `${ids[field]}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-6">
      <div>
        <label htmlFor={ids.name} className="block font-medium text-bone">
          Név
        </label>
        <input
          ref={refs.name}
          id={ids.name}
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={handleChange}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy("name")}
          className={fieldClasses}
        />
        {errors.name && (
          <p id={`${ids.name}-error`} className="mt-2 text-[0.9375rem] text-rust">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={ids.email} className="block font-medium text-bone">
          E-mail
        </label>
        <input
          ref={refs.email}
          id={ids.email}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(event) => {
            setEmailLeft(false);
            handleChange(event);
          }}
          onBlur={() => {
            setEmailLeft(true);
            if (values.email.trim()) setErrors((current) => ({ ...current, email: validateField("email", values) }));
          }}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy("email")}
          className={fieldClasses}
        />
        {errors.email && (
          <p id={`${ids.email}-error`} className="mt-2 text-[0.9375rem] text-rust">
            {errors.email}
          </p>
        )}
        <EmailSuggestion
          email={values.email}
          visible={emailLeft && !errors.email}
          onApply={(corrected) => {
            setValues((current) => ({ ...current, email: corrected }));
            setEmailLeft(false);
          }}
        />
      </div>

      <div>
        <label htmlFor={ids.message} className="block font-medium text-bone">
          Üzenet
        </label>
        <textarea
          ref={refs.message}
          id={ids.message}
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className={`${fieldClasses} min-h-36 resize-y py-3 leading-relaxed`}
        />
        {errors.message && (
          <p id={`${ids.message}-error`} className="mt-2 text-[0.9375rem] text-rust">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" ? "Küldés…" : "Üzenet küldése"}
        </Button>

        {/* Always rendered so screen readers announce the confirmation when it appears */}
        <div role="status">
          {status === "sent" && <p className="mt-4 text-moss">Megkaptuk az üzeneted. Egy munkanapon belül válaszolunk.</p>}
        </div>
        {status === "failed" && serverError && (
          <p role="alert" className="mt-4 text-rust">
            {serverError}
          </p>
        )}

        <p className="type-small mt-5 text-fog">
          Az adataidat csak a válaszhoz használjuk. Részletek az{" "}
          <Link href="/privacy" className="text-bone underline decoration-rule underline-offset-4 hover:decoration-brass">
            adatkezelési tájékoztatóban
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
