import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  tone?: "white" | "mist" | "navy";
  className?: string;
  containerClassName?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

const tones = {
  white: "bg-white text-navy",
  mist: "bg-mist text-navy",
  navy: "on-navy bg-navy text-white",
};

export default function Section({ id, children, tone = "white", className, containerClassName, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={rest["aria-labelledby"]}
      aria-label={rest["aria-label"]}
      className={cn("py-16 sm:py-24 lg:py-28", tones[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
