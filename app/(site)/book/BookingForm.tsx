"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarCheck, Check, Loader2 } from "lucide-react";
import { buttonClasses } from "@/components/site/Button";
import { PURPOSE_OPTIONS, TIME_SLOTS } from "@/lib/booking-options";
import { CONTACT } from "@/lib/site";
import { readUtm, trackLead } from "@/lib/track";
import { cn } from "@/lib/utils";
import { BOOKING_ERRORS, suggestEmailDomain, validateBookingData } from "@/lib/validation";

const WEEKDAY_SHORT = ["H", "K", "Sze", "Cs", "P"];
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** The next ten weekdays, starting tomorrow. */
function upcomingWeekdays(count = 10): Date[] {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const weekday = cursor.getDay();
    if (weekday !== 0 && weekday !== 6) days.push(new Date(cursor));
  }
  return days;
}

/** Puts the days into Monday–Friday rows; cells before the first available day stay empty. */
function groupIntoWeeks(days: Date[]): (Date | null)[][] {
  const weeks: (Date | null)[][] = [];
  let current: (Date | null)[] = [];
  let currentMonday = "";
  for (const day of days) {
    const column = (day.getDay() + 6) % 7;
    const monday = new Date(day);
    monday.setDate(day.getDate() - column);
    if (monday.toDateString() !== currentMonday) {
      currentMonday = monday.toDateString();
      current = Array<Date | null>(5).fill(null);
      weeks.push(current);
    }
    current[column] = day;
  }
  return weeks;
}

type FieldName = "name" | "company" | "email" | "phone" | "description";
const EMPTY: Record<FieldName, string> = { name: "", company: "", email: "", phone: "", description: "" };

/**
 * Consultation booking: a topic, a day and a start time, then contact details.
 * The revenue and budget questions of the old form were removed on purpose.
 */
export default function BookingForm() {
  const [days, setDays] = useState<Date[]>([]);
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [values, setValues] = useState(EMPTY);
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [serverError, setServerError] = useState("");
  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const dayGroupRef = useRef<HTMLDivElement>(null);

  // Dates depend on "today", so they are computed in the browser to avoid a server/client mismatch
  useEffect(() => {
    setDays(upcomingWeekdays());
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  const weeks = useMemo(() => groupIntoWeeks(days), [days]);
  const summary =
    date && time
      ? `${capitalize(date.toLocaleDateString("hu-HU", { weekday: "long" }))}, ${date.toLocaleDateString("hu-HU", { year: "numeric", month: "long", day: "numeric" })}, ${time}`
      : null;

  const payload = () => ({
    ...values,
    purpose,
    selectedDate: date?.toISOString(),
    selectedTime: time ?? undefined,
    privacyAccepted: privacy,
  });

  const set = (name: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((current) => ({ ...current, [name]: event.target.value }));

  const blur = (name: "name" | "email" | "phone") => () => {
    if (!values[name]) return;
    setErrors((current) => ({ ...current, [name]: validateBookingData(payload()).errors[name] }));
  };

  const emailSuggestion = values.email && !errors.email ? suggestEmailDomain(values.email.trim()) : undefined;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;
    setServerError("");

    const result = validateBookingData(payload());
    setErrors(result.errors);
    if (!result.isValid) {
      if (result.errors.timeslot) {
        dayGroupRef.current?.scrollIntoView({ block: "center" });
        dayGroupRef.current?.querySelector<HTMLButtonElement>("button")?.focus({ preventScroll: true });
      } else {
        const first = (["name", "email", "phone"] as const).find((name) => result.errors[name]);
        document.getElementById(first ? `foglalas-${first}` : "foglalas-privacy")?.focus();
      }
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload(), fax: honeypot.current?.value ?? "", elapsedMs: Date.now() - startedAt.current, utm: readUtm() }),
      });
      const data = (await response.json().catch(() => ({}))) as { success?: boolean; error?: string; errors?: Record<string, string> };
      if (response.ok && data.success) {
        trackLead("booking");
        setStatus("sent");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerError(data.error ?? (data.errors ? "" : `Most nem sikerült elküldeni a foglalást. Próbáld újra, vagy hívj minket: ${CONTACT.phone}.`));
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
        <h2 className="type-h3 mt-5 !text-[1.75rem]">Megkaptuk a foglalásod.</h2>
        <p className="mt-3 text-lg font-semibold">{summary}</p>
        <p className="mt-3 text-muted">Hamarosan visszaigazoljuk az időpontot, és elküldjük az online hívás linkjét erre a címre: {values.email.trim()}</p>
      </div>
    );
  }

  const chip = (selected: boolean) =>
    cn(
      "min-h-12 rounded-2xl border-[1.5px] px-4 text-base font-semibold transition-[border-color,background-color,color,transform] duration-200 ease-out active:scale-[0.97]",
      selected ? "border-navy bg-navy text-white" : "border-line-strong bg-white hover:border-navy"
    );

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Konzultáció foglalása" className="space-y-10">
      <fieldset>
        <legend className="type-h3">Miben segíthetünk?</legend>
        <p className="mt-1 text-muted">Nem kötelező, de segít felkészülni.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {PURPOSE_OPTIONS.map((option) => (
            <button key={option.value} type="button" aria-pressed={purpose === option.value} onClick={() => setPurpose(purpose === option.value ? "" : option.value)} className={chip(purpose === option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="type-h3">Mikor beszéljünk?</legend>
        <p id="nap-cimke" className="mt-4 font-semibold">
          Válassz napot
        </p>
        <div ref={dayGroupRef} role="group" aria-labelledby="nap-cimke" className="mt-3 min-h-[9.5rem]">
          {days.length > 0 && (
            <div className="grid grid-cols-5 gap-1.5 pb-2 text-center text-[0.8125rem] text-muted sm:gap-2" aria-hidden="true">
              {WEEKDAY_SHORT.map((weekday) => (
                <span key={weekday}>{weekday}</span>
              ))}
            </div>
          )}
          <div className="space-y-1.5 sm:space-y-2">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {week.map((day, column) => {
                  if (!day) return <span key={column} aria-hidden="true" className="min-h-14 rounded-2xl border-[1.5px] border-dashed border-line" />;
                  const selected = date?.toDateString() === day.toDateString();
                  return (
                    <button
                      key={day.toISOString()}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => {
                        setDate(day);
                        setErrors((current) => ({ ...current, timeslot: "" }));
                      }}
                      className={cn(chip(selected), "flex min-h-14 flex-col items-center justify-center px-1 leading-tight")}
                    >
                      {/* The weekday is in the column header for sighted users; screen readers get it here */}
                      <span className="sr-only">{day.toLocaleDateString("hu-HU", { weekday: "long" })}, </span>
                      <span className="text-lg tabular-nums">{day.getDate()}</span>
                      <span className={cn("text-[0.6875rem] font-medium", selected ? "text-cloud" : "text-muted")}>
                        {day.toLocaleDateString("hu-HU", { month: "short" })}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {date && (
          <div className="quiz-step mt-6">
            <p id="ido-cimke" className="font-semibold">
              Válassz kezdést <span className="font-normal text-muted">(magyar idő szerint)</span>
            </p>
            <div role="group" aria-labelledby="ido-cimke" className="mt-3 flex flex-wrap gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  aria-pressed={time === slot}
                  onClick={() => {
                    setTime(slot);
                    setErrors((current) => ({ ...current, timeslot: "" }));
                  }}
                  className={cn(chip(time === slot), "min-w-[5.5rem] tabular-nums")}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        <div aria-live="polite" className={cn("mt-6 flex items-center gap-3 rounded-2xl border-[1.5px] px-4 py-3.5", summary ? "border-navy bg-mist" : errors.timeslot ? "border-dashed border-danger" : "border-dashed border-line-strong text-muted")}>
          {summary ? (
            <>
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-navy text-white">
                <Check aria-hidden="true" strokeWidth={3} className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[0.8125rem] text-muted">A kiválasztott időpont</span>
                <span className="block font-semibold">{summary}</span>
              </span>
            </>
          ) : (
            <>
              <CalendarCheck aria-hidden="true" className="h-5 w-5 flex-none" />
              <span>{date ? "Már csak a kezdési időpont hiányzik." : "Az időpontot e-mailben vagy telefonon visszaigazoljuk."}</span>
            </>
          )}
        </div>
        {errors.timeslot && <p className="field-error">{errors.timeslot}</p>}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="type-h3 mb-4">Hogyan érünk el?</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="foglalas-name" className="field-label">
              Neved
            </label>
            <input id="foglalas-name" type="text" autoComplete="name" required value={values.name} onChange={set("name")} onBlur={blur("name")} aria-invalid={errors.name ? true : undefined} aria-describedby={errors.name ? "foglalas-name-error" : undefined} className="field-input" />
            {errors.name && <p id="foglalas-name-error" className="field-error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="foglalas-company" className="field-label">
              Céged neve <span className="font-normal text-muted">(nem kötelező)</span>
            </label>
            <input id="foglalas-company" type="text" autoComplete="organization" value={values.company} onChange={set("company")} className="field-input" />
          </div>
          <div>
            <label htmlFor="foglalas-phone" className="field-label">
              Telefonszám
            </label>
            <input id="foglalas-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+36 30 123 4567" required value={values.phone} onChange={set("phone")} onBlur={blur("phone")} aria-invalid={errors.phone ? true : undefined} aria-describedby={errors.phone ? "foglalas-phone-error" : undefined} className="field-input" />
            {errors.phone && <p id="foglalas-phone-error" className="field-error">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="foglalas-email" className="field-label">
              E-mail-cím
            </label>
            <input id="foglalas-email" type="email" inputMode="email" autoComplete="email" placeholder="nev@cegnev.hu" required value={values.email} onChange={set("email")} onBlur={blur("email")} aria-invalid={errors.email ? true : undefined} aria-describedby={errors.email ? "foglalas-email-error" : undefined} className="field-input" />
            {errors.email && <p id="foglalas-email-error" className="field-error">{errors.email}</p>}
            {emailSuggestion && (
              <p className="mt-1.5 text-[0.9375rem] text-muted">
                Erre gondoltál?{" "}
                <button type="button" className="link" onClick={() => setValues((current) => ({ ...current, email: emailSuggestion }))}>
                  {emailSuggestion}
                </button>
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="foglalas-description" className="field-label">
            Megjegyzés <span className="font-normal text-muted">(nem kötelező)</span>
          </label>
          <textarea id="foglalas-description" rows={3} value={values.description} onChange={set("description")} className="field-input resize-y" />
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              id="foglalas-privacy"
              type="checkbox"
              checked={privacy}
              onChange={(event) => {
                setPrivacy(event.target.checked);
                setErrors((current) => ({ ...current, privacy: "" }));
              }}
              aria-invalid={errors.privacy ? true : undefined}
              className="mt-1 h-5 w-5 flex-none accent-[#0B1E3F]"
            />
            <span>
              Elolvastam és elfogadom az{" "}
              <Link href="/privacy" className="link">
                adatkezelési tájékoztatót
              </Link>
              .
            </span>
          </label>
          {errors.privacy && <p className="field-error">{BOOKING_ERRORS.privacy}</p>}
        </div>
      </fieldset>

      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="foglalas-fax">Fax (hagyd üresen)</label>
        <input ref={honeypot} id="foglalas-fax" name="fax" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
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
          "Lefoglalom az időpontot"
        )}
      </button>
    </form>
  );
}
