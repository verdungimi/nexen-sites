import { Check } from "lucide-react";
import { CARE, IN_EVERY_PACKAGE, TIERS } from "@/lib/content";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";

/** The three packages. No prices anywhere, by decision. */
export function TierCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
      {TIERS.map((tier, index) => (
        <article
          key={tier.id}
          id={tier.id}
          data-reveal
          style={{ "--i": index } as React.CSSProperties}
          className={cn(
            "flex scroll-mt-28 flex-col rounded-3xl p-7 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8",
            tier.recommended ? "on-navy bg-navy text-white" : "border-[1.5px] border-line-strong bg-white"
          )}
        >
          {tier.recommended && (
            <p className="mb-4 self-start rounded-full bg-sky px-3 py-1 text-[0.8125rem] font-bold text-navy">A legtöbben ezt választják</p>
          )}
          <Heading className="type-h3 !text-[1.75rem]">{tier.name}</Heading>
          <p className="mt-3 font-semibold">{tier.summary}</p>
          <p className={cn("mt-2", tier.recommended ? "text-cloud" : "text-muted")}>{tier.bestFor}</p>
          <ul className={cn("mt-6 grow space-y-3 border-t pt-6", tier.recommended ? "border-navy-line" : "border-line")}>
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Check aria-hidden="true" strokeWidth={2.6} className={cn("mt-1 h-5 w-5 flex-none", tier.recommended ? "text-sky" : "text-mid")} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href={CTA_HREF} variant={tier.recommended ? "primary" : "navy"} className="mt-8 w-full">
            {CTA_LABEL}
          </ButtonLink>
        </article>
      ))}
    </div>
  );
}

export function CareBand() {
  return (
    <div className="mt-6 flex flex-col gap-5 rounded-3xl bg-mist p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10" data-reveal>
      <div className="max-w-xl">
        <h3 className="type-h3">{CARE.name}</h3>
        <p className="mt-2 text-muted">{CARE.summary}</p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {CARE.features.map((feature) => (
          <li key={feature} className="rounded-full border-[1.5px] border-line-strong bg-white px-4 py-2 text-[0.9375rem] font-semibold">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InEveryPackage() {
  return (
    <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
      {IN_EVERY_PACKAGE.map((item, index) => (
        <li key={item} className="flex gap-3" data-reveal style={{ "--i": index % 2 } as React.CSSProperties}>
          <Check aria-hidden="true" strokeWidth={2.6} className="mt-1 h-5 w-5 flex-none text-mid" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
