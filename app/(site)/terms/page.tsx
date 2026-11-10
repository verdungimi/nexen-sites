import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { CONTACT, LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Általános szerződési feltételek (ÁSZF)",
  description:
    "A Nexen Sites weboldalkészítési szolgáltatásának feltételei: ingyenes demo, díj és fizetés, határidők, módosítási körök, jogok, felmondás.",
  alternates: { canonical: "/terms" },
};

/**
 * Follows the contract template of 2026-11-04 ("Nexen Sites Szerződés sablon (egyszerűsített)").
 * If the template changes, change this page with it. The individual signed contract always takes precedence.
 */
export default function TermsPage() {
  return (
    <LegalPage
      title="Általános szerződési feltételek"
      path="/terms"
      crumbLabel="ÁSZF"
      updated="2026. november 10."
      answer="Röviden: a demo weboldal ingyenes, és semmire nem kötelez. Ha megrendeled az oldalt, írásos szerződést kötünk: előleg az aláíráskor, végszámla az átadáskor, 8 napos fizetési határidővel. Az ár két-két módosítási kört és 14 nap díjmentes hibajavítást tartalmaz. Felmondás esetén az elvégzett munka szerint számolunk el."
    >
      <h2>1. A szolgáltató</h2>
      <p>
        {LEGAL.name} (márkanév: Nexen Sites), székhely: {LEGAL.address}, adószám: {LEGAL.taxNumber}, nyilvántartási szám: {LEGAL.registryNumber},
        e-mail: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, telefon: <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a> (a
        továbbiakban: Szolgáltató).
      </p>

      <h2>2. Mire vonatkoznak ezek a feltételek?</h2>
      <p>
        Ezek a feltételek a nexensites.hu weboldal használatára és a Szolgáltató weboldalkészítési szolgáltatásaira vonatkoznak. A konkrét munkára a
        Szolgáltató és az Ügyfél írásos, egyedi szerződést köt. Ha az egyedi szerződés és ezek a feltételek eltérnek, az egyedi szerződés az
        irányadó.
      </p>
      <p>A weboldalon olvasható tartalom tájékoztatás, nem minősül ajánlattételnek. Árat a Szolgáltató írásos ajánlatban ad.</p>

      <h2>3. A szolgáltatások</h2>
      <ul>
        <li>egyedi kódból épített weboldal: egyoldalas bemutatkozó vagy landing oldal, többoldalas céges weboldal, webshop;</li>
        <li>meglévő weboldal újratervezése;</li>
        <li>szövegírás a weboldalhoz;</li>
        <li>keresőoptimalizálási (SEO) alapbeállítások és a Google cégprofil rendbetétele;</li>
        <li>GEO, vagyis a weboldal felkészítése az AI-keresőkre;</li>
        <li>mérés beállítása;</li>
        <li>havi karbantartás: frissítés, biztonság, sebesség, kisebb módosítások (ha a felek megállapodnak róla).</li>
      </ul>
      <p>
        A keresőkben és az AI-keresőkben elért megjelenés a Szolgáltatótól független tényezőkön is múlik, ezért a Szolgáltató helyezést vagy
        megjelenést nem garantál.
      </p>

      <h2>4. Az ingyenes demo weboldal</h2>
      <p>
        Az érdeklődő kérésére a Szolgáltató díjmentesen demo weboldalt készít az érdeklődő cégére. A demo kérése nem megrendelés, és az érdeklődőt
        semmire nem kötelezi: a demóért és a demóig semmit nem kell fizetni. Ha a demo nem tetszik, az érdeklődőnek nincs fizetési kötelezettsége.
      </p>
      <p>
        A demo a Szolgáltató munkája. Szerződéskötés nélkül az érdeklődő a demót, annak szövegét és megjelenését nem használhatja fel, és másnak nem
        adhatja át.
      </p>

      <h2>5. Szerződéskötés</h2>
      <p>
        A szerződés írásban jön létre, elektronikus aláírással is érvényes, és az utolsó aláírás napján lép hatályba. A weboldal pontos tartalmát
        (típus, oldalak, funkciók, átadási határidő) a szerződés melléklete, a projektleírás rögzíti. Ami a projektleírásban nem szerepel, az csak
        külön árajánlat alapján, az Ügyfél írásbeli (e-mailes) jóváhagyása után készül el.
      </p>

      <h2>6. Mit tartalmaz az ár?</h2>
      <ul>
        <li>egyedi dizájnt és fejlesztést, mobilbarát megjelenéssel;</li>
        <li>a tartalom feltöltését;</li>
        <li>az alap SEO-beállításokat és az SSL-tanúsítvány beállítását;</li>
        <li>közreműködést a domain és a tárhely beüzemelésében;</li>
        <li>a tesztelést, az élesítést és az adminfelület bemutatását;</li>
        <li>a dizájntervre és a kész weboldalra egyaránt 2–2 módosítási kört.</li>
      </ul>

      <h2>7. Díj és fizetés</h2>
      <ul>
        <li>Az előleg a szerződés aláírásakor, a végszámla az átadáskor esedékes.</li>
        <li>A számlákat a kiállítástól számított 8 napon belül kell kifizetni.</li>
        <li>
          Ha az Ügyfél 8 napnál többet késik a fizetéssel, a Szolgáltató a munkát felfüggesztheti, és a határidők ennyivel kitolódnak. A késedelmes
          összeg után a Polgári Törvénykönyv szerinti késedelmi kamat jár.
        </li>
        <li>Az előleg a díj része. Ha a szerződés a teljesítés előtt megszűnik, a felek a 13. pont szerint számolnak el.</li>
      </ul>

      <h2>8. Határidők és együttműködés</h2>
      <ul>
        <li>
          Az átadási határidőt a projektleírás tartalmazza. A határidő attól a naptól számít, amikor az Ügyfél a szükséges anyagokat (szöveg, kép,
          logó) és hozzáféréseket hiánytalanul átadta.
        </li>
        <li>Ha az Ügyfél késik az anyagokkal vagy a visszajelzéssel, a határidő ugyanennyivel kitolódik.</li>
        <li>A 2–2 módosítási körön felüli módosítás külön ajánlat alapján készül.</li>
        <li>
          Ha a Szolgáltató egy tervet vagy részeredményt bemutat, és az Ügyfél 10 munkanapon belül nem jelez vissza, a Szolgáltató e-mailben
          emlékezteti. Ha az emlékeztetőtől számított további 5 munkanapon belül sem érkezik válasz, az adott lépés elfogadottnak számít.
        </li>
      </ul>

      <h2>9. Átadás és hibajavítás</h2>
      <ul>
        <li>Az átadás után az Ügyfél 5 munkanapon belül jelzi az észlelt hibákat. Ha nem jelez hibát, a weboldal átvettnek számít.</li>
        <li>
          Az átadástól számított 14 napig a Szolgáltató díjmentesen kijavít minden olyan hibát, amely az ő munkájából ered (például megjelenítési
          hiba, hibás link, nem működő funkció).
        </li>
        <li>
          Nem tartozik ide: az Ügyfél vagy más által végzett módosítás, a tárhely vagy más külső szolgáltató hibája, az Ügyfél által adott tartalom
          hibája, új funkció kérése, külső bővítmények frissítéséből eredő hiba.
        </li>
        <li>A 14 napos díjmentes hibajavítás nem korlátozza az Ügyfél jogszabály szerinti szavatossági jogait.</li>
      </ul>

      <h2>10. Jogok a weboldalon</h2>
      <ul>
        <li>
          A teljes díj kifizetésével a Szolgáltató a weboldalhoz írt egyedi programkód vagyoni jogait az Ügyfélre ruházza át. A weboldal dizájnjára
          az Ügyfél kizárólagos, időben és területileg korlátlan, átdolgozásra is kiterjedő és harmadik személynek továbbadható felhasználási jogot
          kap. Ezek ellenértékét a díj tartalmazza.
        </li>
        <li>A teljes díj kifizetéséig ezek a jogok a Szolgáltatónál maradnak.</li>
        <li>
          A Szolgáltató korábban készült saját eszközei és sablonjai az övéi maradnak; az Ügyfél ezeket ehhez a weboldalhoz díjmentesen és határidő
          nélkül használhatja.
        </li>
        <li>A külső elemekre (betűtípus, bővítmény, stockfotó) a saját licencfeltételeik vonatkoznak.</li>
        <li>A Szolgáltató a weboldalt referenciaként bemutathatja, kivéve, ha az Ügyfél ezt írásban megtiltja.</li>
        <li>Az Ügyfél felel azért, hogy az általa adott tartalmak (szöveg, kép, videó) jogtiszták.</li>
      </ul>

      <h2>11. Felelősség</h2>
      <ul>
        <li>
          A Szolgáltató szerződésszegésért való felelőssége legfeljebb az Ügyfél által ténylegesen kifizetett díj összegéig terjed. Ez a korlátozás
          nem vonatkozik a szándékosan vagy súlyos gondatlansággal okozott, illetve az életet, testi épséget vagy egészséget megsértő károkra,
          fogyasztó Ügyfél esetén pedig csak a jogszabály által megengedett mértékben alkalmazható.
        </li>
        <li>A Szolgáltató nem felel a külső szolgáltatók (tárhely, domain-regisztrátor, fizetési rendszer) kimaradásaiért.</li>
        <li>
          Az Ügyfél felel a weboldalán közzétett saját tartalmakért, és azért, hogy a weboldalán a szükséges adatkezelési és süti-tájékoztató
          megjelenjen.
        </li>
      </ul>

      <h2>12. Titoktartás és adatok</h2>
      <ul>
        <li>
          Mindkét fél bizalmasan kezeli a másiktól kapott üzleti információkat és hozzáférési adatokat (jelszavak, adminfelületek) a szerződés
          megszűnése után 12 hónapig.
        </li>
        <li>
          Ha a Szolgáltató a munka során személyes adatokhoz fér hozzá (például az űrlapokon beérkező adatokhoz), azokat kizárólag a munka
          elvégzéséhez, az Ügyfél utasítása szerint kezeli. Ha ez tartósan szükséges (például karbantartásnál), a felek külön adatfeldolgozói
          megállapodást kötnek.
        </li>
        <li>A munka végén a Szolgáltató átadja az Ügyfélnek az összes hozzáférést, és kérésre a saját hozzáférését megszünteti.</li>
      </ul>

      <h2>13. Felmondás és elszámolás</h2>
      <p>
        <strong>Az Ügyfél</strong> a szerződést bármikor felmondhatja írásban. Ilyenkor a teljes díj alábbi részét kell megfizetnie:
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">A felmondás időpontja</th>
            <th scope="col">Fizetendő</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A munka megkezdése után, a dizájnterv bemutatása előtt</td>
            <td>a teljes díj 25%-a</td>
          </tr>
          <tr>
            <td>A dizájnterv bemutatása után</td>
            <td>a teljes díj 50%-a</td>
          </tr>
          <tr>
            <td>A fejlesztés befejezése után (az oldal átadásra kész)</td>
            <td>a teljes díj 100%-a</td>
          </tr>
        </tbody>
      </table>
      <p>
        A befizetett előleg ebbe beleszámít. Ha az előleg több ennél, a Szolgáltató a különbözetet 14 napon belül visszautalja; ha kevesebb, az
        Ügyfél fizeti meg a különbözetet.
      </p>
      <p>
        <strong>A Szolgáltató</strong> felmondhatja a szerződést, ha az Ügyfél írásbeli felszólítás ellenére 30 napnál tovább nem adja át a szükséges
        anyagokat vagy hozzáféréseket, vagy 14 napnál többet késik a fizetéssel. Ilyenkor is a fenti táblázat szerint kell elszámolni.
      </p>
      <p>
        <strong>Ha a szerződés a Szolgáltató hibájából szűnik meg</strong> (például nem teljesít), az Ügyfél a teljes befizetett előleget visszakapja.
      </p>
      <p>
        <strong>Azonnali felmondás:</strong> bármelyik fél azonnal felmondhat, ha a másik fél súlyosan megszegi a szerződést, és írásbeli felszólítás
        ellenére 8 napon belül nem orvosolja.
      </p>
      <p>
        <strong>Fogyasztó Ügyfél esetén:</strong> az Ügyfél a szerződéskötéstől számított 14 napon belül indoklás nélkül felmondhat (45/2014. (II.
        26.) Korm. rendelet). Ha a munka még nem kezdődött el, a teljes befizetett összeget 14 napon belül visszakapja. Ha a munkát az Ügyfél
        kifejezett kérésére már a 14 nap lejárta előtt megkezdtük, a felmondásig elvégzett munkával arányos díjat kell megfizetnie, a fenti táblázat
        szerint. A felmondáshoz a szerződés mellékletében lévő nyilatkozat is használható.
      </p>

      <h2>14. Vis maior</h2>
      <p>
        Egyik fél sem felel a késésért vagy a teljesítés elmaradásáért, ha azt elháríthatatlan külső esemény (például természeti katasztrófa,
        járvány, háború, hatósági intézkedés, jelentős internetkimaradás) okozza. Erről a másik felet 5 munkanapon belül értesíteni kell.
      </p>

      <h2>15. Viták és panaszkezelés</h2>
      <ul>
        <li>A szerződésre a magyar jog, különösen a Polgári Törvénykönyv (2013. évi V. törvény) irányadó.</li>
        <li>
          Panaszt a <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> címen vagy a <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>{" "}
          telefonszámon lehet tenni.
        </li>
        <li>
          Vita esetén a felek először egyeztetnek. Fogyasztó Ügyfél a lakóhelye vagy a Szolgáltató székhelye szerint illetékes békéltető testülethez
          is fordulhat. Ennek eredménytelensége esetén a hatáskörrel és illetékességgel rendelkező bíróság jár el.
        </li>
        <li>A szerződés csak írásban módosítható; a mindkét fél által e-mailben megerősített módosítás is írásbelinek számít.</li>
      </ul>
    </LegalPage>
  );
}
