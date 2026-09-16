"use client";

import { useId, useMemo, useState } from "react";
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

/**
 * "How much is a better website worth to you?" estimator.
 * extra monthly revenue = visitors × (target rate − current rate) × close rate × average deal value
 */
export default function RoiCalculator() {
  const [dealValue, setDealValue] = useState(1_200_000);
  const [visitors, setVisitors] = useState(600);
  const [currentRate, setCurrentRate] = useState(1);
  const [targetRate, setTargetRate] = useState(2);
  const [closeRate, setCloseRate] = useState(25);

  const result = useMemo(() => {
    const extraInquiries = Math.max(0, (visitors * (targetRate - currentRate)) / 100);
    const extraDeals = (extraInquiries * closeRate) / 100;
    const monthly = extraDeals * dealValue;
    return { extraInquiries, extraDeals, monthly, yearly: monthly * 12 };
  }, [dealValue, visitors, currentRate, targetRate, closeRate]);

  const percent = (value: number) => `${oneDecimal.format(value)}%`;

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
          label="Ennyien kérnek most ajánlatot"
          hint="A látogatók hány százaléka keres meg most."
          value={currentRate}
          min={0.2}
          max={5}
          step={0.1}
          format={percent}
          onChange={setCurrentRate}
        />
        <Slider
          label="Ennyien kérnének egy jobb oldallal"
          hint="Már egy-két százalékpontnyi javulás is sokat számít."
          value={targetRate}
          min={0.5}
          max={8}
          step={0.1}
          format={percent}
          onChange={setTargetRate}
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
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-[1.25rem] border border-rule bg-graphite p-7 sm:p-9 lg:sticky lg:top-28">
          <div aria-live="polite">
            <p className="text-fog">Havi plusz bevétel</p>
            <p className="type-h2 mt-2 tabular-nums text-brass">{huf.format(result.monthly)}</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-rule pt-6">
              <div>
                <dt className="text-[0.9375rem] text-fog">Egy év alatt</dt>
                <dd className="wdth-title mt-1 text-xl font-semibold tabular-nums">{huf.format(result.yearly)}</dd>
              </div>
              <div>
                <dt className="text-[0.9375rem] text-fog">Több megbízás havonta</dt>
                <dd className="wdth-title mt-1 text-xl font-semibold tabular-nums">{oneDecimal.format(result.extraDeals)}</dd>
              </div>
            </dl>
          </div>
          {targetRate <= currentRate && (
            <p className="mt-6 text-[0.9375rem] text-fog">
              A cél aránynak magasabbnak kell lennie a mostaninál, különben nincs különbség.
            </p>
          )}
          <p className="mt-6 text-[0.9375rem] leading-relaxed text-fog">
            Becslés a megadott számaid alapján, nem ígéret. A valós eredmény a piacodtól, az ajánlatodtól és a
            forgalomtól is függ. A konzultáción a te számaiddal nézzük meg.
          </p>
          <ButtonLink href="/book" className="mt-7 w-full">
            Konzultációt foglalok
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
