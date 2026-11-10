import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/site/Button";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { SectionHeading } from "@/components/site/Words";
import { INDUSTRIES } from "@/lib/content";
import { CONTACT, CTA_HREF, CTA_LABEL, LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rólunk: ki készíti a weboldalad?",
  description:
    "A Nexen Sites egyedi kódú weboldalakat készít kis- és középvállalkozásoknak az egész országban, online. Székhely: Kecskemét. Tények egy helyen.",
  alternates: { canonical: "/rolunk" },
};

/** Fact sheet. The same data must match the Google Business Profile and the Facebook page word for word. */
const FACTS: { term: string; detail: React.ReactNode }[] = [
  { term: "Ki", detail: `A Nexen Sites weboldalkészítő vállalkozás, ${LEGAL.name} márkaneve. A kapcsolattartó ${CONTACT.person}.` },
  {
    term: "Mit",
    detail:
      "Egyedi kódból (Next.js) épített weboldalakat: egyoldalas bemutatkozó és landing oldalt, többoldalas céges weboldalt, webshopot. Meglévő weboldal újratervezését is vállaljuk. Minden csomag része a szövegírás, a keresőoptimalizálás (SEO) alapjai és a GEO, vagyis az AI-keresőkre optimalizálás.",
  },
  {
    term: "Kinek",
    detail:
      "Kis- és középvállalkozásoknak, szolgáltatóknak, akiknek nincs weboldaluk, vagy elavult. Főleg építőipari és felújító cégeknek, épületgépészeknek, egészségügyi magánrendelőknek, ügyvédi, könyvelő- és mérnökirodáknak, tanácsadóknak.",
  },
  { term: "Hol", detail: `Az egész országban, online. A székhely: ${LEGAL.address}` },
  {
    term: "Mennyi idő alatt",
    detail: "Az ingyenes demo weboldal 1 napon belül elkészül. A kész weboldalt az anyagok átadása után 3 munkanapon belül élesítjük.",
  },
  {
    term: "Hogyan",
    detail: (
      <>
        Kérdéssor, ingyenes demo, rövid online hívás, szerződés online aláírással, élesítés, utána választható havi karbantartás. A részletek a{" "}
        <Link href="/folyamat" className="link">
          folyamat oldalán
        </Link>{" "}
        vannak.
      </>
    ),
  },
  {
    term: "Fizetés",
    detail: "A demóért és a demóig semmit nem kell fizetni. Megrendelés esetén előleg a szerződés aláírásakor, végszámla az átadáskor, 8 napos fizetési határidővel.",
  },
  {
    term: "Elérhetőség",
    detail: (
      <>
        Telefon:{" "}
        <a href={`tel:${CONTACT.phoneHref}`} className="link whitespace-nowrap">
          {CONTACT.phone}
        </a>
        , {CONTACT.hours}. E-mail:{" "}
        <a href={`mailto:${CONTACT.email}`} className="link">
          {CONTACT.email}
        </a>
      </>
    ),
  },
];

const PROMISES = [
  { title: "Előbb mutatunk, utána kérünk pénzt", text: "A demo a saját cégedre készül. Ha nem tetszik, nem fizetsz semmit." },
  { title: "Egyedi kód, ami a tiéd lesz", text: "Nem sablonból, nem Wixből és nem WordPressből dolgozunk. A teljes díj kifizetésével a kód az ügyfélé." },
  { title: "Nem ígérünk első helyet", text: "A Google-helyezést és az AI-ajánlást senki nem tudja garantálni. Azt adjuk meg, amitől az esélyed jobb lesz." },
  { title: "Írásban rögzítünk mindent", text: "A szerződésben benne van, mit kapsz, mikorra, hány módosítási körrel, és mi történik, ha felmondanád." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Ki a Nexen Sites?"
        crumbs={[{ href: "/rolunk", label: "Rólunk" }]}
        answer="A Nexen Sites egyedi kódú weboldalakat készít kis- és középvállalkozásoknak, szolgáltatóknak, az egész országban, online. A székhely Kecskemét. Az érdeklődő előbb ingyenes demo weboldalt kap a saját cégére, egy napon belül, és csak akkor fizet, ha tetszik. A kész oldalt az anyagok átadása után három munkanapon belül élesítjük."
      />

      <Section aria-labelledby="tenyek-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading id="tenyek-cim" title="A tények egy helyen" lead="Ki, mit, kinek, hol, mennyi idő alatt és hogyan." />
          </div>
          <dl className="border-b border-line lg:col-span-8">
            {FACTS.map((fact, index) => (
              <div key={fact.term} className="grid gap-x-8 gap-y-1 border-t border-line py-5 sm:grid-cols-[11rem_1fr]" data-reveal style={{ "--i": Math.min(index, 4) } as React.CSSProperties}>
                <dt className="font-display text-xl font-semibold">{fact.term}</dt>
                <dd className="text-[1.0625rem] leading-relaxed">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="mist" aria-labelledby="kiknek-cim">
        <SectionHeading id="kiknek-cim" title="Kiknek dolgozunk?" lead="Olyan cégeknek, ahol a jó weboldal több hívást, ajánlatkérést vagy időpontfoglalást jelent." />
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <li key={industry.title} className="border-t border-line-strong py-6" data-reveal style={{ "--i": index % 3 } as React.CSSProperties}>
              <h3 className="type-h3">{industry.title}</h3>
              <p className="mt-2 text-muted">{industry.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="elvek-cim">
        <SectionHeading id="elvek-cim" title="Amihez tartjuk magunkat" />
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {PROMISES.map((promise, index) => (
            <li key={promise.title} className="border-t border-line py-6" data-reveal style={{ "--i": index % 2 } as React.CSSProperties}>
              <h3 className="type-h3">{promise.title}</h3>
              <p className="measure mt-2 text-muted">{promise.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" aria-labelledby="rolunk-zaro-cim">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="rolunk-zaro-cim" title="Nézd meg, mit építenénk neked" lead="Öt kérdés, és egy napon belül megkapod a céged demo weboldalát, ingyen." onNavy />
          <ButtonLink href={CTA_HREF} size="lg" className="self-start lg:self-auto">
            {CTA_LABEL}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
