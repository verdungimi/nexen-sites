import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "quiet";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-brass text-graphite hover:bg-brass-hover",
  secondary: "border border-rule text-bone hover:border-fog hover:bg-graphite-strong",
  quiet: "text-bone underline decoration-rule underline-offset-[6px] hover:decoration-brass rounded-md",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-12 px-7 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], variant === "quiet" ? "min-h-11 px-0" : sizes[size], className);
}

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", size = "md", className }: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      {children}
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size };

export function Button({ variant = "primary", size = "md", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...props} />;
}
