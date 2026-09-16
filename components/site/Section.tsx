import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  /** "raised" shifts the background one step lighter to separate sections without borders */
  tone?: "base" | "raised";
  className?: string;
  containerClassName?: string;
  "aria-labelledby"?: string;
}

export default function Section({
  id,
  children,
  tone = "base",
  className,
  containerClassName,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={rest["aria-labelledby"]}
      className={cn(
        "py-20 sm:py-24 lg:py-32",
        tone === "raised" ? "bg-graphite-raised" : "bg-graphite",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
