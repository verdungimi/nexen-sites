import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/site/Button";
import Faq from "@/components/site/Faq";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { SectionHeading } from "@/components/site/Words";
import { AI_ENGINES, GEO_ITEMS, type FaqItem } from "@/lib/content";
import { CTA_HREF, CTA_LABEL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "GEO: weboldal optimalizálása AI-keresőkre",
  description:
    "GEO szolgáltatás: úgy építjük fel a weboldalad, hogy a ChatGPT, a Gemini, a Perplexity és a Claude megtalálja, megértse és idézni tudja.",
  alternates: { canonical: "/geo" },
};

const GEO_FAQ: FaqItem[] = [
  {
    question: "Mi a különbség a SEO és a GEO között?",
    answer:
      "A SEO célja, hogy a weboldalad jó helyen jelenjen meg a Google találati listáján. A GEO célja, hogy az AI-asszisztensek, például a ChatGPT vagy a Gemini, megtalálják, megértsék és idézni tudják az oldaladat, amikor valaki tőlük kérdez. A kettő egymásra épül: a gyors, jól szerkesztett, egyértelmű oldal mindkettőnek jó.",
  },
  {
    question: "Garantáljátok, hogy az AI ajánlani fogja a cégemet?",
    answer:
      "Nem, és ezt senki nem tudja garantálni. Az AI-asszisztensek maguk döntik el, mit idéznek. Amit meg tudunk tenni: beengedjük a robotjaikat, egyértelművé tesszük, ki vagy és mit csinálsz, és olyan szövegeket írunk, amikből könnyű idézni. Ettől az esélyed javul, de ígéretet nem teszünk.",
  },
  {
    question: "Kell ehhez külön fizetnem?",
    answer:
      "A GEO alapjai minden csomag részei: az AI-robotok beengedése, a strukturált adatok és a válasz-első szövegek. A havi ellenőrzés, amikor megnézzük, megjelenik-e a céged az AI-válaszokban, külön kérhető.",
  },
  {
    question: "Mennyi idő, mire látszik az eredmény?",
    answer:
      "Ez nem rajtunk múlik, hanem azon, hogy az AI-keresők mikor olvassák be újra az oldaladat, és mennyi más forrás említi a cégedet. Ezért ajánljuk a havi ellenőrzést: így mérhető, változik-e valami.",
  },
  {
    question: "Mit tehetek én a weboldalon kívül?",
    answer:
      "Sokat. Kérj Google-értékelést az ügyfeleidtől, legyen mindenhol szóról szóra ugyanaz a cégneved, címed és telefonszámod, és szerepelj szakmai listákon, katalógusokban. Az AI több forrásból rakja össze a képet, nem csak a weboldaladról.",
  },
];

export default function GeoPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "GEO: AI-keresőkre optimalizálás",
            serviceType: "Generative Engine Optimization",
            description:
              "A weboldal felkészítése az AI-keresőkre: AI-robotok beengedése és ellenőrzése, strukturált adatok, válasz-első szövegek és GYIK, egységes cégadatok, véleménygyűjtő oldal, kérhető havi ellenőrzés.",
            url: `${SITE_URL}/geo`,
            provider: { "@id": `${SITE_URL}/#business` },
            areaServed: { "@type": "Country", name: "Magyarország" },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: GEO_FAQ.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />

      <PageHero
        title="GEO: hogy az AI is megtalálja a cégedet"
        crumbs={[{ href: "/geo", label: "GEO" }]}
        answer="A GEO (Generative Engine Optimization) a weboldal felkészítése az AI-keresőkre. Úgy építjük fel az oldalad, hogy a ChatGPT, a Gemini, a Perplexity és a Claude megtalálja, megértse és idézni tudja. Ennek alapjai a Nexen Sites minden csomagjában benne vannak. Garanciát nem adunk rá, hogy egy AI ajánlani fog: az esélyedet javítjuk."
      >
        <ButtonLink href={CTA_HREF} size="lg">
          {CTA_LABEL}
        </ButtonLink>
      </PageHero>

      <Section aria-labelledby="miert-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading id="miert-cim" title="Miért számít ez egy kisvállalkozásnak?" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed lg:col-span-6 lg:col-start-7">
            <p data-reveal>
              Egyre többen nem a Google-be írják be, hogy „klímaszerelő Győrben", hanem megkérdezik egy AI-asszisztenstől, kit ajánl. Az AI ilyenkor
              weboldalakat olvas el, és azokból rakja össze a választ.
            </p>
            <p data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              Ha a robotja nem jut be az oldaladra, vagy nem derül ki egyértelműen, mivel foglalkozol és hol dolgozol, akkor kimaradsz a válaszból.
              A GEO ezt a két akadályt hárítja el.
            </p>
            <ul className="flex flex-wrap gap-2 pt-2" aria-label="AI-keresők, amelyekre felkészítjük az oldalt" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              {AI_ENGINES.map((engine) => (
                <li key={engine} className="rounded-full bg-mist px-4 py-2 text-base font-semibold">
                  {engine}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="navy" aria-labelledby="mit-kapsz-geo-cim">
        <SectionHeading id="mit-kapsz-geo-cim" title="Mit kapsz a GEO-ban?" lead="Hat dolog, amit a weboldaladon és körülötte elvégzünk." onNavy />
        <ol className="mt-12 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {GEO_ITEMS.map((item, index) => (
            <li key={item.title} className="border-t border-navy-line py-7" data-reveal style={{ "--i": index % 3 } as React.CSSProperties}>
              <h3 className="type-h3">{item.title}</h3>
              <p className="mt-3 text-cloud">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist" aria-labelledby="igy-epul-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="igy-epul-cim"
              title="Hogyan néz ki egy AI-nak is érthető oldal?"
              lead="Ugyanúgy, mint egy embernek is jól olvasható oldal, csak következetesebben."
            />
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {[
              ["Egyenes válasszal kezd", "Minden oldal első bekezdése megválaszolja azt a kérdést, amiről az oldal szól."],
              ["Kérdés formájú alcímek", "Úgy fogalmazunk, ahogy az emberek kérdeznek, és a bekezdések önmagukban is érthetők."],
              ["A szöveg ott van az oldalban", "Minden fontos tartalom JavaScript nélkül is olvasható, mert az AI-robotok többsége nem futtat szkripteket."],
              ["Tények egy helyen", "Külön oldal mondja el, ki vagy, mit csinálsz, kinek, hol és mennyi idő alatt."],
            ].map(([title, text], index) => (
              <li key={title} className="border-t border-line-strong py-6" data-reveal style={{ "--i": index } as React.CSSProperties}>
                <h3 className="type-h3">{title}</h3>
                <p className="measure mt-2 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section aria-labelledby="geo-gyik-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading id="geo-gyik-cim" title="Kérdések a GEO-ról" />
            <p className="mt-6 text-muted" data-reveal>
              Bővebben a blogon:{" "}
              <Link href="/blog/mi-az-a-geo-es-miert-kell-a-weboldaladnak" className="link">
                Mi az a GEO, és miért kell a weboldaladnak?
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq items={GEO_FAQ} />
          </div>
        </div>
      </Section>

      <Section tone="navy" aria-labelledby="geo-zaro-cim">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="geo-zaro-cim"
            title="A demódban már benne lesz"
            lead="Az ingyenes demo weboldal is így épül fel. Kérd el, és egy napon belül megmutatjuk."
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
