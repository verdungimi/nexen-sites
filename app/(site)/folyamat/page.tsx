import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionIntro from "@/components/site/SectionIntro";
import ClosingCta from "@/components/site/ClosingCta";
import ProcessTimeline from "@/components/site/ProcessTimeline";
import { ButtonLink } from "@/components/site/Button";
import { PROCESS_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Folyamat",
  description:
    "Az első élő változatot 3 munkanappal a konzultáció és az anyagok beérkezése után látod, a végösszeg hátralévő részét pedig a jóváhagyás után fizeted. Így dolgozunk lépésről lépésre.",
  alternates: {
    canonical: "/folyamat",
  },
};

const WHAT_WE_NEED = [
  {
    title: "Egy online beszélgetés",
    text: "A konzultáción megismerjük a cégedet, az ügyfeleidet és azt, mit kellene elérnie az oldalnak.",
  },
  {
    title: "Logó és képek, ha vannak",
    text: "Ha nincsenek, a konzultáción megbeszéljük, honnan lesznek.",
  },
  {
    title: "Szakmai ellenőrzés",
    text: "A szövegeket mi írjuk. Tőled azt kérjük, hogy nézd át, szakmailag pontosak-e.",
  },
  {
    title: "Gyors visszajelzés",
    text: "Minél hamarabb mondod el az első élő változatnál, mit módosítsunk, annál hamarabb élesíthetünk.",
  },
];

const PAYMENT = [
  {
    title: "Megrendeléskor",
    text: "Előleget fizetsz. A mértékét az írásos ajánlat rögzíti, amit a konzultáció után küldünk.",
  },
  {
    title: "Jóváhagyás után",
    text: "A végösszeg hátralévő részét akkor fizeted, amikor az elkészült oldalt jóváhagytad.",
  },
];

export default function FolyamatPage() {
  return (
    <>
      <PageHero
        title="Három munkanap az első élő változatig"
        lead="Gyorsan dolgozunk, de nem kapkodva. A konzultáción összegyűjtünk mindent, ami kell, így a munkanapokat építésre fordítjuk, nem várakozásra. Minden lépésnél tudod, hol tartunk."
        actions={
          <ButtonLink href="/book" size="lg">
            Konzultációt foglalok
          </ButtonLink>
        }
      />

      <Section aria-labelledby="lepesek">
        <h2 id="lepesek" className="type-h3 text-fog">
          Lépésről lépésre
        </h2>
        <div className="mt-6">
          <ProcessTimeline steps={PROCESS_STEPS} showDetails />
        </div>
      </Section>

      <Section tone="raised" aria-labelledby="mit-kerunk">
        <SectionIntro
          id="mit-kerunk"
          title="Mit kérünk tőled"
          lead="A három munkanap akkor tartható, ha ezek időben megvannak."
        />
        <ul className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:gap-x-20">
          {WHAT_WE_NEED.map((item) => (
            <li key={item.title} className="reveal border-t border-rule py-8">
              <h3 className="type-h3">{item.title}</h3>
              <p className="measure mt-3 text-fog">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="fizetes">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="fizetes" className="type-h2">
              Hogyan fizetsz
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid gap-x-12 sm:grid-cols-2">
              {PAYMENT.map((item) => (
                <div key={item.title} className="reveal border-t border-rule py-8">
                  <h3 className="type-h3">{item.title}</h3>
                  <p className="mt-3 text-fog">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="measure mt-4 text-bone/90">
              Az árban két javítási kör benne van, így az első élő változat után is van mozgástered.
            </p>
          </div>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
