import type { Metadata } from "next";
import { ButtonLink } from "@/components/site/Button";
import ComparisonTable from "@/components/site/ComparisonTable";
import Faq from "@/components/site/Faq";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { SectionHeading } from "@/components/site/Words";
import { ALL_FAQ, CUSTOM_VS_WORDPRESS, FAQ_GROUPS, LANDING_VS_MULTI } from "@/lib/content";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gyakori kérdések a weboldalkészítésről",
  description:
    "Mennyi idő alatt készül el egy weboldal? Tényleg ingyenes a demo? Mi az a GEO? Egyedi kód vagy WordPress? Egyenes válaszok a Nexen Sitestól.",
  alternates: { canonical: "/gyik" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ALL_FAQ.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />

      <PageHero
        title="Gyakori kérdések a weboldalkészítésről"
        crumbs={[{ href: "/gyik", label: "Gyakori kérdések" }]}
        answer="A legfontosabbak röviden: a Nexen Sites demo weboldala ingyenes, és egy napon belül elkészül. A kész oldalt az anyagok átadása után három munkanapon belül élesítjük. Fizetni csak akkor kell, ha a demo tetszik: előleg a szerződéskor, végszámla az átadáskor. A kód a teljes díj kifizetésével a tiéd."
      />

      {FAQ_GROUPS.map((group, index) => (
        <Section key={group.title} tone={index % 2 === 0 ? "white" : "mist"} aria-labelledby={`gyik-${index}`} className="!py-14 sm:!py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <SectionHeading id={`gyik-${index}`} title={group.title} />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Faq items={group.items} />
            </div>
          </div>
        </Section>
      ))}

      <Section aria-labelledby="osszehasonlitas-cim">
        <SectionHeading
          id="osszehasonlitas-cim"
          title="Egyedi kód vagy WordPress?"
          lead="Mindkettővel lehet jó weboldalt építeni. A különbség abban van, hogyan készül, és mi kell hozzá utána."
        />
        <div className="mt-10">
          <ComparisonTable comparison={CUSTOM_VS_WORDPRESS} />
        </div>
        <h2 className="type-h2 mt-16 max-w-3xl" data-reveal>
          Landing oldal vagy többoldalas weboldal?
        </h2>
        <div className="mt-10">
          <ComparisonTable comparison={LANDING_VS_MULTI} />
        </div>
      </Section>

      <Section tone="navy" aria-labelledby="gyik-zaro-cim">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="gyik-zaro-cim"
            title="A legjobb válasz a saját demód"
            lead="Kérd el ingyen, és egy napon belül megmutatjuk, hogyan nézne ki a céged új weboldala."
            onNavy
          />
          <ButtonLink href={CTA_HREF} size="lg" className="self-start lg:self-auto">
            {CTA_LABEL}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
