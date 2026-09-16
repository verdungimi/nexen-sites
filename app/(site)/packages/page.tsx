import type { Metadata } from "next";
import { ButtonLink } from "@/components/site/Button";
import ClosingCta from "@/components/site/ClosingCta";
import PageHero from "@/components/site/PageHero";
import PricingTiers from "@/components/site/PricingTiers";
import Section from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Szolgáltatás",
  description:
    "Három módon dolgozhatunk együtt: bemutatkozó oldal, céges weboldal vagy növekedési csomag. Mindegyikben benne van a szövegírás, a mobilra tervezett design és az első élő változat 3 munkanap alatt. Árat a konzultáció után, írásban adunk.",
  alternates: {
    canonical: "/packages",
  },
};

const INCLUDED = [
  {
    term: "Szövegírás",
    text: "A konzultáció alapján, a te szakmai nyelveden írjuk meg. Tőled csak a szakmai ellenőrzést kérjük.",
  },
  {
    term: "Mobilra tervezve",
    text: "A telefonos nézet ugyanannyi figyelmet kap, mint az asztali, mert az ügyfeleid többsége ott néz meg először.",
  },
  {
    term: "Gyors betöltés",
    text: "Tömörített képek és takarékos felépítés, hogy az oldal mobilneten se várakoztassa a látogatót.",
  },
  {
    term: "Mérés",
    text: "Látod, honnan jönnek az ajánlatkérések, és melyik oldalad hozza őket.",
  },
  {
    term: "Két javítási kör",
    text: "Az első élő változat után két körben kérhetsz módosításokat, ezek benne vannak az ajánlatban.",
  },
  {
    term: "Élesítés a saját domaineden",
    text: "A jóváhagyás után a saját domaineden indítjuk el az oldalt, a technikai beállításokat mi intézzük.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        title="Három módon dolgozhatunk együtt"
        lead="Mindhárom ugyanarra épül: szöveg a te ügyfeleid kérdéseire, a céged arculatára szabott design és első élő változat három munkanap alatt. A különbség a terjedelem."
        actions={
          <ButtonLink href="/book" size="lg">
            Konzultációt foglalok
          </ButtonLink>
        }
      />

      <Section className="lg:py-36">
        <PricingTiers headingLevel="h2" />
      </Section>

      <Section tone="raised" aria-labelledby="included-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <h2 id="included-title" className="type-h2 lg:col-span-4">
            Ami mindegyikben benne van
          </h2>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {INCLUDED.map((item) => (
              <div key={item.term} className="border-t border-rule pb-8 pt-6">
                <dt className="wdth-title text-xl font-semibold leading-snug">{item.term}</dt>
                <dd className="mt-2 text-fog">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section aria-labelledby="care-title">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <h2 id="care-title" className="type-h2 lg:col-span-4">
            Havi gondozás
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="type-lead measure">
              Bármelyik csomag mellé kérhetsz havi gondozást. Ilyenkor mi frissítjük az oldalt, figyeljük a biztonságát
              és a sebességét, és elvégezzük a kisebb módosításokat, például egy új szolgáltatás vagy egy megváltozott
              nyitvatartás felvételét.
            </p>
            <p className="measure mt-5 text-fog">
              Így az oldal az átadás után is ugyanúgy dolgozik, mint az első napon, és nem neked kell foglalkoznod vele.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="raised" aria-labelledby="pricing-title">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <h2 id="pricing-title" className="type-h2 lg:col-span-4">
            Miért nincs ár az oldalon?
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="type-lead measure">
              Egy bemutatkozó oldal és egy többoldalas céges weboldal között nagy a különbség, és hogy neked melyik kell,
              az a céged helyzetétől függ. Egy kiírt szám ezt nem tudná figyelembe venni.
            </p>
            <p className="measure mt-5 text-fog">
              Ezért a konzultáció után írásos ajánlatot kapsz, amiben a terjedelem mellett az előleg mértéke is szerepel.
              Megrendeléskor az előleget fizeted, a végösszeg hátralévő részét pedig a jóváhagyás után.
            </p>
          </div>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
