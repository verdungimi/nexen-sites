import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Nexen Sites mark: a graphite tile with two bone bars and a brass diagonal that together form an "N".
 * The same geometry is used in public/favicon.svg, app/(site)/apple-icon.tsx and the OG image.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("h-8 w-8 flex-none", className)}>
      <rect x="0.5" y="0.5" width="31" height="31" rx="8.5" fill="rgb(var(--graphite-strong))" stroke="rgb(var(--rule))" />
      <rect x="8" y="8" width="4" height="16" rx="1.1" fill="rgb(var(--bone))" />
      <rect x="20" y="8" width="4" height="16" rx="1.1" fill="rgb(var(--bone))" />
      <path d="M8 8h4.4L24 24h-4.4z" fill="rgb(var(--brass))" />
    </svg>
  );
}

/** Two-weight wordmark: "Nexen" heavy in bone, "Sites" lighter in fog. */
function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("wdth-display inline-flex items-baseline gap-[0.32em] text-[1.4375rem] leading-none tracking-[-0.015em]", className)}>
      <span className="font-bold text-bone">Nexen</span>
      <span className="font-medium text-fog">Sites</span>
    </span>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 rounded-full py-1 pr-1", className)}
      aria-label="Nexen Sites – főoldal"
    >
      <Monogram />
      <Wordmark />
    </Link>
  );
}

/** Brand mark without a link, for places where a second link to the home page would only repeat the header's. */
export function LogoStatic({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Monogram />
      <Wordmark />
    </span>
  );
}
