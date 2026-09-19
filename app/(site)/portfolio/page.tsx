import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import SectionIntro from "@/components/site/SectionIntro";
import { ButtonLink } from "@/components/site/Button";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Munkáink: weboldalak szolgáltató cégeknek",
  description:
    "Weboldalak építőipari, épületgépészeti, egészségügyi és szakértői cégeknek. A konzultáción az iparágadhoz közel álló példákat mutatunk.",
  alternates: {
    canonical: "/portfolio",
  },
};

const SECTORS = [
  {
    title: "Építőipar és felújítás",
    text: "Az oldalnak meg kell mutatnia a korábbi munkáidat, és egyszerűen el kell vinnie a látogatót a helyszíni felmérés kéréséig.",
  },
  {
    title: "Épületgépészet és hőszivattyú",
    text: "Az ügyfél a rendszerekről, a telepítés menetéről és a támogatásokról kérdez. Ha az oldal előre válaszol, a felmérést kérők már tudják, mit szeretnének.",
  },
  {
    title: "Egészségügyi magánpraxisok",
    text: "A páciens bizalmat és gyors időpontot keres. Az oldalnak be kell mutatnia a rendelést és a szakembereket, és néhány lépésben el kell juttatnia az időpontfoglalásig.",
  },
  {
    title: "Ügyvédi, könyvelő- és mérnökirodák",
    text: "Itt a szakértelem maga a szolgáltatás. Az oldalnak érthetően le kell írnia a szakterületeket, és könnyű első kapcsolatfelvételt kell kínálnia.",
  },
  {
    title: "Szakértői és tanácsadó cégek",
    text: "A döntéshozó több ajánlatot vet össze. Az oldalnak már az első egyeztetés előtt meg kell mutatnia, hogyan dolgozol, és milyen problémát oldasz meg.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Munkáink"
        lead="Ügyfeleink nevét csak az engedélyükkel mutatjuk meg, ezért itt név nélkül szerepelnek a munkák. A konzultáción szívesen megmutatunk a te iparágadhoz közel álló példákat is."
      />

      <PortfolioContent />

      <Section tone="raised" aria-labelledby="kiknek">
        <SectionIntro
          id="kiknek"
          title="Kiknek dolgozunk"
          lead="Bejáratott szolgáltató cégeknek, ahol egy új ügyfél értéke miatt megéri, hogy a weboldal komolyan dolgozzon."
        />
        <ul className="mt-14 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => (
            <li key={sector.title} className="reveal border-t border-rule py-8">
              <h3 className="wdth-title text-xl font-semibold leading-snug">{sector.title}</h3>
              <p className="mt-3 text-fog">{sector.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="referencia">
        <div className="max-w-3xl">
          <h2 id="referencia" className="type-h2">
            Referenciát szeretnél látni?
          </h2>
          <p className="type-lead measure mt-5">
            A konzultáción megmutatjuk azokat a munkáinkat, amelyek a te helyzetedhez a legközelebb állnak, és elmondjuk,
            mi működött bennük.
          </p>
          <ButtonLink href="/book" size="lg" className="mt-9">
            Példákat kérek az iparágamból
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
