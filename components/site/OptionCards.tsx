"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";
import type { BookingOption } from "@/lib/booking-options";

interface OptionCardsProps {
  name: string;
  label: string;
  options: readonly BookingOption[];
  value: string;
  onChange: (value: string) => void;
  optional?: boolean;
  hint?: string;
}

/**
 * Single-choice question rendered as selectable cards (native radio inputs underneath, so arrow keys and
 * screen readers work as usual). Clicking the chosen card again clears the answer, which keeps optional
 * questions optional.
 */
export default function OptionCards({ name, label, options, value, onChange, optional, hint }: OptionCardsProps) {
  const labelId = useId();

  return (
    <div>
      <p id={labelId} className="font-medium text-bone">
        {label}
        {optional && <span className="font-normal text-fog"> (nem kötelező)</span>}
      </p>
      {hint && <p className="mt-1 text-[0.9375rem] text-fog">{hint}</p>}

      <div role="radiogroup" aria-labelledby={labelId} className="mt-3 grid gap-2.5">
        {options.map((option) => {
          const checked = value === option.value;
          return (
            <label key={option.value} className="group relative block cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                onClick={() => checked && onChange("")}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "flex items-start gap-3.5 rounded-xl border bg-graphite p-4 transition-[border-color,background-color,transform] duration-200 ease-out",
                  "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brass",
                  "active:scale-[0.99]",
                  checked ? "border-brass bg-graphite-strong" : "border-rule hover:border-fog/60 hover:bg-graphite-strong/60"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border transition-colors duration-200",
                    checked ? "border-brass" : "border-fog/60 group-hover:border-bone"
                  )}
                >
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full bg-brass transition-transform duration-200 ease-out",
                      checked ? "scale-100" : "scale-0"
                    )}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold leading-snug text-bone">{option.label}</span>
                  {option.description && (
                    <span className="mt-0.5 block text-[0.9375rem] leading-snug text-fog">{option.description}</span>
                  )}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
