import type { Metadata } from "next";
import { ButtonLink } from "@/components/site/Button";
import PageHero from "@/components/site/PageHero";
import ProcessList from "@/components/site/ProcessList";
import Section from "@/components/site/Section";
import { SectionHeading } from "@/components/site/Words";
import { PROCESS_STEPS } from "@/lib/content";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hogyan készül a weboldalad? 6 lépésben",
  description:
    "Kérdéssor, ingyenes demo 1 napon belül, rövid online hívás, szerződés, élesítés 3 munkanapon belül. Így dolgozik a Nexen Sites.",
  alternates: { canonical: "/folyamat" },
};

const FROM_YOU = [
  { title: "A demóhoz", text: "A kérdéssor öt válasza, az elérhetőséged, és ha van, a mostani weboldalad vagy Facebook-oldalad linkje." },
  { title: "A kész oldalhoz", text: "A logód, a képeid, és azok a szakmai részletek, amiket csak te tudsz. A szövegeket mi írjuk meg." },
  { title: "Az élesítéshez", text: "Hozzáférés a domainhez és a tárhelyhez. Ha még nincs, segítünk beüzemelni." },
  { title: "Menet közben", text: "Visszajelzés a tervre és a kész oldalra. Ha az anyagok vagy a válaszok késnek, a határidő ugyanennyivel kitolódik." },
];

const PAYMENT = [
  { title: "A demóig", text: "Semmit nem kell fizetned. A demo ingyenes, és semmire nem kötelez." },
  { title: "Szerződéskor", text: "Ha a demo tetszik, a szerződés aláírásakor előleget fizetsz." },
  { title: "Átadáskor", text: "A végszámlát az átadáskor kapod. A számlák fizetési határideje 8 nap." },
  { title: "Ha meggondolnád magad", text: "Bármikor felmondhatod. Ilyenkor az elvégzett munka szerint számolunk el: 25%, 50% vagy 100%. Fogyasztóként 14 napon belül indoklás nélkül is felmondhatsz." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Hogyan készül el a weboldalad?"
        crumbs={[{ href: "/folyamat", label: "Folyamat" }]}
        answer="Kitöltöd a rövid kérdéssort, és egy napon belül ingyenes demo weboldalt kapsz a saját cégedre. Egy rövid online hívásban megmutatjuk. Ha tetszik, szerződünk, és az anyagaid átadása után három munkanapon belül élesítjük az oldalt, két-két módosítási körrel. Ha nem tetszik, nem fizetsz semmit."
      >
        <ButtonLink href={CTA_HREF} size="lg">
          {CTA_LABEL}
        </ButtonLink>
      </PageHero>

      <Section aria-labelledby="lepesek-cim">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading id="lepesek-cim" title="Mi történik lépésről lépésre?" lead="Hat lépés, ebben a sorrendben. Az első háromért nem fizetsz." />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ProcessList steps={PROCESS_STEPS} />
          </div>
        </div>
      </Section>

      <Section tone="mist" aria-labelledby="toled-cim">
        <SectionHeading id="toled-cim" title="Mi kell tőled?" lead="Kevés, de az időben. A három munkanap attól számít, hogy minden anyag megérkezett." />
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {FROM_YOU.map((item, index) => (
            <li key={item.title} className="border-t border-line-strong py-6" data-reveal style={{ "--i": index % 2 } as React.CSSProperties}>
              <h3 className="type-h3">{item.title}</h3>
              <p className="measure mt-2 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="fizetes-cim">
        <SectionHeading id="fizetes-cim" title="Mikor kell fizetni?" lead="A demóért soha. Utána a szerződés szerint, két részletben." />
        <ol className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {PAYMENT.map((item, index) => (
            <li key={item.title} className="border-t border-line py-6" data-reveal style={{ "--i": index } as React.CSSProperties}>
              <h3 className="type-h3">{item.title}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="navy" aria-labelledby="folyamat-zaro-cim">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="folyamat-zaro-cim"
            title="Az első lépés egy perc"
            lead="Öt kérdés és az elérhetőséged. Egy napon belül látod, hogyan nézne ki a céged új weboldala."
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
