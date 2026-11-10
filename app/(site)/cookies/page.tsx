import type { Metadata } from "next";
import CookieSettingsButton from "@/components/site/CookieSettingsButton";
import LegalPage from "@/components/site/LegalPage";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie tájékoztató",
  description:
    "Milyen cookie-kat és böngészőben tárolt adatokat használ a nexensites.hu, mire valók, meddig élnek, és hogyan változtathatod meg a döntésedet.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie tájékoztató"
      path="/cookies"
      crumbLabel="Cookie tájékoztató"
      updated="2026. november 10."
      answer="Röviden: a működéshez szükséges adatokon kívül semmit nem tárolunk a böngésződben, amíg nem döntesz. Statisztikai cookie-kat (Google Analytics) és marketing cookie-kat (Meta Pixel) csak akkor használunk, ha a cookie-sávon hozzájárulsz. A döntésedet bármikor megváltoztathatod az oldal alján a Cookie-beállítások gombbal."
    >
      <h2>Mi az a cookie?</h2>
      <p>
        A cookie-k kis szöveges fájlok, amelyeket a weboldal a böngésződben helyez el. Hasonló célra szolgál a böngésző helyi tárhelye
        (localStorage, sessionStorage) is. Ez a tájékoztató mindkettőre vonatkozik.
      </p>

      <h2>Mit tárolunk a böngésződben?</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Név</th>
              <th scope="col">Típus</th>
              <th scope="col">Mire való</th>
              <th scope="col">Meddig él</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">nexen-consent</th>
              <td>Szükséges (helyi tárhely)</td>
              <td>Megjegyzi a cookie-sávon hozott döntésedet, hogy ne kérdezzük meg újra.</td>
              <td>Amíg nem törlöd</td>
            </tr>
            <tr>
              <th scope="row">nexen-quiz</th>
              <td>Szükséges (munkamenet-tárhely)</td>
              <td>A kérdéssor válaszait tartja meg, hogy az űrlappal együtt elküldhesd őket.</td>
              <td>A böngészőfül bezárásáig</td>
            </tr>
            <tr>
              <th scope="row">nexen-utm</th>
              <td>Szükséges (munkamenet-tárhely)</td>
              <td>Ha hirdetésből érkeztél, megjegyzi a hirdetés kampányjelölőit, hogy az űrlappal együtt megkapjuk.</td>
              <td>A böngészőfül bezárásáig</td>
            </tr>
            <tr>
              <th scope="row">_ga, _ga_*</th>
              <td>Statisztika (cookie)</td>
              <td>Google Analytics: megkülönbözteti a látogatókat, hogy névtelen látogatási statisztikát kapjunk.</td>
              <td>Legfeljebb 2 év</td>
            </tr>
            <tr>
              <th scope="row">_fbp</th>
              <td>Marketing (cookie)</td>
              <td>Meta Pixel: ezzel mérjük, hogy a Facebook- és Instagram-hirdetéseinkből hány megkeresés érkezik.</td>
              <td>3 hónap</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A szükséges adatok csak a te böngésződben vannak, hozzánk nem kerülnek el, és nem követnek téged. A statisztikai és a marketing cookie-k csak
        a hozzájárulásod után jönnek létre.
      </p>

      <h2>Hogyan változtathatod meg a döntésedet?</h2>
      <p>
        Bármikor, az oldal alján található „Cookie-beállítások" gombbal, vagy itt:{" "}
        <CookieSettingsButton className="link !inline !min-h-0 !text-mid hover:!text-navy">megnyitom a cookie-beállításokat</CookieSettingsButton>.
      </p>
      <p>
        A böngésződ beállításaiban az oldal által tárolt adatokat törölheted vagy letilthatod is; ilyenkor a cookie-sáv a következő látogatáskor
        újra megjelenik. A legtöbb böngészőben ezt az Adatvédelem és biztonság menüpontban találod.
      </p>

      <h2>Harmadik felek cookie-jai</h2>
      <p>
        A Google Analytics és a Meta Pixel saját cookie-kat helyez el, és a saját adatvédelmi szabályait követi. Arról, hogy ezek a szolgáltatók
        milyen adatokat kapnak, az <a href="/privacy">adatkezelési tájékoztatóban</a> olvashatsz.
      </p>

      <h2>Kapcsolat</h2>
      <p>
        Ha kérdésed van a cookie-kkal kapcsolatban, írj a(z) <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> címre, vagy hívj:{" "}
        <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>.
      </p>
    </LegalPage>
  );
}
