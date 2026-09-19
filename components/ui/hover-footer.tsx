"use client";

// Adapted from the 21st.dev "Hover Footer" (nur/ui by Md afsar mahmud).
// The original source of these two parts was read from the component's public preview bundle.
// Changes for this site: framer-motion import (already a dependency, "motion" is the same library),
// brass/bone colours instead of the rainbow gradient, our own typeface, the outline is drawn only when
// the visitor has no reduced-motion preference, and the whole graphic is hidden from assistive technology.

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Big outlined word. Its outline is drawn once when the footer loads, and a brass gradient follows the cursor
 * while the pointer is over it.
 */
export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const box = svgRef.current.getBoundingClientRect();
      const cx = ((cursor.x - box.left) / box.width) * 100;
      const cy = ((cursor.y - box.top) / box.height) * 100;
      setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(event) => setCursor({ x: event.clientX, y: event.clientY })}
      className={cn("cursor-pointer select-none uppercase", className)}
    >
      <defs>
        <linearGradient id="nx-text-gradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#C7A263" />
              <stop offset="30%" stopColor="#D8B676" />
              <stop offset="55%" stopColor="#EDE8DF" />
              <stop offset="80%" stopColor="#D8B676" />
              <stop offset="100%" stopColor="#C7A263" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="nx-reveal-mask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="nx-text-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#nx-reveal-mask)" />
        </mask>
      </defs>

      {/* Faint outline that appears on hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-fog text-7xl font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>

      {/* Outline drawn once on load */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-brass/60 text-7xl font-bold"
        initial={reduceMotion ? false : { strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: reduceMotion ? 0 : 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Gradient that follows the cursor */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#nx-text-gradient)"
        strokeWidth="0.3"
        mask="url(#nx-text-mask)"
        className="fill-transparent text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

/** Soft radial wash behind the footer content (brass instead of the original blue). */
export const FooterBackgroundGradient = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, rgb(var(--graphite-raised) / 0.55) 50%, rgb(var(--brass) / 0.14) 100%)",
      }}
    />
  );
};
