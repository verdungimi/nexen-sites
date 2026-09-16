"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { ProcessStep } from "@/lib/content";
import { cn } from "@/lib/utils";

// Scroll-drawn vertical timeline. Based on the Aceternity UI "Timeline"
// (scroll-progress beam via useScroll), reworked: alternating sides on desktop,
// numbered nodes and a sticky "x/y" progress readout.

interface ProcessTimelineProps {
  steps: ProcessStep[];
  showDetails?: boolean;
}

export default function ProcessTimeline({ steps, showDetails = true }: ProcessTimelineProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(1);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(steps.length, Math.max(1, Math.ceil(value * steps.length)));
    setActive(next);
  });

  return (
    <div className="relative">
      <div className="sticky top-24 z-10 mb-10 flex justify-end lg:mb-4">
        <p
          className="inline-flex items-center gap-3 rounded-full border border-rule bg-graphite-raised/90 px-4 py-2 text-[0.9375rem] text-fog backdrop-blur"
          aria-hidden="true"
        >
          <span className="tabular-nums text-bone">
            {active}/{steps.length}
          </span>
          <span className="relative block h-px w-16 bg-rule">
            <span
              className="absolute inset-y-0 left-0 bg-brass transition-[width] duration-300"
              style={{ width: `${(active / steps.length) * 100}%` }}
            />
          </span>
        </p>
      </div>

      <ol ref={listRef} className="relative">
        {/* Track + drawn beam */}
        <div aria-hidden="true" className="absolute bottom-6 left-5 top-6 w-px bg-rule lg:left-1/2">
          <motion.div
            className="absolute inset-x-0 top-0 h-full origin-top bg-brass"
            style={{ scaleY: reduceMotion ? 1 : progress }}
          />
        </div>

        {steps.map((step, index) => {
          const number = index + 1;
          const onRight = index % 2 === 1;
          const reached = reduceMotion || number <= active;
          return (
            <li key={step.title} className="relative grid pb-14 last:pb-0 lg:grid-cols-2 lg:gap-24 lg:pb-20">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border text-[0.9375rem] font-semibold tabular-nums transition-colors duration-300 lg:left-1/2 lg:-translate-x-1/2",
                  reached ? "border-brass bg-brass text-graphite" : "border-rule bg-graphite text-fog"
                )}
              >
                {number}
              </span>
              <div className={cn("pl-16 lg:pl-0", onRight ? "lg:col-start-2" : "lg:col-start-1 lg:text-right")}>
                <p className="text-[0.9375rem] font-medium text-brass">{step.when}</p>
                <h3 className="type-h3 mt-2">{step.title}</h3>
                <p className={cn("mt-4 text-fog", !onRight && "lg:ml-auto", "max-w-md")}>{step.text}</p>
                {showDetails && (
                  <ul className={cn("mt-5 space-y-2 text-[0.9375rem] text-bone/90", !onRight && "lg:ml-auto", "max-w-md")}>
                    {step.details.map((detail) => (
                      <li key={detail} className={cn("flex items-center gap-3", !onRight && "lg:flex-row-reverse")}>
                        <span aria-hidden="true" className="h-px w-4 flex-none bg-brass" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
