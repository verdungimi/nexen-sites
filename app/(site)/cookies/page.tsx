import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";
import LegalDocument, { type LegalSection } from "../privacy/LegalDocument";

export const metadata: Metadata = {
  title: "Cookie tájékoztató",
  description:
    "Milyen cookie-kat használ a Nexen Sites weboldala, melyek kapcsolnak be csak a hozzájárulásoddal, hol tároljuk a döntésedet, és hogyan módosíthatod.",
  alternates: {
    canonical: "/cookies",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "mi-a-cookie",
    title: "Mi az a cookie?",
    content: (
      <p>
        A cookie-k kis szöveges fájlok, amelyeket a weboldal a böngésződben helyez el, amikor meglátogatod. Segítenek
        az oldalnak megjegyezni a beállításaidat, és biztosítják, hogy az oldal megfelelően működjön.
      </p>
    ),
  },
  {
    id: "cookie-tipusok",
    title: "Milyen cookie-kat használunk?",
    content: (
      <>
        <h3>Szükséges cookie-k</h3>
        <p>
          Ezek nélkül az oldal nem működik rendesen, ezért mindig be vannak kapcsolva, és nem kapcsolhatók ki. Ide
          tartozik például:
        </p>
        <ul>
          <li>a munkamenet kezelése,</li>
          <li>a biztonsági funkciók,</li>
          <li>az oldal alapvető működése.</li>
        </ul>

        <h3>Analitikai cookie-k</h3>
        <p>
          Megmutatják, hogyan használják a látogatók az oldalt, így tudjuk javítani. Csak akkor kapcsolnak be, ha
          hozzájárulsz. Ehhez a Google Analytics szolgáltatást használjuk, amely csak az analitikai cookie-k
          elfogadása után kezd mérni, anonimizált IP-címmel. Ide tartozik:
        </p>
        <ul>
          <li>a látogatottsági statisztika,</li>
          <li>az oldalhasználati adatok,</li>
          <li>a teljesítménymérés.</li>
        </ul>

        <h3>Marketing cookie-k</h3>
        <p>
          A hirdetéseink személyre szabásához és mérésükhöz használjuk őket. Ezek is csak a hozzájárulásoddal kapcsolnak
          be. Ide tartozik:
        </p>
        <ul>
          <li>a hirdetések személyre szabása,</li>
          <li>a kampányok mérése,</li>
          <li>a visszatérő látogatók felismerése.</li>
        </ul>
      </>
    ),
  },
  {
    id: "dontes-tarolasa",
    title: "Hol tároljuk a döntésedet?",
    content: (
      <>
        <p>
          Amikor a cookie-sávon döntesz, a választásodat a böngésződ helyi tárhelyén (localStorage) tároljuk, két
          bejegyzésben:
        </p>
        <ul>
          <li>
            <strong>cookieConsent</strong>: azt jelzi, hogy már döntöttél, ezért a cookie-sáv nem jelenik meg újra,
          </li>
          <li>
            <strong>cookiePreferences</strong>: azt rögzíti, hogy a szükségeseken kívül engedélyezted-e az analitikai és
            a marketing cookie-kat.
          </li>
        </ul>
        <p>Ezek az adatok csak a te böngésződben vannak, hozzánk nem kerülnek el.</p>
      </>
    ),
  },
  {
    id: "kezeles",
    title: "Cookie-k kezelése",
    content: (
      <>
        <p>
          A böngésződ beállításaiban bármikor törölheted vagy letilthatod a cookie-kat és az oldal által tárolt
          adatokat. Ha az oldal adatait törlöd, a cookie-sáv a következő látogatáskor újra megjelenik, és újra
          dönthetsz. Ha a szükséges cookie-kat tiltod le, az oldal egyes funkciói nem fognak megfelelően működni.
        </p>
        <p>
          A legtöbb böngészőben ezeket a beállításokat az Adatvédelem és biztonság menüpontban, a cookie-k és
          webhelyadatok között találod.
        </p>
      </>
    ),
  },
  {
    id: "harmadik-felek",
    title: "Harmadik felek cookie-jai",
    content: (
      <p>
        Az analitikai és marketing célú külső szolgáltatások, például a Google Analytics, saját cookie-kat helyezhetnek
        el, és saját adatvédelmi szabályaikat követik. További információt az{" "}
        <a href="/privacy">adatvédelmi tájékoztatóban</a> találsz.
      </p>
    ),
  },
  {
    id: "kapcsolat",
    title: "Kapcsolat",
    content: (
      <>
        <p>Ha kérdésed van a cookie-kkal kapcsolatban, itt érsz el minket:</p>
        <p>
          <strong>E-mail:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <br />
          <strong>Telefon:</strong> <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
        </p>
      </>
    ),
  },
];

export default function CookiesPage() {
  return <LegalDocument title="Cookie tájékoztató" effectiveDate="2026. szeptember 16." sections={SECTIONS} />;
}
