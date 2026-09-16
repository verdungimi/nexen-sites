"use client";

import { Fragment, useCallback, useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, ReactNode } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Button } from "@/components/site/Button";
import { cn } from "@/lib/utils";

/*
 * BuildTimelapse: a sample service company's website assembles itself in a browser window
 * over the three working days after the consultation.
 *
 * Sizing: the scene is drawn on a fixed 640 × 460 design grid and every length is converted to
 * container-query units (cqw) of the wrapper. The mockup scales as one picture with its column,
 * keeps its proportions at 375px and reserves its height before hydration.
 * Motion: framer-motion, transform and opacity only. Reduced motion shows the final state and
 * switches tabs instantly.
 */

const SCENE_W = 640;
const SCENE_H = 460;

const u = (px: number) => `${Number(((px / SCENE_W) * 100).toFixed(4))}cqw`;

function rect(x: number, y: number, w: number, h: number, radius?: number): CSSProperties {
  return {
    left: u(x),
    top: u(y),
    width: u(w),
    height: u(h),
    ...(radius !== undefined ? { borderRadius: u(radius) } : {}),
  };
}

function textAt(x: number, y: number, size: number): CSSProperties {
  return { left: u(x), top: u(y), fontSize: u(size) };
}

// The fictional client's own brand. These colours exist only inside the mockup, so the site
// being built reads as someone else's website, not as Nexen Sites.
const SAMPLE = {
  navy: "#16324F",
  paper: "#F6F4EF",
  white: "#FFFFFF",
  accent: "#D9622B",
  accentSoft: "rgba(217, 98, 43, 0.13)",
  ink: "rgba(22, 50, 79, 0.72)",
  faint: "rgba(22, 50, 79, 0.42)",
  line: "rgba(22, 50, 79, 0.14)",
  success: "#2F7A55",
  successSoft: "rgba(47, 122, 85, 0.1)",
  successLine: "rgba(47, 122, 85, 0.34)",
};

const PHOTO_SRC = "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1600&q=80";
const PHOTO_ALT = "Hőszivattyú kültéri egysége egy modern, fehér családi ház fala mellett";

const STAGES = [
  {
    day: "1. nap",
    label: "Szerkezet",
    ms: 3200,
    summary: "1. nap, szerkezet és szöveg: rácsra kerül a minta cég oldalának váza, és megjelennek az első valódi szövegek.",
  },
  {
    day: "2. nap",
    label: "Design",
    ms: 3000,
    summary: "2. nap, design és fejlesztés: az oldal megkapja a minta cég színeit, betűtípusát és fotóját.",
  },
  {
    day: "3. nap",
    label: "Élesítés",
    ms: 3000,
    summary:
      "3. nap, első élő változat: elkészül a mobilnézet, működik az időpontfoglalás, és az oldal biztonságos címen érhető el.",
  },
];

const HEADLINE = [["Hőszivattyú", "telepítés,"], ["ahogy", "a", "házad"], ["megérdemli."]];
const LEAD_LINES = ["Felmérés, méretezés és beüzemelés egy kézből,", "fix ajánlattal, rejtett költség nélkül."];
const SERVICES = [
  { title: "Hőszivattyú", lines: ["Levegő-víz rendszerek", "méretezése és telepítése."], icon: "pump" },
  { title: "Padlófűtés", lines: ["Új építésű és felújított", "házakba, tervezéssel."], icon: "floor" },
  { title: "Klíma és szellőzés", lines: ["Csendes, energiatakarékos", "rendszerek egész évre."], icon: "air" },
] as const;

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

interface Timing {
  /** -1 = empty window, 0–2 = the three days */
  stage: number;
  /** 1 while autoplaying, 0.5 for manual jumps, 0 with reduced motion (instant) */
  speed: number;
  /** Day 1 was entered from the empty window, so its full build-up plays */
  fresh: boolean;
}

type Offset = { x?: string; y?: string; scale?: number; scaleX?: number; scaleY?: number };

function settled(from: Offset = {}) {
  return {
    ...(from.x !== undefined ? { x: "0%" } : {}),
    ...(from.y !== undefined ? { y: "0%" } : {}),
    ...(from.scale !== undefined ? { scale: 1 } : {}),
    ...(from.scaleX !== undefined ? { scaleX: 1 } : {}),
    ...(from.scaleY !== undefined ? { scaleY: 1 } : {}),
  };
}

interface RevealProps {
  on: boolean;
  speed: number;
  /** Seconds (at autoplay speed) before appearing */
  delay?: number;
  /** Seconds before disappearing when a later stage replaces this element */
  outDelay?: number;
  duration?: number;
  from?: Offset;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

function Reveal({ on, speed, delay = 0, outDelay = 0, duration = 0.6, from, className, style, children }: RevealProps) {
  let transition: Transition;
  if (speed === 0) transition = { duration: 0 };
  else if (on) transition = { duration: duration * Math.max(speed, 0.6), delay: delay * speed, ease: EASE_OUT };
  else transition = { duration: outDelay ? 0.3 : 0.2, delay: outDelay * speed, ease: "easeOut" };

  return (
    <motion.div
      className={className}
      style={style}
      initial={false}
      animate={on ? { opacity: 1, ...settled(from) } : { opacity: 0, ...from }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

/** Inline piece of text (a word or a typed character) */
function Word({ on, speed, delay, rise = true, children }: { on: boolean; speed: number; delay: number; rise?: boolean; children: ReactNode }) {
  let transition: Transition;
  if (speed === 0) transition = { duration: 0 };
  else if (on) transition = { duration: (rise ? 0.45 : 0.12) * Math.max(speed, 0.6), delay: delay * speed, ease: EASE_OUT };
  else transition = { duration: 0.2 };

  return (
    <motion.span
      className="inline-block"
      initial={false}
      animate={on ? { opacity: 1, y: "0%" } : { opacity: 0, y: rise ? "35%" : "0%" }}
      transition={transition}
    >
      {children}
    </motion.span>
  );
}

interface BlockProps {
  t: Timing;
  delay: number;
  /** Seconds into day 1 when real text takes this placeholder's place */
  handoff?: number;
  className?: string;
  style?: CSSProperties;
}

/** Grey wireframe placeholder. Grows in on day 1; with `handoff` it fades out as the real text arrives. */
function Block({ t, delay, handoff, className, style }: BlockProps) {
  const { stage, speed, fresh } = t;
  let animate: { opacity: number | number[]; scaleX: number | number[] };
  let transition: Transition;

  if (stage < 0) {
    animate = { opacity: 0, scaleX: 0 };
    transition = { duration: speed === 0 ? 0 : 0.2 };
  } else if (handoff === undefined) {
    animate = { opacity: 1, scaleX: 1 };
    transition =
      speed === 0
        ? { duration: 0 }
        : { duration: 0.55 * Math.max(speed, 0.6), delay: (fresh && stage === 0 ? delay : 0) * speed, ease: EASE_OUT };
  } else if (fresh && stage === 0 && speed > 0) {
    const end = handoff + 0.3;
    const grown = Math.min(delay + 0.45, handoff);
    animate = { opacity: [0, 0, 1, 1, 0], scaleX: [0, 0, 1, 1, 1] };
    transition = { duration: end * speed, times: [0, delay / end, grown / end, handoff / end, 1], ease: "easeOut" };
  } else {
    animate = { opacity: 0, scaleX: 1 };
    transition = { duration: speed === 0 ? 0 : 0.2 };
  }

  return (
    <motion.div
      className={cn("absolute origin-left", className)}
      style={style}
      initial={false}
      animate={animate}
      transition={transition}
    />
  );
}

/* ---------- Glyphs ---------- */

function InfoGlyph() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" className="block h-full w-full">
      <circle cx="6" cy="6" r="4.6" />
      <path d="M6 5.5v3M6 3.7v.05" strokeLinecap="round" />
    </svg>
  );
}

function LockGlyph() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3" className="block h-full w-full">
      <rect x="2.4" y="5.2" width="7.2" height="5.4" rx="1.2" />
      <path d="M4 5.2V3.9a2 2 0 0 1 4 0v1.3" strokeLinecap="round" />
    </svg>
  );
}

function CheckGlyph() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="block h-full w-full">
      <circle cx="8" cy="8" r="7" fill="currentColor" />
      <path d="M4.8 8.2l2.1 2.1 4.3-4.5" stroke={SAMPLE.white} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The sample company's logo mark: a roof over a warm wave */
function SampleMark() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="block h-full w-full">
      <path d="M5 10.2 10 5.8l5 4.4" stroke={SAMPLE.paper} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.6 14c1.45-1.25 2.95-1.25 4.4 0s2.95 1.25 4.4 0" stroke={SAMPLE.accent} strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function ServiceGlyph({ kind }: { kind: "pump" | "floor" | "air" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block h-full w-full"
    >
      {kind === "pump" && (
        <>
          <rect x="1.8" y="3" width="12.4" height="10" rx="1.6" />
          <circle cx="8" cy="8" r="2.7" />
          <path d="M8 5.3v5.4M5.3 8h5.4" />
        </>
      )}
      {kind === "floor" && (
        <>
          <path d="M2 13h12" />
          <path d="M2.5 9.5c1.3-1.4 2.6-1.4 3.8 0s2.6 1.4 3.8 0 2.6-1.4 3.4-.6" />
          <path d="M2.5 5.8c1.3-1.4 2.6-1.4 3.8 0s2.6 1.4 3.8 0 2.6-1.4 3.4-.6" />
        </>
      )}
      {kind === "air" && (
        <>
          <path d="M2 6.2h8.6a2.1 2.1 0 1 0-2.1-2.1" />
          <path d="M2 10h10.2a2.1 2.1 0 1 1-2.1 2.1" />
        </>
      )}
    </svg>
  );
}

/* ---------- Scene parts ---------- */

function BrowserBar({ t }: { t: Timing }) {
  const live = t.stage >= 2;
  return (
    <div className="absolute inset-x-0 top-0 border-b border-rule" style={{ height: u(40) }}>
      <div className="absolute flex items-center" style={{ left: u(16), top: u(15.5), gap: u(7) }}>
        {["bg-fog/45", "bg-fog/25", "bg-rule"].map((tone) => (
          <span key={tone} className={cn("block rounded-full", tone)} style={{ width: u(9), height: u(9) }} />
        ))}
      </div>
      <div
        className="absolute flex items-center justify-center rounded-full border border-rule bg-graphite"
        style={rect(176, 8, 264, 24)}
      >
        <span className="relative block flex-none" style={{ width: u(11), height: u(11), marginRight: u(6) }}>
          <Reveal on={!live} speed={t.speed} from={{ scale: 0.6 }} className="absolute inset-0 text-fog">
            <InfoGlyph />
          </Reveal>
          <Reveal on={live} speed={t.speed} from={{ scale: 0.6 }} className="absolute inset-0 text-bone">
            <LockGlyph />
          </Reveal>
        </span>
        <span className="whitespace-nowrap leading-none text-fog" style={{ fontSize: u(12) }}>
          mintaceg.hu
        </span>
      </div>
    </div>
  );
}

/** Day 1: layout grid, grey placeholders, then the first real copy */
function WireLayer({ t }: { t: Timing }) {
  const { stage, speed, fresh } = t;
  const on = stage >= 0;
  const w = (seconds: number) => (fresh && stage === 0 ? seconds : 0);

  return (
    <div className="absolute inset-0">
      {Array.from({ length: 12 }, (_, index) => (
        <Reveal
          key={index}
          on={on}
          speed={speed}
          delay={w(index * 0.035)}
          duration={0.7}
          from={{ scaleY: 0 }}
          className="absolute top-0 h-full origin-top bg-fog/[0.05]"
          style={{ left: u(24 + index * 48), width: u(38) }}
        />
      ))}

      {/* Navigation */}
      <Block t={t} delay={0.35} className="bg-fog/30" style={rect(24, 15, 20, 20, 5)} />
      <Block t={t} delay={0.4} handoff={2.35} className="rounded-full bg-fog/20" style={rect(52, 21, 104, 8)} />
      <Reveal
        on={on}
        speed={speed}
        delay={w(2.35)}
        className="absolute whitespace-nowrap font-semibold leading-none text-bone/85"
        style={textAt(52, 19, 12.5)}
      >
        Minta Épületgépészet
      </Reveal>
      <div className="absolute flex items-center justify-end" style={{ ...rect(250, 13, 340, 24), gap: u(16) }}>
        {[76, 46, 47].map((width, index) => (
          <Block
            key={width}
            t={t}
            delay={0.45 + index * 0.05}
            className="relative rounded-full bg-fog/20"
            style={{ width: u(width), height: u(6) }}
          />
        ))}
        <Block t={t} delay={0.62} className="relative rounded-full border border-fog/30" style={{ width: u(76), height: u(24) }} />
      </div>

      {/* Headline: placeholders hand over to the real words */}
      {HEADLINE.map((line, lineIndex) => {
        const firstWord = HEADLINE.slice(0, lineIndex).flat().length;
        return (
          <Block
            key={line.join(" ")}
            t={t}
            delay={0.55 + lineIndex * 0.07}
            handoff={1.45 + firstWord * 0.13}
            className="bg-fog/[0.14]"
            style={rect(24, 65 + lineIndex * 34, [300, 176, 146][lineIndex], 24, 4)}
          />
        );
      })}
      <div
        className="absolute font-semibold tracking-[-0.015em] text-bone"
        style={{ ...rect(24, 60, 330, 112), fontSize: u(26), lineHeight: u(34) }}
      >
        {HEADLINE.map((line, lineIndex) => {
          const firstWord = HEADLINE.slice(0, lineIndex).flat().length;
          return (
            <span key={line.join(" ")} className="block whitespace-nowrap">
              {line.map((word, wordIndex) => (
                <Fragment key={word}>
                  {wordIndex > 0 && " "}
                  <Word on={on} speed={speed} delay={w(1.45 + (firstWord + wordIndex) * 0.13)}>
                    {word}
                  </Word>
                </Fragment>
              ))}
            </span>
          );
        })}
      </div>

      {/* Lead */}
      {[268, 212].map((width, line) => (
        <Block
          key={width}
          t={t}
          delay={0.8 + line * 0.05}
          handoff={2.25}
          className="rounded-full bg-fog/[0.14]"
          style={rect(24, 185 + line * 16, width, 6)}
        />
      ))}
      <Reveal
        on={on}
        speed={speed}
        delay={w(2.25)}
        from={{ y: "10%" }}
        className="absolute text-fog"
        style={{ ...rect(24, 180, 320, 34), fontSize: u(11.5), lineHeight: u(16) }}
      >
        {LEAD_LINES.map((line) => (
          <span key={line} className="block whitespace-nowrap">
            {line}
          </span>
        ))}
      </Reveal>

      {/* Booking form */}
      <Block t={t} delay={0.9} handoff={2.4} className="rounded-full bg-fog/20" style={rect(24, 225, 150, 6)} />
      <Reveal
        on={on}
        speed={speed}
        delay={w(2.4)}
        className="absolute whitespace-nowrap font-semibold leading-none text-bone/80"
        style={textAt(24, 223, 10.5)}
      >
        Kérj időpontot helyszíni felmérésre
      </Reveal>
      <Block t={t} delay={0.95} className="border border-fog/25" style={rect(24, 242, 112, 30, 6)} />
      <Block t={t} delay={1} className="border border-fog/25" style={rect(142, 242, 92, 30, 6)} />
      <Block t={t} delay={1.05} className="bg-fog/25" style={rect(240, 242, 94, 30, 6)} />

      {/* Image slot */}
      <Reveal
        on={on}
        speed={speed}
        delay={w(0.7)}
        from={{ scale: 0.96 }}
        className="absolute border border-fog/25 bg-fog/[0.04]"
        style={rect(356, 60, 234, 212, 10)}
      >
        <svg className="absolute inset-0 h-full w-full stroke-fog/25" viewBox="0 0 234 212" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="234" y2="212" vectorEffect="non-scaling-stroke" />
          <line x1="234" y1="0" x2="0" y2="212" vectorEffect="non-scaling-stroke" />
        </svg>
      </Reveal>

      {/* Services */}
      <Block t={t} delay={1.1} className="bg-fog/15" style={rect(24, 290, 566, 1)} />
      {SERVICES.map((service, index) => {
        const x = 24 + index * 192;
        const start = 1.15 + index * 0.1;
        const handoff = 2.5 + index * 0.08;
        return (
          <Fragment key={service.title}>
            <Block t={t} delay={start} className="bg-fog/20" style={rect(x, 306, 24, 24, 6)} />
            <Block t={t} delay={start + 0.05} handoff={handoff} className="rounded-full bg-fog/20" style={rect(x + 34, 308, 78, 8)} />
            <Reveal
              on={on}
              speed={speed}
              delay={w(handoff)}
              className="absolute whitespace-nowrap font-semibold leading-none text-bone/85"
              style={textAt(x + 34, 306, 11.5)}
            >
              {service.title}
            </Reveal>
            <Block t={t} delay={start + 0.1} className="rounded-full bg-fog/[0.14]" style={rect(x + 34, 326, 128, 5)} />
            <Block t={t} delay={start + 0.14} className="rounded-full bg-fog/[0.14]" style={rect(x + 34, 337, 96, 5)} />
          </Fragment>
        );
      })}
    </div>
  );
}

function FieldText({
  placeholder,
  value,
  live,
  speed,
  typeAt,
  typed = true,
}: {
  placeholder: string;
  value: string;
  live: boolean;
  speed: number;
  typeAt: number;
  /** Type character by character, or appear as a picked value */
  typed?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex items-center leading-none" style={{ paddingLeft: u(10), fontSize: u(10.5) }}>
      <Reveal
        on={!live}
        speed={speed}
        outDelay={typeAt}
        className="absolute whitespace-nowrap"
        style={{ left: u(10), color: SAMPLE.faint }}
      >
        {placeholder}
      </Reveal>
      <span className="relative whitespace-nowrap" style={{ color: SAMPLE.navy }}>
        {typed ? (
          Array.from(value).map((char, index) => (
            <Word key={index} on={live} speed={speed} delay={typeAt + index * 0.045} rise={false}>
              {char === " " ? " " : char}
            </Word>
          ))
        ) : (
          <Word on={live} speed={speed} delay={typeAt}>
            {value}
          </Word>
        )}
      </span>
    </div>
  );
}

/** Days 2 and 3: the sample company's own brand, then the working booking form */
function DesignLayer({ t }: { t: Timing }) {
  const { stage, speed } = t;
  const on = stage >= 1;
  const live = stage >= 2;

  return (
    <div className="absolute inset-0 font-sans">
      <motion.div
        className="absolute inset-0 origin-left"
        style={{ backgroundColor: SAMPLE.paper }}
        initial={false}
        animate={{ scaleX: on ? 1 : 0 }}
        transition={
          speed === 0
            ? { duration: 0 }
            : on
              ? { duration: 0.85 * Math.max(speed, 0.6), ease: EASE_IN_OUT }
              : { duration: 0.25, ease: "easeOut" }
        }
      />

      {/* Navigation */}
      <Reveal
        on={on}
        speed={speed}
        delay={0.15}
        from={{ scale: 0.7 }}
        className="absolute"
        style={{ ...rect(24, 15, 20, 20, 5), backgroundColor: SAMPLE.navy, padding: u(2) }}
      >
        <SampleMark />
      </Reveal>
      <Reveal
        on={on}
        speed={speed}
        delay={0.2}
        className="absolute whitespace-nowrap font-semibold leading-none tracking-[-0.01em]"
        style={{ ...textAt(52, 19, 12.5), color: SAMPLE.navy }}
      >
        Minta Épületgépészet
      </Reveal>
      <Reveal
        on={on}
        speed={speed}
        delay={0.5}
        className="absolute flex items-center justify-end"
        style={{ ...rect(250, 13, 340, 24), gap: u(16) }}
      >
        {["Szolgáltatások", "Munkáink", "Kapcsolat"].map((item) => (
          <span key={item} className="whitespace-nowrap leading-none" style={{ fontSize: u(10.5), color: SAMPLE.ink }}>
            {item}
          </span>
        ))}
        <span
          className="flex items-center whitespace-nowrap rounded-full font-semibold leading-none"
          style={{ height: u(24), padding: `0 ${u(11)}`, fontSize: u(10), backgroundColor: SAMPLE.accent, color: SAMPLE.white }}
        >
          Ajánlatkérés
        </span>
      </Reveal>

      {/* Headline in the client's typeface */}
      <Reveal
        on={on}
        speed={speed}
        delay={0.22}
        from={{ y: "5%" }}
        className="absolute font-serif tracking-[-0.015em]"
        style={{ ...rect(24, 60, 330, 112), fontSize: u(27), lineHeight: u(34), color: SAMPLE.navy }}
      >
        {HEADLINE.map((line) => (
          <span key={line.join(" ")} className="block whitespace-nowrap">
            {line.join(" ")}
          </span>
        ))}
      </Reveal>
      <Reveal
        on={on}
        speed={speed}
        delay={0.32}
        className="absolute"
        style={{ ...rect(24, 180, 320, 34), fontSize: u(11.5), lineHeight: u(16), color: SAMPLE.ink }}
      >
        {LEAD_LINES.map((line) => (
          <span key={line} className="block whitespace-nowrap">
            {line}
          </span>
        ))}
      </Reveal>

      {/* Booking form: styled on day 2, filled in and sent on day 3 */}
      <Reveal on={on} speed={speed} delay={0.42} className="absolute inset-0">
        <div
          className="absolute whitespace-nowrap font-semibold leading-none"
          style={{ ...textAt(24, 223, 10.5), color: SAMPLE.navy }}
        >
          Kérj időpontot helyszíni felmérésre
        </div>
        <Reveal on={!live} speed={speed} outDelay={2.45} className="absolute inset-0">
          <div className="absolute border" style={{ ...rect(24, 242, 112, 30, 6), backgroundColor: SAMPLE.white, borderColor: SAMPLE.line }}>
            <FieldText placeholder="Név" value="Kovács Anna" live={live} speed={speed} typeAt={1.05} />
          </div>
          <div className="absolute border" style={{ ...rect(142, 242, 92, 30, 6), backgroundColor: SAMPLE.white, borderColor: SAMPLE.line }}>
            <FieldText placeholder="Időpont" value="Kedd 10:00" live={live} speed={speed} typeAt={1.8} typed={false} />
          </div>
          <motion.div
            className="absolute flex items-center justify-center whitespace-nowrap font-semibold leading-none"
            style={{ ...rect(240, 242, 94, 30, 6), fontSize: u(10.5), backgroundColor: SAMPLE.navy, color: SAMPLE.paper }}
            initial={false}
            animate={live && speed > 0 ? { scale: [1, 0.92, 1] } : { scale: 1 }}
            transition={speed === 0 ? { duration: 0 } : { duration: 0.3, delay: 2.2 * speed }}
          >
            Lefoglalom
          </motion.div>
        </Reveal>
        <Reveal
          on={live}
          speed={speed}
          delay={2.45}
          from={{ y: "15%" }}
          className="absolute flex items-center border"
          style={{
            ...rect(24, 242, 310, 30, 6),
            gap: u(8),
            padding: `0 ${u(10)}`,
            backgroundColor: SAMPLE.successSoft,
            borderColor: SAMPLE.successLine,
          }}
        >
          <span className="block flex-none" style={{ width: u(14), height: u(14), color: SAMPLE.success }}>
            <CheckGlyph />
          </span>
          <span className="whitespace-nowrap font-semibold leading-none" style={{ fontSize: u(11), color: SAMPLE.navy }}>
            Időpont lefoglalva
          </span>
          <span className="ml-auto whitespace-nowrap leading-none" style={{ fontSize: u(10), color: SAMPLE.ink }}>
            Kedd, 10:00
          </span>
        </Reveal>
      </Reveal>

      {/* Photo */}
      <Reveal
        on={on}
        speed={speed}
        delay={0.5}
        duration={0.7}
        className="absolute isolate overflow-hidden"
        style={{ ...rect(356, 60, 234, 212, 10), backgroundColor: SAMPLE.navy }}
      >
        <Reveal on={on} speed={speed} delay={0.5} duration={1.6} from={{ scale: 1.14 }} className="absolute inset-0">
          <Image src={PHOTO_SRC} alt={PHOTO_ALT} fill sizes="(min-width: 1024px) 240px, 38vw" className="object-cover" />
        </Reveal>
      </Reveal>

      {/* Services */}
      <Reveal
        on={on}
        speed={speed}
        delay={0.7}
        from={{ scaleX: 0 }}
        className="absolute origin-left"
        style={{ ...rect(24, 290, 566, 1), backgroundColor: SAMPLE.line }}
      />
      {SERVICES.map((service, index) => {
        const x = 24 + index * 192;
        return (
          <Reveal key={service.title} on={on} speed={speed} delay={0.78 + index * 0.1} from={{ y: "2%" }} className="absolute inset-0">
            <div
              className="absolute"
              style={{ ...rect(x, 306, 24, 24, 6), backgroundColor: SAMPLE.accentSoft, color: SAMPLE.accent, padding: u(5) }}
            >
              <ServiceGlyph kind={service.icon} />
            </div>
            <div
              className="absolute whitespace-nowrap font-semibold leading-none"
              style={{ ...textAt(x + 34, 306, 11.5), color: SAMPLE.navy }}
            >
              {service.title}
            </div>
            <div className="absolute" style={{ ...textAt(x + 34, 322, 10), lineHeight: u(14), color: SAMPLE.ink }}>
              {service.lines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

// Cursor offsets are measured from its resting point on the booking button and expressed as a
// percentage of the cursor's own 16-unit box, so the path scales with the scene.
const CURSOR_PATH = {
  x: [-37, -37, -167, -167, -73, -73, 0, 0, 0],
  y: [73, 73, 5, 5, 5, 5, 0, 0, 0],
  opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
  times: [0, 0.075, 0.2, 0.475, 0.575, 0.65, 0.775, 0.925, 1],
};

function Cursor({ t }: { t: Timing }) {
  const moving = t.stage >= 2 && t.speed > 0;
  const pct = (value: number) => `${(value / 16) * 100}%`;

  return (
    <motion.div
      className="absolute"
      style={rect(284, 255.5, 16, 16)}
      initial={false}
      animate={
        moving
          ? { x: CURSOR_PATH.x.map(pct), y: CURSOR_PATH.y.map(pct), opacity: CURSOR_PATH.opacity }
          : { opacity: 0 }
      }
      transition={
        moving ? { duration: 2 * t.speed, delay: 0.6 * t.speed, times: CURSOR_PATH.times, ease: "easeInOut" } : { duration: 0 }
      }
    >
      <svg viewBox="0 0 16 16" className="block h-full w-full">
        <path
          d="M3 1.5v11.8l3.1-2.9 2 4.3 2-.9-2-4.2 4.3-.2L3 1.5Z"
          fill={SAMPLE.navy}
          stroke={SAMPLE.white}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

/** Day 3: the mobile view slides in over the window's bottom-right corner */
function Phone({ t }: { t: Timing }) {
  return (
    <Reveal
      on={t.stage >= 2}
      speed={t.speed}
      delay={0.1}
      duration={0.9}
      from={{ x: "16%", y: "12%" }}
      className="absolute border border-rule bg-graphite shadow-[0_1.25rem_2.5rem_-0.75rem_rgb(0_0_0/0.55)]"
      style={{ ...rect(516, 204, 124, 252, 22), padding: u(5) }}
    >
      <div
        className="relative h-full w-full overflow-hidden font-sans"
        style={{ borderRadius: u(17), backgroundColor: SAMPLE.paper }}
      >
        <span className="absolute rounded-full bg-graphite" style={rect(41, 6, 30, 8)} />
        <span className="absolute" style={{ ...rect(9, 22, 12, 12, 3), backgroundColor: SAMPLE.navy, padding: u(1.2) }}>
          <SampleMark />
        </span>
        <span
          className="absolute whitespace-nowrap font-semibold leading-none"
          style={{ ...textAt(24, 25.5, 5.8), color: SAMPLE.navy }}
        >
          Minta Épületgépészet
        </span>
        <span className="absolute rounded-full" style={{ ...rect(97, 24.5, 7, 1.4), backgroundColor: SAMPLE.navy }} />
        <span className="absolute rounded-full" style={{ ...rect(97, 29, 7, 1.4), backgroundColor: SAMPLE.navy }} />
        <div
          className="absolute font-serif tracking-[-0.01em]"
          style={{ ...rect(9, 44, 96, 64), fontSize: u(12.5), lineHeight: u(15.5), color: SAMPLE.navy }}
        >
          Hőszivattyú telepítés, ahogy a házad megérdemli.
        </div>
        <div className="absolute isolate overflow-hidden" style={{ ...rect(9, 114, 94, 60, 6), backgroundColor: SAMPLE.navy }}>
          <Image src={PHOTO_SRC} alt="" fill sizes="(min-width: 1024px) 96px, 16vw" className="object-cover" />
        </div>
        <span
          className="absolute flex items-center justify-center whitespace-nowrap font-semibold leading-none"
          style={{ ...rect(9, 182, 94, 20, 5), fontSize: u(7.5), backgroundColor: SAMPLE.accent, color: SAMPLE.white }}
        >
          Időpontot kérek
        </span>
        <span className="absolute rounded-full" style={{ ...rect(9, 212, 72, 4), backgroundColor: SAMPLE.line }} />
        <span className="absolute rounded-full" style={{ ...rect(9, 221, 54, 4), backgroundColor: SAMPLE.line }} />
        <span className="absolute rounded-full" style={{ ...rect(38, 232, 36, 2.5), backgroundColor: SAMPLE.faint }} />
      </div>
    </Reveal>
  );
}

function Scene({ t }: { t: Timing }) {
  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      <div className="absolute overflow-hidden rounded-[1.25rem] border border-rule bg-graphite-raised" style={rect(0, 0, 616, 420)}>
        <BrowserBar t={t} />
        <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-graphite" style={{ top: u(40) }}>
          <WireLayer t={t} />
          <DesignLayer t={t} />
          <Cursor t={t} />
        </div>
      </div>
      <Phone t={t} />
    </div>
  );
}

/* ---------- Public component ---------- */

export default function BuildTimelapse({ className }: { className?: string }) {
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { once: true, amount: 0.4 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const started = useRef(false);
  const replayTimer = useRef<number | undefined>(undefined);

  const [{ stage, from }, setStageState] = useState({ stage: -1, from: -1 });
  const [playing, setPlaying] = useState(false);
  const [run, setRun] = useState(0);

  const moveTo = useCallback((next: number) => {
    setStageState((current) => ({ stage: next, from: current.stage }));
  }, []);

  // Autoplay once when the window first scrolls into view. Reduced motion jumps to the last day.
  useEffect(() => {
    if (started.current) return;
    if (reduceMotion) {
      started.current = true;
      moveTo(STAGES.length - 1);
      return;
    }
    if (!inView) return;
    const id = window.setTimeout(() => {
      started.current = true;
      setRun((value) => value + 1);
      moveTo(0);
      setPlaying(true);
    }, 250);
    return () => window.clearTimeout(id);
  }, [inView, reduceMotion, moveTo]);

  // Advance through the days while playing, then rest on the last one
  useEffect(() => {
    if (!playing || stage < 0) return;
    const id = window.setTimeout(() => {
      if (stage < STAGES.length - 1) moveTo(stage + 1);
      else setPlaying(false);
    }, STAGES[stage].ms);
    return () => window.clearTimeout(id);
  }, [playing, stage, moveTo]);

  useEffect(() => () => window.clearTimeout(replayTimer.current), []);

  const goTo = (index: number) => {
    started.current = true;
    window.clearTimeout(replayTimer.current);
    setPlaying(false);
    if (index !== stage) moveTo(index);
  };

  const replay = () => {
    started.current = true;
    window.clearTimeout(replayTimer.current);
    setPlaying(false);
    moveTo(-1);
    replayTimer.current = window.setTimeout(
      () => {
        setRun((value) => value + 1);
        moveTo(0);
        setPlaying(true);
      },
      reduceMotion ? 0 : 450
    );
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = STAGES.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    tabRefs.current[next]?.focus();
    goTo(next);
  };

  const active = Math.max(stage, 0);
  const timing: Timing = { stage, speed: reduceMotion ? 0 : playing ? 1 : 0.5, fresh: from < 0 };

  return (
    <div className={className}>
      <div
        ref={panelRef}
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="relative w-full"
        style={{ aspectRatio: `${SCENE_W} / ${SCENE_H}`, containerType: "inline-size" }}
      >
        <p className="sr-only">{STAGES[active].summary}</p>
        <Scene t={timing} />
      </div>

      <div role="tablist" aria-label="Az építés napjai" className="mt-5 grid grid-cols-3 gap-3 sm:mt-6 sm:gap-5">
        {STAGES.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.day}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => goTo(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className="group relative flex min-h-14 flex-col items-start justify-center rounded-md pb-3 pt-2 text-left"
            >
              <span className={cn("type-small tabular-nums transition-colors duration-200", selected ? "text-brass" : "text-fog")}>
                {item.day}
              </span>{" "}
              <span
                className={cn(
                  "wdth-title font-semibold leading-tight transition-colors duration-200",
                  selected ? "text-bone" : "text-fog group-hover:text-bone"
                )}
              >
                {item.label}
              </span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-rule" />
              {selected &&
                stage >= 0 &&
                (playing && !reduceMotion ? (
                  <motion.span
                    key={`${run}-${index}`}
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brass"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: item.ms / 1000, ease: "linear" }}
                  />
                ) : (
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-brass" />
                ))}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex flex-col items-start gap-1 sm:flex-row sm:justify-between sm:gap-8">
        <p className="type-small pt-2 text-fog">
          Illusztráció: így épül fel egy céges weboldal a konzultáció utáni három munkanapon.
        </p>
        <Button variant="quiet" onClick={replay} className="type-small flex-none">
          Újrajátszás
        </Button>
      </div>
    </div>
  );
}
