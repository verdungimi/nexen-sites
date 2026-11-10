import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { CONTACT, LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató",
  description:
    "Milyen adatokat kezel a Nexen Sites a demo-kérés, a foglalás és a kapcsolatfelvétel során, milyen célból, meddig, és kik az adatfeldolgozók.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const email = <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>;
  const phone = <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>;

  return (
    <LegalPage
      title="Adatkezelési tájékoztató"
      path="/privacy"
      crumbLabel="Adatkezelési tájékoztató"
      updated="2026. november 10."
      answer={`Röviden: csak azokat az adatokat kezeljük, amiket az űrlapokon megadsz, és csak arra, hogy elkészítsük a demódat, felvegyük veled a kapcsolatot és ajánlatot adjunk. Az adatkezelő ${LEGAL.name}. Statisztikai és hirdetésmérő eszközök csak a hozzájárulásoddal töltenek be. Az adataid törlését bármikor kérheted.`}
    >
      <h2>1. Ki kezeli az adataidat?</h2>
      <table>
        <tbody>
          <tr>
            <th scope="row">Adatkezelő</th>
            <td>{LEGAL.name} (márkanév: Nexen Sites)</td>
          </tr>
          <tr>
            <th scope="row">Székhely</th>
            <td>{LEGAL.address}</td>
          </tr>
          <tr>
            <th scope="row">Adószám</th>
            <td>{LEGAL.taxNumber}</td>
          </tr>
          <tr>
            <th scope="row">Nyilvántartási szám</th>
            <td>{LEGAL.registryNumber}</td>
          </tr>
          <tr>
            <th scope="row">E-mail</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th scope="row">Telefon</th>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Milyen adatokat kezelünk, mire és milyen jogalapon?</h2>

      <h3>Demo-kérés</h3>
      <ul>
        <li>
          <strong>Adatok:</strong> név, cégnév, telefonszám, e-mail-cím, a mostani weboldalad vagy Facebook-oldalad linkje (ha megadod), a kérdéssor
          válaszai (mivel foglalkozik a céged, van-e weboldalad, mi a célod, honnan jönnek az ügyfeleid, mikor indulnál), az, hogy melyik oldalról
          küldted az űrlapot, és ha hirdetésből érkeztél, a hirdetés kampányjelölői.
        </li>
        <li>
          <strong>Cél:</strong> a demo weboldal elkészítése, a kapcsolatfelvétel és az ajánlatadás.
        </li>
        <li>
          <strong>Jogalap:</strong> a szerződéskötést megelőzően, a kérésedre tett lépések (GDPR 6. cikk (1) bekezdés b) pont).
        </li>
      </ul>

      <h3>Konzultációfoglalás</h3>
      <ul>
        <li>
          <strong>Adatok:</strong> név, cégnév (ha megadod), telefonszám, e-mail-cím, a választott téma és megjegyzés (ha megadod), a választott nap
          és időpont.
        </li>
        <li>
          <strong>Cél:</strong> az időpont egyeztetése és a beszélgetés előkészítése.
        </li>
        <li>
          <strong>Jogalap:</strong> a szerződéskötést megelőzően, a kérésedre tett lépések (GDPR 6. cikk (1) bekezdés b) pont).
        </li>
      </ul>

      <h3>Kapcsolati űrlap, telefon, e-mail</h3>
      <ul>
        <li>
          <strong>Adatok:</strong> név, e-mail-cím, telefonszám (ha megadod), és amit az üzenetedben leírsz.
        </li>
        <li>
          <strong>Cél:</strong> a megkeresésed megválaszolása.
        </li>
        <li>
          <strong>Jogalap:</strong> az adatkezelő jogos érdeke a megkeresések megválaszolásához (GDPR 6. cikk (1) bekezdés f) pont).
        </li>
      </ul>

      <h3>Látogatási statisztika és hirdetésmérés</h3>
      <ul>
        <li>
          <strong>Adatok:</strong> cookie-azonosítók, a megnézett oldalak, az eszköz és a böngésző típusa, hozzávetőleges hely, valamint az, hogy
          honnan érkeztél az oldalra.
        </li>
        <li>
          <strong>Cél:</strong> a látogatottság mérése (Google Analytics) és a hirdetések eredményének mérése (Meta Pixel).
        </li>
        <li>
          <strong>Jogalap:</strong> a hozzájárulásod (GDPR 6. cikk (1) bekezdés a) pont). Ezek az eszközök a hozzájárulásod nélkül be sem töltenek. A
          hozzájárulásodat bármikor visszavonhatod az oldal alján a „Cookie-beállítások" gombbal.
        </li>
      </ul>

      <h3>Technikai adatok és spamvédelem</h3>
      <p>
        Az oldal kiszolgálásakor a tárhelyszolgáltató szervernaplóiban átmenetileg megjelenik az IP-címed. Az űrlapok beküldésekor az IP-címet néhány
        percig arra is használjuk, hogy kiszűrjük a tömeges, automatizált beküldéseket. Jogalap: az adatkezelő jogos érdeke az oldal biztonságos
        működtetéséhez (GDPR 6. cikk (1) bekezdés f) pont).
      </p>

      <h2>3. Meddig őrizzük meg az adatokat?</h2>
      <p>
        Az adatokat addig őrizzük meg, ameddig az adatkezelés célja fennáll, vagy amíg a törlésüket nem kéred. Ha szerződés jön létre, az adatokat a
        szerződés teljesítéséig, majd a szerződés megszűnését követően a számviteli törvény előírásainak megfelelően, általában 8 évig tároljuk.
      </p>

      <h2>4. Kik férnek hozzá az adatokhoz?</h2>
      <p>
        Az adataidat nem adjuk el, és harmadik félnek csak akkor továbbítjuk, ha azt jogszabály írja elő. Az oldal működtetéséhez az alábbi
        adatfeldolgozókat vesszük igénybe:
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Adatfeldolgozó</th>
            <th scope="col">Mire használjuk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Vercel Inc. (vercel.com)</th>
            <td>Tárhely és az oldal kiszolgálása. A kérések technikai adatai, például az IP-cím, átmenetileg a szervernaplókban jelennek meg.</td>
          </tr>
          <tr>
            <th scope="row">Supabase (supabase.com)</th>
            <td>Az űrlapokon beküldött adatok tárolása adatbázisban.</td>
          </tr>
          <tr>
            <th scope="row">Resend (resend.com)</th>
            <td>Az űrlapokon megadott adatok továbbítása e-mailben nekünk, és a visszaigazoló e-mail elküldése neked.</td>
          </tr>
          <tr>
            <th scope="row">Google Ireland Limited (Google Analytics)</th>
            <td>Látogatási statisztika, csak ha a statisztikai cookie-khoz hozzájárultál.</td>
          </tr>
          <tr>
            <th scope="row">Meta Platforms Ireland Limited (Meta Pixel)</th>
            <td>A Facebook- és Instagram-hirdetések eredményének mérése, csak ha a marketing cookie-khoz hozzájárultál.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ha valamelyik szolgáltató az Európai Gazdasági Térségen kívül kezel adatot, az adatok védelmét az adott szolgáltató adatfeldolgozási
        feltételei (például az Európai Bizottság által elfogadott általános szerződési feltételek) biztosítják.
      </p>

      <h2>5. Cookie-k</h2>
      <p>
        Az oldal működéséhez szükséges adatokat mindig tároljuk a böngésződben, statisztikai és marketing cookie-kat csak a hozzájárulásoddal
        használunk. A részleteket a <a href="/cookies">cookie tájékoztatóban</a> találod.
      </p>

      <h2>6. Milyen jogaid vannak?</h2>
      <ul>
        <li>hozzáférhetsz a rólad kezelt adatokhoz, és másolatot kérhetsz róluk;</li>
        <li>kérheted a pontatlan adatok helyesbítését;</li>
        <li>kérheted az adataid törlését;</li>
        <li>kérheted az adatkezelés korlátozását;</li>
        <li>kérheted, hogy az adataidat géppel olvasható formában megkapd (adathordozhatóság);</li>
        <li>tiltakozhatsz a jogos érdeken alapuló adatkezelés ellen;</li>
        <li>a hozzájárulásodat bármikor visszavonhatod, ez nem érinti a visszavonás előtti adatkezelés jogszerűségét.</li>
      </ul>
      <p>
        A jogaidat a(z) {email} címre írva gyakorolhatod, a kérésedre legkésőbb egy hónapon belül válaszolunk. Panasszal a Nemzeti Adatvédelmi és
        Információszabadság Hatósághoz (NAIH, 1055 Budapest, Falk Miksa utca 9–11.,{" "}
        <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer">
          naih.hu
        </a>
        ) fordulhatsz, vagy bírósághoz is fordulhatsz.
      </p>

      <h2>7. Kapcsolat</h2>
      <p>
        Az adatkezeléssel kapcsolatos kérdéseiddel itt érsz el minket: {email}, {phone} ({CONTACT.hours}).
      </p>
    </LegalPage>
  );
}
