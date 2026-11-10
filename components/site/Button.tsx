import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "navy" | "outline" | "outlineOnNavy";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[0.875rem] font-bold leading-tight text-center transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Light blue button, always with dark blue text (light blue text on white is not readable)
  primary: "bg-sky text-navy hover:bg-sky-hover",
  navy: "bg-navy text-white hover:bg-mid",
  outline: "border-[1.5px] border-navy text-navy hover:bg-navy hover:text-white",
  outlineOnNavy: "border-[1.5px] border-cloud/70 text-white hover:border-white hover:bg-white hover:text-navy",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-5 text-base",
  lg: "min-h-[3.75rem] px-7 text-lg",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  "aria-label"?: string;
}

export function ButtonLink({ href, children, variant, size, className, ...rest }: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  // Phone, e-mail and external links are plain anchors; everything else is a client-side route
  if (/^(tel:|mailto:|https?:)/.test(href)) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
