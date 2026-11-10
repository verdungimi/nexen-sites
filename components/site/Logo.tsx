import Link from "next/link";
import { cn } from "@/lib/utils";

type Tone = "onNavy" | "onWhite";

/**
 * Nexen Sites mark: a rounded square with two vertical bars and a diagonal that together form an "N".
 * The same geometry is used in public/favicon.svg, app/(site)/apple-icon.tsx and the OG image.
 */
export function Monogram({ tone = "onNavy", className }: { tone?: Tone; className?: string }) {
  const colors =
    tone === "onNavy"
      ? { tile: "#5EC2FF", bars: "#0B1E3F", diagonal: "#FFFFFF" }
      : { tile: "#0B1E3F", bars: "#FFFFFF", diagonal: "#5EC2FF" };
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("h-9 w-9 flex-none", className)}>
      <rect width="32" height="32" rx="8" fill={colors.tile} />
      <rect x="7" y="7" width="5" height="18" rx="1.2" fill={colors.bars} />
      <rect x="20" y="7" width="5" height="18" rx="1.2" fill={colors.bars} />
      <path d="M7 7h5.5L25 25h-5.5z" fill={colors.diagonal} />
    </svg>
  );
}

function Wordmark() {
  return <span className="font-display text-[1.375rem] font-semibold leading-none tracking-[-0.01em]">Nexen Sites</span>;
}

export default function Logo({ tone = "onNavy", className }: { tone?: Tone; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Nexen Sites – főoldal"
      className={cn("inline-flex min-h-11 items-center gap-3", tone === "onNavy" ? "text-white" : "text-navy", className)}
    >
      <Monogram tone={tone} />
      <Wordmark />
    </Link>
  );
}

/** Brand mark without a link, for places where a second link to the home page would only repeat the header's. */
export function LogoStatic({ tone = "onNavy", className }: { tone?: Tone; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", tone === "onNavy" ? "text-white" : "text-navy", className)}>
      <Monogram tone={tone} />
      <Wordmark />
    </span>
  );
}
