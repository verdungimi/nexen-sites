import { CARE_NOTE, TIERS } from "@/lib/content";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/utils";

/** Three ways to work together. No prices on purpose: the quote follows the consultation. */
export default function PricingTiers({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <div>
      <ul className="grid gap-4 lg:grid-cols-3 lg:items-stretch lg:gap-0">
        {TIERS.map((tier, index) => (
          <li
            key={tier.name}
            className={cn(
              "flex flex-col rounded-[1.25rem] p-7 sm:p-8",
              tier.recommended ? "reveal-pop" : "reveal",
              tier.recommended
                ? "relative z-10 border border-brass/70 bg-graphite-strong lg:-my-6 lg:py-14"
                : "border border-rule",
              !tier.recommended && index === 0 && "lg:rounded-r-none lg:border-r-0",
              !tier.recommended && index === TIERS.length - 1 && "lg:rounded-l-none lg:border-l-0"
            )}
          >
            {tier.recommended && (
              <p className="mb-4 self-start rounded-full bg-brass px-3 py-1 text-sm font-semibold text-graphite">
                Ajánlott kiindulópont
              </p>
            )}
            <Heading className="type-h3">{tier.name}</Heading>
            <p className="mt-3 text-fog">{tier.summary}</p>
            <ul className="mt-7 flex-1 space-y-3 border-t border-rule pt-7">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[0.9375rem] leading-snug">
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-brass">
                    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/book"
              variant={tier.recommended ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              Konzultációt foglalok
            </ButtonLink>
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-2xl text-fog lg:mt-14">{CARE_NOTE}</p>
    </div>
  );
}
