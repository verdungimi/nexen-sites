import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";
import LegalDocument, { type LegalSection } from "../privacy/LegalDocument";

export const metadata: Metadata = {
  title: "Általános szerződési feltételek",
  description:
    "A Nexen Sites általános szerződési feltételei: a szolgáltatás tartalma, határidők, fizetés, javítási körök, szerzői jogok, elállás és visszatérítés.",
  alternates: {
    canonical: "/terms",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "szolgaltatas",
    title: "1. A szolgáltatás leírása",
    content: (
      <>
        <p>
          A Nexen Sites (a továbbiakban: Szolgáltató) weboldal-tervezési és -fejlesztési szolgáltatást nyújt
          vállalkozásoknak és magánszemélyeknek (a továbbiakban: Megrendelő). A szolgáltatás magában foglalja:
        </p>
        <ul>
          <li>a weboldal tervezését és fejlesztését,</li>
          <li>mobilbarát, reszponzív kialakítást,</li>
          <li>a keresőoptimalizálási (SEO) alapok beállítását,</li>
          <li>szövegírást, ha az árajánlat része,</li>
          <li>a weboldal élesítését és átadását.</li>
        </ul>
      </>
    ),
  },
  {
    id: "hataridok",
    title: "2. Határidők és feltételek",
    content: (
      <>
        <h3>2.1. Az első működő változat határideje</h3>
        <p>
          A Szolgáltató a weboldal első működő változatát a konzultációt és a Megrendelőtől szükséges anyagok (logó,
          képek, szakmai információk, referenciák) beérkezését követő 3 munkanapon belül elkészíti. A Megrendelő a
          szükséges anyagokat a konzultációt követő 48 órán belül átadja.
        </p>
        <p>A határidő akkor tartható, ha az alábbi feltételek teljesülnek:</p>
        <ul>
          <li>A Megrendelő a szükséges anyagokat hiánytalanul átadja.</li>
          <li>A Megrendelő időben válaszol az egyeztetésekre és a kérdésekre.</li>
          <li>A projekt terjedelme a folyamat során nem változik.</li>
        </ul>
        <p>
          Ha ezek a feltételek nem teljesülnek, a határidő eltolódhat. A javítási körök és az élesítés az első működő
          változat elkészülte után, a Megrendelő visszajelzéseinek ütemében következnek.
        </p>
      </>
    ),
  },
  {
    id: "fizetes",
    title: "3. Fizetés és számlázás",
    content: (
      <>
        <p>A szolgáltatás díját a Szolgáltató a konzultációt követően, egyedi írásos árajánlatban határozza meg.</p>
        <p>
          A Megrendelő a megrendeléskor, a projekt megkezdése előtt előleget fizet, amelynek mértékét az egyedi írásos
          árajánlat rögzíti.
        </p>
        <p>
          A végösszeg hátralévő részét az elkészült weboldal Megrendelő általi jóváhagyását követően, az élesítés előtt
          kell megfizetni.
        </p>
        <p>
          A Szolgáltató az élesítést (a weboldal publikálását a Megrendelő domainjén) csak a teljes díj megfizetése után
          végzi el.
        </p>
        <p>
          A fizetés banki átutalással vagy számlafizetéssel történik. A számlát a Szolgáltató elektronikusan állítja ki
          és küldi meg.
        </p>
      </>
    ),
  },
  {
    id: "javitasi-korok",
    title: "4. Javítási körök",
    content: (
      <p>
        A díj két javítási kört tartalmaz, amelyeket a Megrendelő az első működő változat elkészülte után, a jóváhagyás
        előtt kérhet. A két javítási körön túli módosításokért a Szolgáltató külön díjat számol fel, amelyet előre
        egyeztet a Megrendelővel.
      </p>
    ),
  },
  {
    id: "extra-funkciok",
    title: "5. Extra funkciók",
    content: (
      <>
        <p>
          Az alábbi funkciók nem részei a csomagoknak és a 2.1. pontban meghatározott határidőnek, ezek külön
          egyeztetés és árajánlat tárgyát képezik:
        </p>
        <ul>
          <li>webáruház (online értékesítési funkciók),</li>
          <li>összetett kalkulátorok vagy egyedi interaktív eszközök,</li>
          <li>egyedi háttérrendszer-fejlesztés,</li>
          <li>többnyelvű weboldal (két vagy több nyelv),</li>
          <li>külső rendszerek bekötése (például CRM, fizetési rendszerek).</li>
        </ul>
      </>
    ),
  },
  {
    id: "felelosseg",
    title: "6. Felelősség korlátozása",
    content: (
      <>
        <p>
          A Szolgáltató felelőssége a szerződésben meghatározott szolgáltatásokra korlátozódik. A Szolgáltató nem vállal
          felelősséget:
        </p>
        <ul>
          <li>a Megrendelő által biztosított tartalom pontosságáért,</li>
          <li>harmadik felek szolgáltatásainak (például tárhely, domain) hibáiért,</li>
          <li>a Megrendelő által késedelmesen vagy hiányosan átadott anyagok miatt bekövetkező késésekért.</li>
        </ul>
      </>
    ),
  },
  {
    id: "szerzoi-jogok",
    title: "7. Szerzői jogok",
    content: (
      <p>
        A kész weboldal szerzői joga az átadást követően a Megrendelőre száll át. A Szolgáltató a portfóliójában
        bemutatás céljából megtarthat a weboldalról képernyőképeket vagy hivatkozást, kivéve, ha a Megrendelő ezt
        írásban megtiltja.
      </p>
    ),
  },
  {
    id: "elallas",
    title: "8. Elállás és visszatérítés",
    content: (
      <>
        <p>
          A Megrendelő a szerződés megkötését követő 14 napon belül indoklás nélkül elállhat a szerződéstől. Ebben az
          esetben a Szolgáltató a már kifizetett előleget visszatéríti.
        </p>
        <p>
          Ha a munka a Megrendelő kérésére már megkezdődött, a Szolgáltató a már elvégzett munkáért arányosan
          számlázhat.
        </p>
      </>
    ),
  },
  {
    id: "adatvedelem",
    title: "9. Adatvédelem",
    content: (
      <p>
        Az adatkezelésről részletes tájékoztatást az <a href="/privacy">adatvédelmi tájékoztatóban</a> találsz.
      </p>
    ),
  },
  {
    id: "kapcsolat",
    title: "10. Kapcsolat",
    content: (
      <>
        <p>Kérdéseiddel, reklamációiddal az alábbi elérhetőségeken fordulhatsz hozzánk:</p>
        <p>
          <strong>E-mail:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <br />
          <strong>Telefon:</strong> <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
          <br />
          <strong>Székhely:</strong> {CONTACT.city}
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument title="Általános szerződési feltételek" effectiveDate="2026. szeptember 16." sections={SECTIONS} />
  );
}
