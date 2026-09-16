import Link from "next/link";
import { cn } from "@/lib/utils";

/** Nexen Sites wordmark: a brass "N" built from three strokes plus the condensed name. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-6 w-6", className)}>
      <rect width="24" height="24" rx="6" fill="rgb(var(--brass))" />
      <path d="M7 17V7l10 10V7" fill="none" stroke="rgb(var(--graphite))" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5 rounded-md", className)} aria-label="Nexen Sites – főoldal">
      <Monogram />
      <span className="wdth-display text-[1.3125rem] font-semibold leading-none tracking-[-0.01em] text-bone">
        Nexen Sites
      </span>
    </Link>
  );
}
