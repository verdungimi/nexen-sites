"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { buttonClasses } from "@/components/site/Button";
import { CONTACT } from "@/lib/site";
import { trackLead } from "@/lib/track";
import { suggestEmailDomain, validateContactData } from "@/lib/validation";

type FieldName = "name" | "email" | "phone" | "message";
const ORDER: FieldName[] = ["name", "email", "phone", "message"];
const EMPTY: Record<FieldName, string> = { name: "", email: "", phone: "", message: "" };

/** General message form on /kapcsolat. Phone is optional here, but must be a real Hungarian number when given. */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [serverError, setServerError] = useState("");
  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  const set = (name: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((current) => ({ ...current, [name]: event.target.value }));

  const blur = (name: FieldName) => () => {
    if (!values[name]) return;
    setErrors((current) => ({ ...current, [name]: validateContactData(values).errors[name] }));
  };

  const emailSuggestion = values.email && !errors.email ? suggestEmailDomain(values.email.trim()) : undefined;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;
    setServerError("");

    const result = validateContactData(values);
    setErrors(result.errors);
    if (!result.isValid) {
      const firstInvalid = ORDER.find((name) => result.errors[name]);
      if (firstInvalid) document.getElementById(`kapcsolat-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, fax: honeypot.current?.value ?? "", elapsedMs: Date.now() - startedAt.current }),
      });
      const data = (await response.json().catch(() => ({}))) as { success?: boolean; error?: string; errors?: Record<string, string> };
      if (response.ok && data.success) {
        trackLead("contact");
        setStatus("sent");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerError(data.error ?? (data.errors ? "" : `Most nem sikerült elküldeni. Próbáld újra, vagy hívj minket: ${CONTACT.phone}.`));
    } catch {
      setServerError(`Nincs kapcsolat a szerverrel. Ellenőrizd az internetet, vagy hívj minket: ${CONTACT.phone}.`);
    }
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-3xl bg-mist p-7 outline-none sm:p-9">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-navy">
          <Check aria-hidden="true" strokeWidth={3} className="h-6 w-6" />
        </span>
        <h3 className="type-h3 mt-5 !text-[1.75rem]">Köszönjük, megkaptuk az üzeneted.</h3>
        <p className="mt-3 text-muted">Egy munkanapon belül válaszolunk erre a címre: {values.email.trim()}</p>
      </div>
    );
  }

  const describe = (name: FieldName) => (errors[name] ? `kapcsolat-${name}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Üzenet küldése" className="space-y-4">
      <div>
        <label htmlFor="kapcsolat-name" className="field-label">
          Neved
        </label>
        <input id="kapcsolat-name" name="name" type="text" autoComplete="name" required value={values.name} onChange={set("name")} onBlur={blur("name")} aria-invalid={errors.name ? true : undefined} aria-describedby={describe("name")} className="field-input" />
        {errors.name && <p id="kapcsolat-name-error" className="field-error">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="kapcsolat-email" className="field-label">
          E-mail-cím
        </label>
        <input id="kapcsolat-email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="nev@cegnev.hu" required value={values.email} onChange={set("email")} onBlur={blur("email")} aria-invalid={errors.email ? true : undefined} aria-describedby={describe("email")} className="field-input" />
        {errors.email && <p id="kapcsolat-email-error" className="field-error">{errors.email}</p>}
        {emailSuggestion && (
          <p className="mt-1.5 text-[0.9375rem] text-muted">
            Erre gondoltál?{" "}
            <button type="button" className="link" onClick={() => setValues((current) => ({ ...current, email: emailSuggestion }))}>
              {emailSuggestion}
            </button>
          </p>
        )}
      </div>

      <div>
        <label htmlFor="kapcsolat-phone" className="field-label">
          Telefonszám <span className="font-normal text-muted">(nem kötelező)</span>
        </label>
        <input id="kapcsolat-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+36 30 123 4567" value={values.phone} onChange={set("phone")} onBlur={blur("phone")} aria-invalid={errors.phone ? true : undefined} aria-describedby={describe("phone")} className="field-input" />
        {errors.phone && <p id="kapcsolat-phone-error" className="field-error">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="kapcsolat-message" className="field-label">
          Miben segíthetünk?
        </label>
        <textarea id="kapcsolat-message" name="message" rows={5} required value={values.message} onChange={set("message")} onBlur={blur("message")} aria-invalid={errors.message ? true : undefined} aria-describedby={describe("message")} className="field-input resize-y" />
        {errors.message && <p id="kapcsolat-message-error" className="field-error">{errors.message}</p>}
      </div>

      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="kapcsolat-fax">Fax (hagyd üresen)</label>
        <input ref={honeypot} id="kapcsolat-fax" name="fax" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {serverError && (
        <p role="alert" className="rounded-xl border-[1.5px] border-danger px-4 py-3 font-medium text-danger">
          {serverError}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className={buttonClasses("navy", "lg", "w-full")}>
        {status === "sending" ? (
          <>
            <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
            Küldés…
          </>
        ) : (
          "Elküldöm az üzenetet"
        )}
      </button>

      <p className="text-[0.9375rem] leading-snug text-muted">
        Az adataidat csak a válaszadáshoz használjuk, az{" "}
        <Link href="/privacy" className="link">
          adatkezelési tájékoztató
        </Link>{" "}
        szerint.
      </p>
    </form>
  );
}
