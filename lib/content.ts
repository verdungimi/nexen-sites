// Copy shared by several pages (home, /folyamat, /packages, /gyik, /rolunk).
// Edit here so the pages never contradict each other.

import type { FAQItem } from "@/components/FAQAccordion";

export interface ProcessStep {
  title: string;
  when: string;
  text: string;
  details: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Konzultáció",
    when: "Indulás előtt",
    text: "Online beszélgetünk a cégedről, az ügyfeleidről és arról, mit csinál vagy nem csinál most a weboldalad. Ha kiderül, hogy nem vagyunk jó páros, ezt ott elmondjuk.",
    details: ["Célok és ügyféltípusok", "A mostani oldal gyenge pontjai", "Írásos ajánlat a terjedelemről"],
  },
  {
    title: "Szerkezet és szöveg",
    when: "1. munkanap",
    text: "A konzultáción elhangzottakból megírjuk az oldal szerkezetét és szövegeit. Itt dől el, milyen sorrendben kap választ a látogató a kérdéseire, mielőtt ajánlatot kér.",
    details: ["Oldaltérkép", "Szövegek a te szakmai nyelveden", "Ajánlatkérési folyamat"],
  },
  {
    title: "Design és fejlesztés",
    when: "2. munkanap",
    text: "Megtervezzük és felépítjük az oldalt a céged arculatára. A telefonos nézet ugyanannyi figyelmet kap, mint az asztali, mert az ügyfeleid többsége ott néz meg először.",
    details: ["Egyedi design", "Mobil nézet", "Gyors betöltés"],
  },
  {
    title: "Első élő változat",
    when: "3. munkanap",
    text: "Megkapod a linket, végigkattintod, és elmondod, mit módosítsunk. Két javítási kör benne van az árban.",
    details: ["Élő előnézeti link", "Két javítási kör", "Mérés beállítása"],
  },
  {
    title: "Jóváhagyás és élesítés",
    when: "Amikor elégedett vagy",
    text: "Élesítjük az oldalt a saját domaineden, és ekkor fizeted ki a végösszeg hátralévő részét. Utána havi gondozással mi figyelünk rá.",
    details: ["Élesítés a domaineden", "Végösszeg a jóváhagyás után", "Havi gondozás igény szerint"],
  },
];

export interface Tier {
  name: string;
  summary: string;
  features: string[];
  recommended?: boolean;
}

export const TIERS: Tier[] = [
  {
    name: "Bemutatkozó oldal",
    summary: "Egy szolgáltatásra vagy kampányra, amikor az oldalnak egyetlen dolga van: ajánlatkérést vagy időpontot szerezni.",
    features: [
      "Egy hosszú, jól tagolt oldal",
      "Szövegírás a szolgáltatásod alapján",
      "Ajánlatkérő vagy időpontfoglaló űrlap",
      "Mobilra és gyors betöltésre optimalizálva",
      "Mérés beállítása",
    ],
  },
  {
    name: "Céges weboldal",
    summary: "A céged teljes bemutatkozása, amikor a jó ügyfél több oldalt is megnéz, mielőtt dönt.",
    features: [
      "5–8 aloldal, szolgáltatásonként külön",
      "Szerkezet és szöveg a döntési folyamat szerint",
      "Szűrőkérdések az ajánlatkérésben",
      "Keresőoptimalizálási alapok és Google cégprofil",
      "Referenciák és vélemények bemutatása",
      "Mérés és konverziókövetés",
    ],
    recommended: true,
  },
  {
    name: "Növekedési csomag",
    summary: "Ha hirdetésekkel is építed az ügyfélszerzést, és minden szolgáltatásodnak saját, a hirdetéshez illő oldal kell.",
    features: [
      "Minden, ami a Céges weboldalban",
      "Külön landing oldal szolgáltatásonként vagy kampányonként",
      "A hirdetéshez igazított üzenet és mérés",
      "Havi gondozás és javítási javaslatok",
      "Negyedéves átnézés a számaid alapján",
    ],
  },
];

export const CARE_NOTE =
  "Bármelyik mellé kérhető havi gondozás: frissítés, biztonsági figyelés és kisebb módosítások. Az oldal nem áll meg az átadásnál.";

export interface Principle {
  title: string;
  text: string;
}

export const PRINCIPLES: Principle[] = [
  {
    title: "Előbb a szöveg, aztán a design",
    text: "A jó ügyfél azért választ, mert érti, mit kap. Ezért a konzultáción hallott mondataidból indulunk, nem egy sablon üres helyeiből.",
  },
  {
    title: "Minden oldal a te ügyfeleidről szól",
    text: "Nem tesszük ugyanazt a szerkezetet egy ügyvédi irodára és egy hőszivattyú-telepítőre. Azokra a kérdésekre építünk, amiket a te ügyfeleid tesznek fel.",
  },
  {
    title: "Kimondjuk, ha nem vagyunk jó páros",
    text: "Ha a konzultáción kiderül, hogy nem mi vagyunk a megfelelő megoldás, megmondjuk. Egy rossz projekt senkinek sem éri meg.",
  },
  {
    title: "Az átadás után sem tűnünk el",
    text: "Havi gondozással frissítjük, figyeljük és javítjuk az oldalt, hogy egy év múlva is ugyanúgy dolgozzon, mint az első napon.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Tényleg elkészül 3 munkanap alatt?",
    answer:
      "Az első működő változatot 3 munkanappal a konzultáció és az anyagaid beérkezése után látod. Ez azért lehetséges, mert a konzultáción mindent összegyűjtünk, amire szükség van, és bejáratott munkamenetben dolgozunk. A javítási körök és az élesítés ezután jönnek, a te visszajelzéseid tempójában.",
  },
  {
    question: "Mennyibe kerül egy weboldal?",
    answer:
      "A terjedelemtől függ: egy bemutatkozó oldal és egy többoldalas céges weboldal között nagy a különbség. Ezért árat a konzultáció után adunk, írásos ajánlatban.",
  },
  {
    question: "Hogyan működik a fizetés?",
    answer:
      "Megrendeléskor előleget fizetsz, a végösszeg hátralévő részét pedig akkor, amikor az elkészült oldalt jóváhagytad. Az előleg mértékét az ajánlat tartalmazza.",
  },
  {
    question: "Mi van, ha nem tetszik az első változat?",
    answer:
      "Két javítási kör benne van az árban. Az első változatnál pont azt kérjük, hogy mondd el őszintén, mi nem működik neked, és ez alapján dolgozunk tovább.",
  },
  {
    question: "Kinek nem való a Nexen Sites?",
    answer:
      "Ha a legolcsóbb megoldást keresed, valószínűleg nem mi vagyunk a jó választás. Azoknak a szolgáltató cégeknek dolgozunk a legjobban, ahol egy új ügyfél értéke százezrekben vagy milliókban mérhető.",
  },
  {
    question: "Nekem kell megírnom a szövegeket?",
    answer:
      "Nem. A szövegeket mi írjuk a konzultáción elhangzottak alapján. Tőled a szakmai ellenőrzést kérjük, és a logót, képeket, ha vannak.",
  },
  {
    question: "Mi történik az átadás után?",
    answer:
      "Havi gondozással mi frissítjük az oldalt, figyeljük a biztonságát és a sebességét, és elvégezzük a kisebb módosításokat, hogy ne neked kelljen foglalkoznod vele.",
  },
  {
    question: "Megtalálnak majd a Google-ben?",
    answer:
      "Minden oldalt keresőbarát szerkezettel, gyors betöltéssel és alap SEO-beállításokkal adunk át, és segítünk rendbe tenni a Google cégprofilodat. A keresési helyezés időbe telik, erre nem adunk hamis ígéretet.",
  },
  {
    question: "Csak kecskeméti cégekkel dolgoztok?",
    answer:
      "Nem. Kecskemétről dolgozunk, de a konzultáció online zajlik, így az ország bármely részéről vállalunk munkát.",
  },
];
