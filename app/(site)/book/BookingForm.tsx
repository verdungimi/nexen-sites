"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/site/Button";
import { cn } from "@/lib/utils";
import {
  BUDGET_OPTIONS,
  DEADLINE_OPTIONS,
  PURPOSE_OPTIONS,
  REVENUE_OPTIONS,
  TIME_SLOTS,
  type BookingOption,
} from "@/lib/booking-options";
import { BOOKING_ERRORS, validateEmail, validatePhone } from "@/lib/validation";

type SelectName = "revenue" | "budget" | "purpose" | "deadline";
type Errors = Record<string, string>;

/** Order used to move focus to the first invalid field. */
const FIELD_ORDER = ["name", "email", "phone", "revenue", "budget", "timeslot", "privacy"];

/** The next `count` weekdays, starting tomorrow. */
function getAvailableDays(count: number) {
  const days: Date[] = [];
  const cursor = new Date();
  // Midday keeps the ISO timestamp on the same calendar day in any European time zone
  cursor.setHours(12, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

/** Focus ring comes from the global brass :focus-visible rule in site.css. */
function controlClass(hasError: boolean) {
  return cn(
    "block min-h-12 w-full rounded-xl border bg-graphite px-4 py-3 text-bone placeholder:text-fog transition-colors duration-200",
    hasError ? "border-rust" : "border-rule hover:border-fog/60"
  );
}

function describedBy(id: string, hint?: string, error?: string) {
  const ids = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ");
  return ids || undefined;
}

interface FieldProps {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

function Field({ id, label, optional, hint, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block font-medium text-bone">
        {label}
        {optional && <span className="font-normal text-fog"> (nem kötelező)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-[0.9375rem] text-fog">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[0.9375rem] text-rust">
          {error}
        </p>
      )}
    </div>
  );
}

interface SelectFieldProps {
  name: SelectName;
  label: string;
  options: readonly BookingOption[];
  value: string;
  onChange: (name: SelectName, value: string) => void;
  required?: boolean;
  error?: string;
}

function SelectField({ name, label, options, value, onChange, required, error }: SelectFieldProps) {
  return (
    <Field id={name} label={label} optional={!required} error={error}>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(name, undefined, error)}
          onChange={(event) => onChange(name, event.target.value)}
          className={cn(controlClass(Boolean(error)), "cursor-pointer appearance-none pr-12", !value && "text-fog")}
        >
          <option value="" className="text-bone">
            Válassz…
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-bone">
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-fog"
        />
      </div>
    </Field>
  );
}

const fieldsetClass = "min-w-0 border-t border-rule pt-8";
const legendClass = "wdth-title float-left w-full text-xl font-semibold text-bone";

export default function BookingForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [choices, setChoices] = useState<Record<SelectName, string>>({
    revenue: "",
    budget: "",
    purpose: "",
    deadline: "",
  });
  const [availableDays, setAvailableDays] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const dayGroupRef = useRef<HTMLDivElement>(null);
  const timeGroupRef = useRef<HTMLDivElement>(null);

  // Computed after mount: the page is prerendered, so "tomorrow" must come from the visitor's clock
  useEffect(() => {
    setAvailableDays(getAvailableDays(10));
  }, []);

  const clearError = (name: string) => {
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleChoice = (name: SelectName, value: string) => {
    setChoices((current) => ({ ...current, [name]: value }));
    clearError(name);
  };

  const focusFirstError = (found: Errors) => {
    const first = FIELD_ORDER.find((key) => found[key]);
    if (!first) return;
    const target =
      first === "timeslot"
        ? (selectedDate ? timeGroupRef.current : dayGroupRef.current)?.querySelector("button")
        : document.getElementById(first);
    target?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const text = (key: string) => String(formData.get(key) ?? "").trim();
    const data = {
      name: text("name"),
      company: text("company"),
      email: text("email"),
      phone: text("phone"),
      revenue: choices.revenue,
      budget: choices.budget,
      purpose: choices.purpose,
      deadline: choices.deadline,
      description: text("description"),
      privacyAccepted: formData.get("privacy") === "on",
      selectedDate: selectedDate ? selectedDate.toISOString() : undefined,
      selectedTime: selectedTime || undefined,
    };

    // Validation (mirrors the server rules in lib/validation.ts)
    const newErrors: Errors = {};
    if (!data.name) newErrors.name = BOOKING_ERRORS.nameRequired;
    else if (data.name.length < 2) newErrors.name = BOOKING_ERRORS.nameTooShort;
    if (!data.email) newErrors.email = BOOKING_ERRORS.emailRequired;
    else if (!validateEmail(data.email)) newErrors.email = BOOKING_ERRORS.emailInvalid;
    if (!data.phone) newErrors.phone = BOOKING_ERRORS.phoneRequired;
    else if (!validatePhone(data.phone)) newErrors.phone = BOOKING_ERRORS.phoneInvalid;
    if (!data.revenue) newErrors.revenue = BOOKING_ERRORS.choiceRequired;
    if (!data.budget) newErrors.budget = BOOKING_ERRORS.choiceRequired;
    if (!selectedDate || !selectedTime) newErrors.timeslot = BOOKING_ERRORS.timeslot;
    if (!data.privacyAccepted) newErrors.privacy = BOOKING_ERRORS.privacy;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      focusFirstError(newErrors);
      return;
    }

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          // Server-side validation errors map straight onto the fields
          setErrors(result.errors);
          focusFirstError(result.errors);
        } else {
          const errorMessage =
            result.error ||
            result.details ||
            result.message ||
            "Hiba történt a foglalás elküldése közben. Kérjük, próbáld újra.";
          setErrors({ submit: errorMessage });
        }
        setIsSubmitting(false);
        return;
      }

      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Hiba történt. Kérjük, próbáld újra, vagy hívj minket telefonon." });
      setIsSubmitting(false);
    }
  };

  const dayWeekday = (day: Date) => day.toLocaleDateString("hu-HU", { weekday: "long" });
  const dayDate = (day: Date) => day.toLocaleDateString("hu-HU", { month: "short", day: "numeric" });
  const timeslotDescription = describedBy("timeslot", "hint", errors.timeslot);

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="Konzultáció foglalása"
      className="rounded-[1.25rem] border border-rule bg-graphite-raised p-5 sm:p-8 lg:p-10"
    >
      <div className="space-y-10">
        <fieldset className="min-w-0">
          <legend className={legendClass}>Veled kapcsolatban</legend>
          <div className="clear-left grid gap-6 pt-5 sm:grid-cols-2">
            <Field id="name" label="Név" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Kovács Anna"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={describedBy("name", undefined, errors.name)}
                onChange={() => clearError("name")}
                className={controlClass(Boolean(errors.name))}
              />
            </Field>
            <Field id="company" label="Cégnév" optional>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Kovács Építő Kft."
                className={controlClass(false)}
              />
            </Field>
            <Field id="email" label="E-mail" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="anna@kovacsepito.hu"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={describedBy("email", undefined, errors.email)}
                onChange={() => clearError("email")}
                className={controlClass(Boolean(errors.email))}
              />
            </Field>
            <Field id="phone" label="Telefonszám" error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="+36 30 123 4567"
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={describedBy("phone", undefined, errors.phone)}
                onChange={() => clearError("phone")}
                className={controlClass(Boolean(errors.phone))}
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>A cégedről</legend>
          <div className="clear-left grid gap-6 pt-5">
            <SelectField
              name="revenue"
              label="A céged éves árbevétele"
              options={REVENUE_OPTIONS}
              value={choices.revenue}
              onChange={handleChoice}
              required
              error={errors.revenue}
            />
            <SelectField
              name="budget"
              label="Mekkora keretet szánnál a weboldalra?"
              options={BUDGET_OPTIONS}
              value={choices.budget}
              onChange={handleChoice}
              required
              error={errors.budget}
            />
          </div>
        </fieldset>

        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>A projektről</legend>
          <div className="clear-left grid gap-6 pt-5">
            <SelectField
              name="purpose"
              label="Mire van szükséged?"
              options={PURPOSE_OPTIONS}
              value={choices.purpose}
              onChange={handleChoice}
            />
            <SelectField
              name="deadline"
              label="Mikor indulnál?"
              options={DEADLINE_OPTIONS}
              value={choices.deadline}
              onChange={handleChoice}
            />
            <Field id="description" label="Mit szeretnél elérni az új weboldallal?" optional hint="Pár mondat is elég.">
              <textarea
                id="description"
                name="description"
                rows={4}
                aria-describedby="description-hint"
                placeholder="Például: több ajánlatkérést a nagyobb felújítási munkákra, kevesebb árérzékeny érdeklődőt."
                className={cn(controlClass(false), "min-h-32 resize-y")}
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className={fieldsetClass} aria-describedby={timeslotDescription}>
          <legend className={legendClass}>Időpont</legend>
          <div className="clear-left pt-2">
            <p id="timeslot-hint" className="text-[0.9375rem] text-fog">
              Az időpontot e-mailben vagy telefonon visszaigazoljuk.
            </p>

            <p id="day-label" className="mt-5 font-medium text-bone">
              Nap
            </p>
            <div
              ref={dayGroupRef}
              role="group"
              aria-labelledby="day-label"
              className="-mx-5 mt-2 flex min-h-[4.25rem] gap-2 overflow-x-auto px-5 py-1.5 sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0 lg:grid-cols-4 xl:grid-cols-5"
            >
              {availableDays.map((day) => {
                const isSelected = selectedDate?.toDateString() === day.toDateString();
                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelectedDate(day);
                      setSelectedTime(null);
                    }}
                    className={cn(
                      "flex min-h-16 min-w-[5.5rem] shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl border px-3 py-2 text-center transition-colors duration-200",
                      isSelected
                        ? "border-brass bg-brass text-graphite"
                        : "border-rule bg-graphite text-bone hover:border-fog/60 hover:bg-graphite-strong"
                    )}
                  >
                    <span className="text-[0.8125rem] leading-tight">{dayWeekday(day)}</span>
                    <span className="whitespace-nowrap font-semibold leading-tight tabular-nums">{dayDate(day)}</span>
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <>
                <p id="time-label" className="mt-6 font-medium text-bone">
                  Kezdés
                </p>
                <div ref={timeGroupRef} role="group" aria-labelledby="time-label" className="mt-2 flex flex-wrap gap-2 py-1.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelectedTime(slot);
                          clearError("timeslot");
                        }}
                        className={cn(
                          "min-h-11 min-w-[5.5rem] rounded-full border px-5 font-semibold tabular-nums transition-colors duration-200",
                          isSelected
                            ? "border-brass bg-brass text-graphite"
                            : "border-rule bg-graphite text-bone hover:border-fog/60 hover:bg-graphite-strong"
                        )}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {errors.timeslot && (
              <p id="timeslot-error" className="mt-3 text-[0.9375rem] text-rust">
                {errors.timeslot}
              </p>
            )}
          </div>
        </fieldset>

        <div className="border-t border-rule pt-8">
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              aria-invalid={errors.privacy ? true : undefined}
              aria-describedby={describedBy("privacy", undefined, errors.privacy)}
              onChange={() => clearError("privacy")}
              className="mt-0.5 h-6 w-6 shrink-0 cursor-pointer accent-brass"
            />
            <label htmlFor="privacy" className="cursor-pointer text-bone">
              Elolvastam és elfogadom az{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-rule underline-offset-4 transition-colors hover:decoration-brass"
              >
                adatkezelési tájékoztatót
                <span className="sr-only"> (új lapon nyílik meg)</span>
              </a>
              .
            </label>
          </div>
          {errors.privacy && (
            <p id="privacy-error" className="mt-2 text-[0.9375rem] text-rust">
              {errors.privacy}
            </p>
          )}
        </div>

        {errors.submit && (
          <div role="alert" className="rounded-xl border border-rust p-4 text-bone">
            {errors.submit}
          </div>
        )}

        <div>
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? "Foglalás folyamatban…" : "Időpont lefoglalása"}
          </Button>
          <p className="mt-4 text-[0.9375rem] text-fog">
            A megadott adatokat csak a konzultáció előkészítéséhez használjuk.
          </p>
        </div>
      </div>
    </form>
  );
}
