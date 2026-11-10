import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/site/Button";
import ComparisonTable from "@/components/site/ComparisonTable";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { CareBand, InEveryPackage, TierCards } from "@/components/site/Tiers";
import { SectionHeading } from "@/components/site/Words";
import { CARE, LANDING_VS_MULTI, NO_PRICE_NOTE, TIERS, WEBSHOP_NOTE } from "@/lib/content";
import { CTA_HREF, CTA_LABEL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weboldal csomagok szövegírással",
  description:
    "Három weboldal csomag kis- és középvállalkozásoknak, mindegyikben szövegírás, SEO- és GEO-alapok. Előbb ingyenes demót kapsz, utána írásos ajánlatot.",
  alternates: { canonical: "/packages" },
};

const provider = { "@id": `${SITE_URL}/#business` };

export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={[
          ...TIERS.map((tier) => ({
            "@context": "https://schema.org",
            "@type": "Service",
            name: tier.name,
            serviceType: "Weboldalkészítés",
            description: `${tier.summary} ${tier.bestFor}`,
            url: `${SITE_URL}/packages#${tier.id}`,
            provider,
            areaServed: { "@type": "Country", name: "Magyarország" },
          })),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: CARE.name,
            serviceType: "Weboldal karbantartás",
            description: `${CARE.summary} ${CARE.features.join(", ")}.`,
            url: `${SITE_URL}/packages#havi-gondozas`,
            provider,
            areaServed: { "@type": "Country", name: "Magyarország" },
          },
        ]}
      />

      <PageHero
        title="Weboldal csomagok"
        crumbs={[{ href: "/packages", label: "Csomagok" }]}
        answer="A Nexen Sites három csomagban készít weboldalt: Bemutatkozó oldal egy szolgáltatásra, Céges weboldal több aloldallal, és Növekedési csomag hirdetésekhez illő landing oldalakkal. Mindegyikben benne van a szövegírás, a SEO-alapok és a GEO-alapok. Árat nem írunk ki: előbb ingyenes demót kapsz, utána írásos ajánlatot."
      >
        <ButtonLink href={CTA_HREF} size="lg">
          {CTA_LABEL}
        </ButtonLink>
      </PageHero>

      <Section aria-labelledby="csomagok-cim">
        <SectionHeading id="csomagok-cim" title="Melyik csomag való neked?" lead={NO_PRICE_NOTE} />
        <div className="mt-12">
          <TierCards headingLevel="h3" />
          <div id="havi-gondozas" className="scroll-mt-28">
            <CareBand />
          </div>
        </div>
        <p className="measure mt-8 text-muted" data-reveal>
          {WEBSHOP_NOTE}
        </p>
        <p className="measure mt-3 text-muted" data-reveal>
          Nem tudod, melyik kell? A{" "}
          <Link href="/demo#kerdessor" className="link">
            kérdéssor
          </Link>{" "}
          öt kérdés után megmondja, melyiket ajánljuk, és miért.
        </p>
      </Section>

      <Section tone="mist" aria-labelledby="minden-csomagban-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="minden-csomagban-cim"
              title="Mi van benne minden csomagban?"
              lead="Ezeket a szerződés minden projektnél tartalmazza, akármelyik csomagot választod."
            />
          </div>
          <div className="lg:col-span-7">
            <InEveryPackage />
          </div>
        </div>
      </Section>

      <Section aria-labelledby="landing-vagy-tobboldalas-cim">
        <SectionHeading
          id="landing-vagy-tobboldalas-cim"
          title="Landing oldal vagy többoldalas weboldal?"
          lead="Ha egy szolgáltatásod van, vagy egy kampányhoz kell oldal, elég a landing. Ha az ügyfél alaposan utánad néz, mielőtt megkeres, többoldalas weboldal kell."
        />
        <div className="mt-10">
          <ComparisonTable comparison={LANDING_VS_MULTI} />
        </div>
      </Section>

      <Section tone="navy" aria-labelledby="csomagok-zaro-cim">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="csomagok-zaro-cim"
            title="Előbb nézd meg, utána dönts"
            lead="A demo a saját cégedre készül, egy napon belül. A demóért és a demóig semmit nem kell fizetned."
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
