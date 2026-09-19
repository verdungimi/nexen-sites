"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { CTA } from "@/lib/site";
import { ButtonLink } from "./Button";

const huf = new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF", maximumFractionDigits: 0 });
const whole = new Intl.NumberFormat("hu-HU", { maximumFractionDigits: 0 });
const oneDecimal = new Intl.NumberFormat("hu-HU", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

interface SliderProps {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (value: number) => string;
  onChange: (value: number) => void;
}

function Slider({ label, hint, value, min, max, step, format, onChange }: SliderProps) {
  const id = useId();
  return (
    <div className="border-b border-rule py-5 first:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="font-medium text-bone">
          {label}
        </label>
        <output htmlFor={id} className="wdth-title text-lg font-semibold tabular-nums text-bone">
          {format(value)}
        </output>
      </div>
      {hint && <p className="mt-1 text-[0.9375rem] text-fog">{hint}</p>}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={format(value)}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-4 h-11 w-full cursor-pointer accent-brass"
      />
    </div>
  );
}

/** Number that counts up or down to its new value; the text is decorative, screen readers get the final value elsewhere. */
function AnimatedNumber({ value, format, className }: { value: number; format: (value: number) => string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRef(value);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduceMotion) {
      shown.current = value;
      node.textContent = format(value);
      return;
    }
    const controls = animate(shown.current, value, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        shown.current = latest;
        node.textContent = format(latest);
      },
    });
    return () => controls.stop();
    // format is a stable module-level function in every caller
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduceMotion]);

  return (
    <span ref={ref} aria-hidden="true" className={className}>
      {format(value)}
    </span>
  );
}

/**
 * "How much is a better website worth to you?" estimator.
 *   inquiries now       = visitors × current rate
 *   inquiries with more = inquiries now × (1 + improvement)
 *   extra revenue       = (inquiries with more − inquiries now) × close rate × average deal value
 * Every input raises the result when it goes up, so the sliders never behave "backwards".
 */
export default function RoiCalculator() {
  const [dealValue, setDealValue] = useState(1_200_000);
  const [visitors, setVisitors] = useState(600);
  const [currentRate, setCurrentRate] = useState(1);
  const [closeRate, setCloseRate] = useState(25);
  const [uplift, setUplift] = useState(50);

  const result = useMemo(() => {
    const inquiriesNow = (visitors * currentRate) / 100;
    const inquiriesBetter = inquiriesNow * (1 + uplift / 100);
    const dealsNow = (inquiriesNow * closeRate) / 100;
    const dealsBetter = (inquiriesBetter * closeRate) / 100;
    const monthlyNow = dealsNow * dealValue;
    const monthlyBetter = dealsBetter * dealValue;
    const extra = monthlyBetter - monthlyNow;
    return { inquiriesNow, inquiriesBetter, dealsNow, dealsBetter, monthlyNow, monthlyBetter, extra, yearly: extra * 12 };
  }, [dealValue, visitors, currentRate, closeRate, uplift]);

  const percent = (value: number) => `${oneDecimal.format(value)}%`;
  const formatHuf = (value: number) => huf.format(Math.round(value));
  const formatDeals = (value: number) => oneDecimal.format(value);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <Slider
          label="Egy átlagos megbízás értéke"
          value={dealValue}
          min={100_000}
          max={10_000_000}
          step={50_000}
          format={(v) => huf.format(v)}
          onChange={setDealValue}
        />
        <Slider
          label="Havi látogató a weboldaladon"
          hint="Ha nem tudod pontosan, egy becslés is elég."
          value={visitors}
          min={100}
          max={10_000}
          step={50}
          format={(v) => `${whole.format(v)} fő`}
          onChange={setVisitors}
        />
        <Slider
          label="A látogatók ennyi százaléka kér most ajánlatot"
          hint="Ha nem tudod pontosan, 1–2% jó kiindulópont."
          value={currentRate}
          min={0.2}
          max={5}
          step={0.1}
          format={percent}
          onChange={setCurrentRate}
        />
        <Slider
          label="Az ajánlatkérésekből ennyi lesz megbízás"
          value={closeRate}
          min={5}
          max={60}
          step={5}
          format={(v) => `${whole.format(v)}%`}
          onChange={setCloseRate}
        />
        <Slider
          label="Egy jobb oldal ennyivel növeli az ajánlatkéréseket"
          hint="Óvatos tervezéshez 30–50% jó kiindulópont."
          value={uplift}
          min={10}
          max={150}
          step={10}
          format={(v) => `+${whole.format(v)}%`}
          onChange={setUplift}
        />
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-[1.25rem] border border-rule bg-graphite p-7 sm:p-9 lg:sticky lg:top-28">
          {/* Decorative animated numbers are aria-hidden; this line gives assistive tech the settled result */}
          <p className="sr-only" aria-live="polite">
            Havi plusz bevétel: {formatHuf(result.extra)}. Egy év alatt: {formatHuf(result.yearly)}.
          </p>

          <p className="text-fog">Havi plusz bevétel</p>
          <p className="type-h2 mt-2 tabular-nums text-brass">
            <AnimatedNumber value={result.extra} format={formatHuf} />
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-rule pt-6">
            <div>
              <dt className="text-[0.9375rem] text-fog">Egy év alatt</dt>
              <dd className="wdth-title mt-1 text-xl font-semibold tabular-nums">
                <AnimatedNumber value={result.yearly} format={formatHuf} />
              </dd>
            </div>
            <div>
              <dt className="text-[0.9375rem] text-fog">Megbízás havonta</dt>
              <dd className="wdth-title mt-1 text-xl font-semibold tabular-nums">
                <AnimatedNumber value={result.dealsNow} format={formatDeals} />
                <span className="px-1.5 text-fog">→</span>
                <AnimatedNumber value={result.dealsBetter} format={formatDeals} className="text-brass" />
              </dd>
            </div>
            <div className="col-span-2 border-t border-rule pt-6">
              <dt className="text-[0.9375rem] text-fog">Az oldalról érkező havi bevétel</dt>
              <dd className="wdth-title mt-1 flex flex-wrap items-baseline gap-x-2 text-lg font-semibold tabular-nums">
                <AnimatedNumber value={result.monthlyNow} format={formatHuf} />
                <span className="text-fog">→</span>
                <AnimatedNumber value={result.monthlyBetter} format={formatHuf} className="text-brass" />
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-[0.9375rem] leading-relaxed text-fog">
            Becslés a megadott számaid alapján, nem ígéret. A valós eredmény a piacodtól, az ajánlatodtól és a
            forgalomtól is függ. A konzultáción a te számaiddal nézzük meg.
          </p>
          <ButtonLink href="/book" className="mt-7 w-full">
            {CTA.calculator}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
