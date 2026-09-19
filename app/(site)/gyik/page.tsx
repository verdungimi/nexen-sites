import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import ClosingCta from "@/components/site/ClosingCta";
import { ButtonLink } from "@/components/site/Button";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQ_ITEMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gyakori kérdések a weboldalkészítésről",
  description:
    "Válaszok a leggyakoribb kérdésekre: mennyi idő alatt készül el a weboldal, hogyan működik a fizetés, és mi történik az átadás után.",
  alternates: {
    canonical: "/gyik",
  },
};

// Built from the same FAQ_ITEMS the accordion renders, so the markup never drifts from the page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function GyikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <PageHero
        title="Gyakori kérdések"
        lead="Amit a konzultáció előtt a legtöbben megkérdeznek. Ha a te kérdésed nincs köztük, tedd fel a konzultáción vagy írj nekünk."
        actions={
          <ButtonLink href="/kapcsolat" variant="quiet">
            Kapcsolat
          </ButtonLink>
        }
      />

      <Section aria-labelledby="kerdesek">
        <h2 id="kerdesek" className="sr-only">
          Kérdések és válaszok
        </h2>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
          <aside className="lg:col-span-3 lg:col-start-10">
            <div className="lg:sticky lg:top-28">
              <p className="wdth-title text-xl font-semibold text-bone">Nem találod a választ?</p>
              <p className="mt-3 text-fog">A konzultáción minden kérdésedre válaszolunk, mielőtt bármiről döntenél.</p>
              <ButtonLink href="/book" variant="secondary" className="mt-6">
                Rákérdezek a konzultáción
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
