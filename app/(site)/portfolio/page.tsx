import type { Metadata } from "next";
import { ButtonLink } from "@/components/site/Button";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { SectionHeading } from "@/components/site/Words";
import WorksGrid from "@/components/site/WorksGrid";
import { INDUSTRIES } from "@/lib/content";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Munkáink: elkészült weboldalak",
  description:
    "A Nexen Sites elkészült weboldalai építőipari, épületgépészeti, egészségügyi és szakértői cégeknek. Nézd meg őket, aztán kérj demót a saját cégedre.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Munkáink"
        crumbs={[{ href: "/portfolio", label: "Munkáink" }]}
        answer="Itt a Nexen Sites elkészült weboldalait látod, asztali és mobilnézetben. Mindegyik egyedi kódból épült, sablon nélkül, a cégre írt szövegekkel. Ha szeretnéd látni, hogyan nézne ki a te cégedre, kérj ingyenes demót: egy napon belül elkészül, és csak akkor fizetsz, ha tetszik."
      />

      <Section aria-labelledby="munkak-cim">
        <h2 id="munkak-cim" className="sr-only">
          Elkészült weboldalak
        </h2>
        <WorksGrid />
      </Section>

      <Section tone="mist" aria-labelledby="iparagak-cim">
        <SectionHeading id="iparagak-cim" title="Milyen cégeknek építünk?" lead="Minden iparágban más kérdésre kell válaszolnia az oldalnak, mielőtt az ügyfél megkeres." />
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <li key={industry.title} className="border-t border-line-strong py-6" data-reveal style={{ "--i": index % 3 } as React.CSSProperties}>
              <h3 className="type-h3">{industry.title}</h3>
              <p className="mt-2 text-muted">{industry.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" aria-labelledby="portfolio-zaro-cim">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="portfolio-zaro-cim"
            title="A következő a te oldalad lehet"
            lead="Kérj demót a saját cégedre. Ingyenes, egy napon belül elkészül, és semmire nem kötelez."
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
