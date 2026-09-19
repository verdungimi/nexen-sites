import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionIntro from "@/components/site/SectionIntro";
import ClosingCta from "@/components/site/ClosingCta";
import { PRINCIPLES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rólunk",
  description:
    "Kis webstúdió Kecskemétről. Bejáratott szolgáltató cégeknek építünk weboldalt, kevés projekten egyszerre, hogy mindegyiket ugyanazok vigyék végig.",
  alternates: {
    canonical: "/rolunk",
  },
};

const NOT_FOR_US = [
  {
    title: "A legolcsóbb ajánlat versenyét",
    text: "Nem árban versenyzünk, hanem abban, hogy az oldal megtérüljön, és több jó ajánlatkérést hozzon, mint a mostani.",
  },
  {
    title: "Ugyanazt a sablont más névvel",
    text: "Minden oldal a te ügyfeleid kérdéseire és döntési szempontjaira épül, nem egy kitöltendő sablonra.",
  },
  {
    title: "Garantált első helyet a Google-ben",
    text: "Ezt senki nem garantálhatja becsületesen. Keresőbarát alapokat adunk, és segítünk rendbe tenni a Google cégprofilodat.",
  },
  {
    title: "Projektet, amiben nem hiszünk",
    text: "Ha a konzultáción kiderül, hogy nem mi vagyunk a jó megoldás, megmondjuk, és nem adunk ajánlatot csak azért, hogy adjunk.",
  },
];

export default function RolunkPage() {
  return (
    <>
      <PageHero
        title="Kis stúdió, szándékosan"
        lead="Weboldalakat építünk olyan szolgáltató cégeknek, akiknek a munkája már bizonyított, csak az online megjelenésük maradt le. Kevés projekten dolgozunk egyszerre, így mindegyiket ugyanazok visznek végig."
      />

      <Section aria-labelledby="miert">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="miert" className="type-h2">
              Miért csináljuk
            </h2>
          </div>
          <div className="measure space-y-6 text-lg text-bone/90 lg:col-span-6 lg:col-start-7">
            <p>
              Sok kiváló szakember és cég weboldala évekkel a munkája mögött jár. Az ügyfél ajánlás után rákeres, és egy
              elavult vagy sablonos oldalt talál, ami semmit nem mutat abból, amiért a céget ajánlották neki.
            </p>
            <p>
              A legtöbb weboldal-projekt azért húzódik hónapokig, mert a munka nagy része várakozás: e-mailek, egyeztetések,
              hiányzó anyagok. Mi ezt egyetlen konzultációba sűrítjük, ahol mindent összegyűjtünk, ami az induláshoz kell.
            </p>
            <p>
              Ezért olyan munkamenetet építettünk, amelyben az első élő változat a konzultáció után három munkanap alatt
              elkészül, és a végösszeg hátralévő részét csak akkor fizeted ki, amikor az oldalt jóváhagytad.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="raised" aria-labelledby="ahogy-dolgozunk">
        <SectionIntro id="ahogy-dolgozunk" title="Ahogy dolgozunk" />
        <ul className="mt-14 grid gap-x-12 md:grid-cols-2 lg:gap-x-20">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title} className="reveal border-t border-rule py-8">
              <h3 className="type-h3">{principle.title}</h3>
              <p className="measure mt-3 text-fog">{principle.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="amit-nem">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionIntro id="amit-nem" title="Amit nem vállalunk" lead="Ezt is jobb előre tudni." />
          </div>
          <ul className="border-b border-rule lg:col-span-6 lg:col-start-7">
            {NOT_FOR_US.map((item) => (
              <li key={item.title} className="reveal border-t border-rule py-7">
                <h3 className="type-h3">{item.title}</h3>
                <p className="mt-3 text-fog">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
