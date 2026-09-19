"use client";

// Adapted from the 21st.dev "Floating Paths" background.
// Changes for this site: framer-motion import (the project already ships it, "motion" is the same library),
// brass colour, stable durations instead of Math.random() in render, static lines under
// prefers-reduced-motion, animation paused while off screen, and fewer paths on small screens.

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const DESKTOP_PATHS = 36;
const MOBILE_PATHS = 18;

// The original 21st.dev curves are drawn for a 696x316 box and only a sliver of them lands inside a wide hero.
// These are the same kind of parallel sweeping curves, laid out for a 1200x800 canvas that is scaled with "slice".
const W = 1200;
const H = 800;

function buildPaths(count: number, position: number) {
  const flip = position < 0;
  const x = (value: number) => Math.round((flip ? W - value : value) * 10) / 10;

  return Array.from({ length: count }, (_, i) => {
    const u = count === 1 ? 0 : i / (count - 1);
    const x0 = -320 + u * 1160;
    const x1 = x0 + 520 + u * 90;
    return {
      id: i,
      d: `M${x(x0)} -40C${x(x0 + 60)} 250 ${x(x1 - 280)} 470 ${x(x1)} ${H + 40}`,
      width: 0.6 + u * 1.1,
      opacity: 0.12 + u * 0.3,
      duration: 22 + ((i * 7) % 10),
    };
  });
}

interface FloatingPathsProps {
  /** Direction and spread of the curves: 1 sweeps one way, -1 the other */
  position?: number;
  className?: string;
}

/** The animated line layer only. Place it absolutely behind content inside a relatively positioned parent. */
export function FloatingPaths({ position = 1, className }: FloatingPathsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(MOBILE_PATHS);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setCount(query.matches ? DESKTOP_PATHS : MOBILE_PATHS);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const paths = useMemo(() => buildPaths(count, position), [count, position]);
  const animated = inView && !reduceMotion;

  return (
    <div ref={ref} aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg className="h-full w-full text-brass" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={
              animated
                ? { pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }
                : { pathLength: reduceMotion ? 1 : 0.3, opacity: 0.5 }
            }
            transition={
              animated
                ? { duration: path.duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
                : { duration: 0 }
            }
          />
        ))}
      </svg>
    </div>
  );
}

/** Same API as the original 21st.dev component: a wrapper that draws the lines behind its children. */
export function FloatingPathsBackground({
  position = 1,
  children,
  className,
}: {
  position?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative isolate w-full overflow-hidden", className)}>
      <FloatingPaths position={position} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
