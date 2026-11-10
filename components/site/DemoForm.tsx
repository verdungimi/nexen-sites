"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { QUIZ_EVENT, QUIZ_STORAGE_KEY, type QuizAnswers } from "@/lib/quiz";
import { CONTACT, CTA_LABEL } from "@/lib/site";
import { readUtm, trackLead } from "@/lib/track";
import { cn } from "@/lib/utils";
import { suggestEmailDomain, validateLeadData } from "@/lib/validation";
import { buttonClasses } from "./Button";

type FieldName = "name" | "company" | "phone" | "email" | "link";

const FIELDS: {
  name: FieldName;
  label: string;
  hint?: string;
  type: string;
  autoComplete: string;
  inputMode?: "tel" | "email" | "url" | "text";
  placeholder?: string;
  optional?: boolean;
}[] = [
  { name: "name", label: "Neved", type: "text", autoComplete: "name" },
  { name: "company", label: "Céged neve", type: "text", autoComplete: "organization" },
  { name: "phone", label: "Telefonszám", type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "+36 30 123 4567" },
  { name: "email", label: "E-mail-cím", type: "email", autoComplete: "email", inputMode: "email", placeholder: "nev@cegnev.hu" },
  {
    name: "link",
    label: "Mostani weboldalad vagy Facebook-oldalad",
    hint: "Ha van. Ebből dolgozunk a demóhoz.",
    type: "text",
    autoComplete: "url",
    inputMode: "url",
    placeholder: "cegnev.hu",
    optional: true,
  },
];

const EMPTY: Record<FieldName, string> = { name: "", company: "", phone: "", email: "", link: "" };

function readStoredAnswers(): QuizAnswers {
  try {
    const raw = window.sessionStorage.getItem(QUIZ_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as QuizAnswers) : {};
  } catch {
    return {};
  }
}

interface DemoFormProps {
  /** Quiz answers to attach. Without this prop the form picks up the answers of a quiz filled in earlier on the page. */
  answers?: QuizAnswers;
  /** Makes the ids unique when two forms are on one page */
  idPrefix: string;
  onNavy?: boolean;
}

/**
 * Demo request form: name, company, phone, e-mail and an optional link.
 * Phone and e-mail are checked strictly, on leaving the field and again on submit (and again on the server).
 */
export default function DemoForm({ answers, idPrefix, onNavy }: DemoFormProps) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [serverError, setServerError] = useState("");
  const [storedAnswers, setStoredAnswers] = useState<QuizAnswers>({});
  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    setStoredAnswers(readStoredAnswers());
    const onQuiz = () => setStoredAnswers(readStoredAnswers());
    window.addEventListener(QUIZ_EVENT, onQuiz);
    return () => window.removeEventListener(QUIZ_EVENT, onQuiz);
  }, []);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  const fieldId = (name: FieldName) => `${idPrefix}-${name}`;
  const emailSuggestion = values.email && !errors.email ? suggestEmailDomain(values.email.trim()) : undefined;

  const validateField = (name: FieldName) => {
    const result = validateLeadData(values);
    setErrors((current) => ({ ...current, [name]: result.errors[name] }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;
    setServerError("");

    const result = validateLeadData(values);
    setErrors(result.errors);
    if (!result.isValid) {
      const firstInvalid = FIELDS.find((field) => result.errors[field.name]);
      if (firstInvalid) document.getElementById(fieldId(firstInvalid.name))?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          answers: answers ?? storedAnswers,
          fax: honeypot.current?.value ?? "",
          elapsedMs: Date.now() - startedAt.current,
          page: window.location.pathname,
          utm: readUtm(),
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { success?: boolean; error?: string; errors?: Record<string, string> };
      if (response.ok && data.success) {
        trackLead("demo");
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
    const firstName = values.name.trim().split(/\s+/).pop();
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className={cn("rounded-3xl p-7 outline-none sm:p-9", onNavy ? "bg-navy-raised" : "bg-mist")}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-navy">
          <Check aria-hidden="true" strokeWidth={3} className="h-6 w-6" />
        </span>
        <h3 className="type-h3 mt-5 !text-[1.75rem]">Köszönjük, {firstName}! Megkaptuk a kérésed.</h3>
        <p className={cn("mt-3", onNavy ? "text-cloud" : "text-muted")}>
          Egy napon belül elkészítjük a demo weboldalt a(z) {values.company.trim()} számára, és jelentkezünk, hogy egy rövid online hívásban megmutassuk.
        </p>
        <p className={cn("mt-3", onNavy ? "text-cloud" : "text-muted")}>
          Visszaigazolást küldtünk erre a címre: <strong className={onNavy ? "text-white" : "text-navy"}>{values.email.trim()}</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Ingyenes demo kérése" className="space-y-4">
      {FIELDS.map((field) => {
        const error = errors[field.name];
        const hintId = field.hint ? `${fieldId(field.name)}-hint` : undefined;
        const errorId = error ? `${fieldId(field.name)}-error` : undefined;
        return (
          <div key={field.name}>
            <label htmlFor={fieldId(field.name)} className="field-label">
              {field.label}
              {field.optional && <span className={cn("font-normal", onNavy ? "text-cloud" : "text-muted")}> (nem kötelező)</span>}
            </label>
            <input
              id={fieldId(field.name)}
              name={field.name}
              type={field.type}
              inputMode={field.inputMode}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              required={!field.optional}
              value={values[field.name]}
              aria-invalid={error ? true : undefined}
              aria-describedby={[errorId, hintId].filter(Boolean).join(" ") || undefined}
              onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
              onBlur={() => values[field.name] && validateField(field.name)}
              className="field-input"
            />
            {error && (
              <p id={errorId} className={cn("field-error", onNavy && "!text-[#FFB4AB]")}>
                {error}
              </p>
            )}
            {field.name === "email" && emailSuggestion && (
              <p className={cn("mt-1.5 text-[0.9375rem]", onNavy ? "text-cloud" : "text-muted")}>
                Erre gondoltál?{" "}
                <button
                  type="button"
                  className="link"
                  onClick={() => setValues((current) => ({ ...current, email: emailSuggestion }))}
                >
                  {emailSuggestion}
                </button>
              </p>
            )}
            {field.hint && !error && (
              <p id={hintId} className={cn("mt-1.5 text-[0.9375rem]", onNavy ? "text-cloud" : "text-muted")}>
                {field.hint}
              </p>
            )}
          </div>
        );
      })}

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${idPrefix}-fax`}>Fax (hagyd üresen)</label>
        <input ref={honeypot} id={`${idPrefix}-fax`} name="fax" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {serverError && (
        <p role="alert" className={cn("rounded-xl border-[1.5px] px-4 py-3 font-medium", onNavy ? "border-[#FFB4AB] text-[#FFB4AB]" : "border-danger text-danger")}>
          {serverError}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className={buttonClasses("primary", "lg", "w-full")}>
        {status === "sending" ? (
          <>
            <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
            Küldés…
          </>
        ) : (
          CTA_LABEL
        )}
      </button>

      <p className={cn("text-[0.9375rem] leading-snug", onNavy ? "text-cloud" : "text-muted")}>
        A demo ingyenes, és semmire nem kötelez. Az adataidat csak a demo elkészítéséhez és a kapcsolatfelvételhez használjuk, az{" "}
        <Link href="/privacy" className="link">
          adatkezelési tájékoztató
        </Link>{" "}
        szerint.
      </p>
    </form>
  );
}
