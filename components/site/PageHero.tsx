import { cn } from "@/lib/utils";
import Container from "./Container";

interface PageHeroProps {
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Buttons or links shown under the lead */
  actions?: React.ReactNode;
  /** Optional content rendered to the right on large screens */
  aside?: React.ReactNode;
  className?: string;
}

/** Opening block for inner pages. Clears the fixed header and keeps the h1 left-aligned. */
export default function PageHero({ title, lead, actions, aside, className }: PageHeroProps) {
  return (
    <section className={cn("border-b border-rule bg-graphite pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48", className)}>
      <Container>
        <div className={cn(aside && "grid gap-12 lg:grid-cols-12 lg:items-end")}>
          <div className={cn(aside ? "lg:col-span-7" : "max-w-4xl")}>
            <h1 className="type-display">{title}</h1>
            {lead && <p className="type-lead measure mt-6">{lead}</p>}
            {actions && <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">{actions}</div>}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </Container>
    </section>
  );
}
