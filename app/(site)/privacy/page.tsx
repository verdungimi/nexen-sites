import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";
import LegalDocument, { type LegalSection } from "./LegalDocument";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description:
    "Milyen adatokat kezel a Nexen Sites a konzultációfoglalás és a kapcsolatfelvétel során, milyen célból és jogalapon, meddig, és milyen jogaid vannak.",
  alternates: {
    canonical: "/privacy",
  },
};

const emailLink = <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>;
const phoneLink = <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "adatkezelo",
    title: "1. Az adatkezelő adatai",
    content: (
      <p>
        <strong>Cégnév:</strong> Nexen Sites
        <br />
        <strong>Székhely:</strong> {CONTACT.city}
        <br />
        <strong>E-mail:</strong> {emailLink}
        <br />
        <strong>Telefon:</strong> {phoneLink}
      </p>
    ),
  },
  {
    id: "kezelt-adatok",
    title: "2. A kezelt adatok köre",
    content: (
      <>
        <p>A konzultációfoglaló űrlap kitöltésekor az alábbi adatokat kezeljük:</p>
        <ul>
          <li>név</li>
          <li>cégnév (ha megadod)</li>
          <li>e-mail-cím</li>
          <li>telefonszám</li>
          <li>a cég éves árbevételi sávja</li>
          <li>a tervezett weboldal-keret sávja</li>
          <li>a projekt célja és tervezett indulása (ha megadod)</li>
          <li>üzenet, a projekt rövid leírása (ha megadod)</li>
          <li>a választott konzultációs időpont (dátum és időpont)</li>
        </ul>
        <p>A kapcsolati űrlap kitöltésekor a nevedet, az e-mail-címedet, az üzenet tárgyát és az üzenetedet kezeljük.</p>
      </>
    ),
  },
  {
    id: "cel-es-jogalap",
    title: "3. Az adatkezelés célja és jogalapja",
    content: (
      <>
        <p>
          <strong>Az adatkezelés célja:</strong> a konzultáció előkészítése és a kapcsolatfelvétel, vagyis a
          megkeresésed megválaszolása, az időpont egyeztetése, és hogy a konzultáción a céged helyzetéhez illő
          javaslattal készülhessünk.
        </p>
        <p>
          <strong>Jogalap:</strong> a hozzájárulásod (GDPR 6. cikk (1) bekezdés a) pont), illetve az adatkezelő jogos
          érdeke (GDPR 6. cikk (1) bekezdés f) pont) a kapcsolatfelvételi kérés kezeléséhez. A hozzájárulásodat
          bármikor visszavonhatod, ez nem érinti a visszavonás előtti adatkezelés jogszerűségét.
        </p>
      </>
    ),
  },
  {
    id: "megorzesi-ido",
    title: "4. Megőrzési idő",
    content: (
      <p>
        Az adatokat addig őrizzük meg, ameddig az adatkezelés célja fennáll, vagy amíg a törlésüket nem kéred. Ha
        szerződés jön létre, az adatokat a szerződés teljesítéséig, majd a szerződés megszűnését követően a számviteli
        törvény előírásainak megfelelően, általában 8 évig tároljuk.
      </p>
    ),
  },
  {
    id: "adatfeldolgozok",
    title: "5. Adattovábbítás és adatfeldolgozók",
    content: (
      <>
        <p>
          Az adataidat nem adjuk el, és harmadik félnek csak akkor továbbítjuk, ha azt jogszabály írja elő. Az oldal
          működtetéséhez az alábbi adatfeldolgozókat vesszük igénybe:
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> (vercel.com): tárhely és az oldal kiszolgálása. A kérésekhez tartozó technikai
            adatok, például az IP-cím, átmenetileg a szervernaplókban jelennek meg.
          </li>
          <li>
            <strong>Resend</strong> (resend.com): a foglalási és a kapcsolati űrlapon megadott adatokat e-mailben
            továbbítja nekünk.
          </li>
          <li>
            <strong>Google Ireland Limited</strong> (Google Analytics): csak akkor, ha az analitikai cookie-khoz
            hozzájárultál. Névtelenített IP-címmel mért látogatási statisztikákat kapunk.
          </li>
        </ul>
        <p>
          Ha valamelyik szolgáltató az Európai Gazdasági Térségen kívül kezel adatot, az adatok védelmét az adott
          szolgáltató adatfeldolgozási feltételei (például az Európai Bizottság által elfogadott általános szerződési
          feltételek) biztosítják.
        </p>
      </>
    ),
  },
  {
    id: "cookie-k",
    title: "6. Cookie-k",
    content: (
      <p>
        Az oldal működéséhez szükséges cookie-kat mindig használjuk, analitikai és marketing cookie-kat csak a
        hozzájárulásoddal. A részleteket a <a href="/cookies">cookie tájékoztatóban</a> találod.
      </p>
    ),
  },
  {
    id: "jogaid",
    title: "7. Jogaid",
    content: (
      <>
        <p>Az adatkezeléssel kapcsolatban az alábbi jogok illetnek meg:</p>
        <ul>
          <li>hozzáférési jog</li>
          <li>helyesbítési jog</li>
          <li>törléshez való jog („elfeledtetéshez való jog”)</li>
          <li>az adatkezelés korlátozásához való jog</li>
          <li>az adathordozhatósághoz való jog</li>
          <li>tiltakozási jog</li>
          <li>a hozzájárulás visszavonásának joga</li>
        </ul>
        <p>
          A jogaidat a {emailLink} címre írva gyakorolhatod. Panasszal a Nemzeti Adatvédelmi és Információszabadság
          Hatósághoz (NAIH) is fordulhatsz.
        </p>
      </>
    ),
  },
  {
    id: "kapcsolat",
    title: "8. Kapcsolat",
    content: (
      <>
        <p>Az adatkezeléssel kapcsolatos kérdéseiddel az alábbi elérhetőségeken fordulhatsz hozzánk:</p>
        <p>
          <strong>E-mail:</strong> {emailLink}
          <br />
          <strong>Telefon:</strong> {phoneLink}
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return <LegalDocument title="Adatvédelmi tájékoztató" effectiveDate="2026. szeptember 16." sections={SECTIONS} />;
}
