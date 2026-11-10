// Copy shared by several pages (home, /demo, /folyamat, /packages, /gyik, /rolunk, /geo).
// Edit here so the pages never contradict each other, the contract or the Google Business Profile.
// Rules: only true statements, no prices, no guarantees for SEO or GEO, and never "nincs előleg"
// (the contract asks for a deposit at signing; what is free is the demo).

export interface ProcessStep {
  title: string;
  when: string;
  text: string;
}

/** The whole process, from the quiz to monthly care. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Kitöltöd a kérdéssort",
    when: "Kb. 1 perc",
    text: "Öt koppintós kérdés a cégedről, utána megadod az elérhetőséged. Árbevételt és keretet nem kérdezünk.",
  },
  {
    title: "Megkapod az ingyenes demót",
    when: "1 napon belül",
    text: "Elkészítjük a demo weboldalt a saját cégedre, a te szolgáltatásaiddal. Ingyenes, és semmire nem kötelez.",
  },
  {
    title: "Megmutatjuk egy rövid hívásban",
    when: "Online",
    text: "Végigmegyünk a demón, és elmondod, mi tetszik, min változtatnál. Ha nem tetszik, itt megállunk, és nem fizetsz semmit.",
  },
  {
    title: "Ha tetszik, szerződünk",
    when: "Online aláírással",
    text: "Írásos szerződést kapsz a pontos tartalommal. Aláíráskor előleget fizetsz, a végszámlát az átadáskor kapod.",
  },
  {
    title: "Élesítjük az oldalt",
    when: "3 munkanapon belül",
    text: "A három munkanap attól számít, hogy átadtad az anyagaidat. A tervre és a kész oldalra is két-két módosítási kör jár.",
  },
  {
    title: "Az átadás után is figyelünk rá",
    when: "Ha kéred",
    text: "Az átadástól 14 napig díjmentesen javítjuk a hibákat. Kérhetsz havi karbantartást is: frissítés, biztonság, sebesség, kisebb módosítások.",
  },
];

/** The three-step short version used in heroes. */
export const SHORT_STEPS = [
  { title: "Kitöltöd a kérdéssort", text: "Öt kérdés a cégedről, kb. 30 másodperc." },
  {
    title: "Megkapod a demót",
    text: "Egy napon belül elkészül a saját cégedre, és egy rövid online hívásban megmutatjuk.",
  },
  { title: "Ha tetszik, élesítjük", text: "Szerződés után 3 munkanapon belül, amint megvannak az anyagaid." },
] as const;

export interface Benefit {
  title: string;
  text: string;
}

/** "Mit kapsz": benefits, not features. */
export const BENEFITS: Benefit[] = [
  {
    title: "Olyan oldal, ami csak a tiéd",
    text: "Egyedi kódból építjük, nem sablonból, nem Wixből és nem WordPressből. A teljes díj kifizetésével a kód a tiéd lesz.",
  },
  {
    title: "Nem neked kell megírnod",
    text: "A szövegeket mi írjuk meg a cégedről, minden csomagban. Neked csak át kell nézned, hogy szakmailag stimmel-e.",
  },
  {
    title: "Telefonról is könnyű megkeresni téged",
    text: "Először mobilra tervezünk: gyors betöltés, jól olvasható szöveg, kattintható telefonszám, rövid űrlap.",
  },
  {
    title: "Megtalál a Google, és megért az AI is",
    text: "Keresőoptimalizálási alapok, rendbe tett Google cégprofil és GEO: az oldalt úgy építjük fel, hogy a ChatGPT, a Gemini, a Perplexity és a Claude megtalálja, megértse és idézni tudja.",
  },
  {
    title: "Látod, honnan jön a megkeresés",
    text: "Beállítjuk a mérést, így tudod, hány hívás és ajánlatkérés érkezik az oldalról, és melyik forrásból.",
  },
  {
    title: "Nem maradsz magadra az átadás után",
    text: "Segítünk a domain és a tárhely beüzemelésében, megmutatjuk az adminfelületet, és 14 napig díjmentesen javítjuk a hibákat.",
  },
];

/** What the contract includes in every project. Shown once under the packages. */
export const IN_EVERY_PACKAGE = [
  "Egyedi dizájn és fejlesztés, mobilbarát megjelenéssel",
  "Szövegírás",
  "Tartalomfeltöltés",
  "Alap SEO-beállítások és SSL",
  "GEO-alapok: AI-keresők beengedése, strukturált adatok, válasz-első szövegek",
  "Segítség a domain és a tárhely beüzemelésében",
  "Tesztelés, élesítés és az adminfelület bemutatása",
  "2 módosítási kör a dizájntervre és 2 a kész oldalra",
  "14 napig díjmentes hibajavítás az átadás után",
  "A teljes díj kifizetésével a kód a tiéd",
];

export interface Tier {
  id: string;
  name: string;
  summary: string;
  bestFor: string;
  features: string[];
  recommended?: boolean;
}

export const TIERS: Tier[] = [
  {
    id: "bemutatkozo-oldal",
    name: "Bemutatkozó oldal",
    summary: "Egyoldalas weboldal egy szolgáltatásra vagy kampányra.",
    bestFor: "Akkor jó, ha az oldalnak egy dolga van: hívást, ajánlatkérést vagy időpontfoglalást hozni.",
    features: [
      "Egy hosszú, jól tagolt oldal",
      "Szövegírás a szolgáltatásod alapján",
      "SEO-alapok és GEO-alapok",
      "Ajánlatkérő vagy időpontfoglaló űrlap",
      "Mérés beállítása",
    ],
  },
  {
    id: "ceges-weboldal",
    name: "Céges weboldal",
    summary: "Többoldalas weboldal, a céged teljes bemutatása.",
    bestFor: "Akkor jó, ha az ügyfél több oldalt is megnéz, mielőtt dönt: szolgáltatások, munkák, rólunk.",
    features: [
      "5–8 aloldal, szolgáltatásonként külön",
      "Szövegírás minden aloldalra",
      "SEO-alapok, GEO-alapok és a Google cégprofil rendbetétele",
      "Referenciák és vélemények bemutatása",
      "Mérés: hívások és ajánlatkérések követése",
    ],
    recommended: true,
  },
  {
    id: "novekedesi-csomag",
    name: "Növekedési csomag",
    summary: "Céges weboldal és külön landing oldalak a hirdetéseidhez.",
    bestFor: "Akkor jó, ha hirdetsz is, és minden szolgáltatásodnak saját, a hirdetéshez illő oldal kell.",
    features: [
      "Minden, ami a Céges weboldalban",
      "Külön landing oldal szolgáltatásonként vagy kampányonként",
      "A hirdetéshez igazított szöveg és mérés",
      "Havi gondozás és javítási javaslatok",
      "Negyedéves átnézés a számaid alapján",
    ],
  },
];

export const CARE = {
  name: "Havi gondozás",
  summary: "Bármelyik csomag mellé kérhető, hogy az oldal egy év múlva is ugyanúgy működjön, mint az átadás napján.",
  features: ["Frissítés", "Biztonság figyelése", "Sebesség ellenőrzése", "Kisebb módosítások"],
};

export const WEBSHOP_NOTE =
  "Webshopot is építünk. A terjedelme a termékek számától és a fizetési, szállítási igényektől függ, ezért erre a demo után adunk egyedi ajánlatot.";

export const NO_PRICE_NOTE =
  "Árat nem írunk ki, mert a terjedelem cégenként más. Előbb megkapod az ingyenes demót, utána írásos ajánlatot adunk a pontos tartalommal.";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

/**
 * Questions people also ask AI assistants. Each answer stands on its own, without the question.
 * Plain text only: the same strings go into the FAQPage structured data.
 */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "A demo és az indulás",
    items: [
      {
        question: "Tényleg ingyenes a demo weboldal?",
        answer:
          "Igen. A Nexen Sites a saját cégedre készít demo weboldalt, ingyen és kötelezettség nélkül. A demóért és a demóig semmit nem kell fizetned. Ha a demo nem tetszik, nem fizetsz semmit, és nem tartozol semmivel.",
      },
      {
        question: "Mennyi idő alatt készül el egy weboldal?",
        answer:
          "A Nexen Sitesnál a demo weboldal 1 napon belül elkészül. Ha tetszik, és megkötjük a szerződést, a kész weboldalt az anyagaid átadása után 3 munkanapon belül élesítjük. Ha az anyagok vagy a visszajelzések késnek, a határidő ugyanennyivel kitolódik.",
      },
      {
        question: "Mi kell tőlem az induláshoz?",
        answer:
          "A demóhoz elég a kérdéssor öt válasza, az elérhetőséged, és ha van, a mostani weboldalad vagy Facebook-oldalad linkje. A kész oldalhoz a logódat, a képeidet és azokat a szakmai részleteket kérjük, amiket csak te tudsz. A szövegeket mi írjuk.",
      },
      {
        question: "Mi történik, ha nem tetszik a demo?",
        answer:
          "Semmi. Megköszönjük az idődet, és nem fizetsz semmit. Ha csak részletek nem tetszenek, elmondod a hívásban, és azokon változtatunk, mielőtt bármiről döntenél.",
      },
      {
        question: "Van már weboldalam. Át tudjátok tervezni?",
        answer:
          "Igen, meglévő weboldal újratervezését is vállaljuk. A demót ilyenkor a mostani oldalad tartalmából és a kérdéssor válaszaiból készítjük, így össze tudod hasonlítani a kettőt.",
      },
    ],
  },
  {
    title: "Fizetés és szerződés",
    items: [
      {
        question: "Mikor és hogyan kell fizetni?",
        answer:
          "A demóért nem kell fizetni. Ha a demo után megrendeled az oldalt, a szerződés aláírásakor előleget fizetsz, a végszámlát pedig az átadáskor kapod. A számlák fizetési határideje 8 nap.",
      },
      {
        question: "Mennyibe kerül egy weboldal?",
        answer:
          "A Nexen Sites nem ír ki árat, mert a terjedelem cégenként más: egy egyoldalas bemutatkozó oldal és egy többoldalas céges weboldal között nagy a különbség. Előbb megkapod az ingyenes demót, utána írásos ajánlatot adunk a pontos tartalommal és árral.",
      },
      {
        question: "Kié lesz a weboldal?",
        answer:
          "A tiéd. A teljes díj kifizetésével a weboldalhoz írt egyedi kód az ügyfélé lesz, a dizájnra pedig kizárólagos, korlátlan felhasználási jogot kapsz. Nem vagy hozzánk kötve: az oldalt később bárki más is továbbfejlesztheti.",
      },
      {
        question: "Hány módosítást kérhetek?",
        answer:
          "Az ár két módosítási kört tartalmaz a dizájntervre, és kettőt a kész weboldalra. Az ezen felüli módosítás külön ajánlat alapján készül.",
      },
      {
        question: "Mi van, ha menet közben felmondanám a szerződést?",
        answer:
          "Bármikor felmondhatod írásban. Ilyenkor az elvégzett munka szerint számolunk el: a dizájnterv bemutatása előtt a teljes díj 25%-a, a dizájnterv bemutatása után 50%-a, a fejlesztés befejezése után 100%-a fizetendő. A befizetett előleg ebbe beleszámít, a különbözetet visszautaljuk. Ha magánszemélyként, fogyasztóként szerződsz, 14 napon belül indoklás nélkül is felmondhatsz.",
      },
    ],
  },
  {
    title: "Technika és keresők",
    items: [
      {
        question: "Mi az a GEO?",
        answer:
          "A GEO (Generative Engine Optimization) azt jelenti, hogy a weboldalt az AI-keresőkre is felkészítjük. Úgy építjük fel, hogy a ChatGPT, a Gemini, a Perplexity és a Claude megtalálja, megértse és idézni tudja: beengedjük az AI-robotokat, strukturált adatokat adunk meg, és a szövegek egyenes válasszal kezdődnek. Azt senki nem tudja garantálni, hogy egy AI ajánlani fog egy céget, de az esélyét lehet javítani.",
      },
      {
        question: "Mi a különbség az egyedi kód és a WordPress között?",
        answer:
          "A WordPress kész sablonokból és bővítményekből áll össze, sok mindent magad is szerkeszthetsz benne, cserébe a rendszert, a sablont és a bővítményeket rendszeresen frissíteni kell. Az egyedi kódú oldalt nulláról, a cégedre írjuk: csak az kerül bele, amire szükség van, ezért gyors, és nincs benne frissítendő bővítmény. A Nexen Sites egyedi kódból (Next.js) épít.",
      },
      {
        question: "Megtalálnak majd a Google-ben?",
        answer:
          "Minden oldalt keresőbarát szerkezettel, gyors betöltéssel és alap SEO-beállításokkal adunk át, és segítünk rendbe tenni a Google cégprofilodat. A helyezés időbe telik, és sok mindenen múlik, ezért első helyet nem ígérünk, és senkinek nem érdemes elhinni, aki ígér.",
      },
      {
        question: "Landing oldal vagy többoldalas weboldal kell nekem?",
        answer:
          "Ha egy szolgáltatásod van, vagy egy kampányhoz kell oldal, elég egy egyoldalas landing oldal. Ha több szolgáltatást kínálsz, és az ügyfél alaposan utánad néz, mielőtt megkeres, többoldalas céges weboldal kell. A kérdéssor végén megmondjuk, melyiket ajánljuk neked, és miért.",
      },
      {
        question: "Nekem kell megírnom a szövegeket?",
        answer:
          "Nem. A szövegírás minden csomag része. A demóhoz a kérdéssor válaszaiból és a mostani oldaladból dolgozunk, a kész oldalhoz pedig tőled a szakmai ellenőrzést kérjük.",
      },
    ],
  },
  {
    title: "Rólunk és az átadás után",
    items: [
      {
        question: "Ki készít weboldalt kisvállalkozásnak?",
        answer:
          "A Nexen Sites kis- és középvállalkozásoknak és szolgáltatóknak készít egyedi kódú weboldalt az egész országban, online. Előbb ingyenes demo weboldalt kapsz a saját cégedre, és csak akkor fizetsz, ha tetszik. Főleg építőipari, épületgépészeti cégeknek, egészségügyi magánrendelőknek, ügyvédi, könyvelő- és mérnökirodáknak, tanácsadóknak dolgozunk.",
      },
      {
        question: "Csak kecskeméti cégekkel dolgoztok?",
        answer:
          "Nem. A székhelyünk Kecskeméten van, de online dolgozunk, így az ország bármely részéről vállalunk munkát. A demót, a hívást és a szerződés aláírását is online intézzük.",
      },
      {
        question: "Mi történik az átadás után?",
        answer:
          "Az átadástól számított 14 napig díjmentesen kijavítunk minden hibát, ami a mi munkánkból ered. Utána kérhetsz havi karbantartást: frissítés, biztonság, sebesség és kisebb módosítások.",
      },
      {
        question: "Hogyan érlek el titeket?",
        answer:
          "Telefonon a +36 70 576 7845 számon, hétfőtől péntekig 9 és 18 óra között, vagy e-mailben a verdung.imi@gmail.com címen. A kapcsolattartó Verdung Imre.",
      },
    ],
  },
];

export const ALL_FAQ: FaqItem[] = FAQ_GROUPS.flatMap((group) => group.items);

/** Short list for the home page and /demo. */
export const HOME_FAQ: FaqItem[] = [
  FAQ_GROUPS[0].items[0],
  FAQ_GROUPS[0].items[1],
  FAQ_GROUPS[1].items[0],
  FAQ_GROUPS[1].items[1],
  FAQ_GROUPS[2].items[0],
  FAQ_GROUPS[2].items[1],
];

export interface Comparison {
  caption: string;
  columns: [string, string, string];
  rows: [string, string, string][];
}

export const LANDING_VS_MULTI: Comparison = {
  caption: "Landing oldal vagy többoldalas weboldal",
  columns: ["", "Landing oldal", "Többoldalas weboldal"],
  rows: [
    ["Mire való", "Egy szolgáltatás vagy kampány, egyetlen cél", "A cég teljes bemutatása, több szolgáltatással"],
    ["Terjedelem", "Egy hosszú, jól tagolt oldal", "5–8 aloldal"],
    ["Kinek jó", "Ha hirdetsz, vagy egy fő szolgáltatásod van", "Ha az ügyfél alaposan utánad néz, mielőtt megkeres"],
    ["Keresőben", "Egy témára tud jól megjelenni", "Szolgáltatásonként külön oldal jelenhet meg"],
    ["Nálunk", "Bemutatkozó oldal", "Céges weboldal vagy Növekedési csomag"],
  ],
};

export const CUSTOM_VS_WORDPRESS: Comparison = {
  caption: "Egyedi kód vagy WordPress",
  columns: ["", "Egyedi kód (így építünk)", "WordPress sablonnal"],
  rows: [
    ["Megjelenés", "Nulláról, a cégedre tervezve", "Kész sablonból indul, amit más oldalak is használnak"],
    ["Sebesség", "Csak az kerül bele, amire az oldalnak szüksége van", "A sablon és a bővítmények plusz kódot töltenek be"],
    ["Karbantartás", "Nincs benne rendszeresen frissítendő bővítmény", "A rendszert, a sablont és a bővítményeket frissíteni kell"],
    ["Szerkesztés", "Az átadáskor megmutatjuk az adminfelületet, a nagyobb változtatást fejlesztő végzi", "Sok mindent magad is átírhatsz az adminfelületen"],
    ["Mikor jó választás", "Ha az oldal dolga az ügyfélszerzés, és számít a sebesség meg az egyedi megjelenés", "Ha gyakran töltenél fel magad sokféle tartalmat"],
  ],
};

export interface Industry {
  title: string;
  text: string;
}

export const INDUSTRIES: Industry[] = [
  {
    title: "Építőipar és felújítás",
    text: "Az oldal megmutatja a korábbi munkáidat, és egyszerűen elviszi a látogatót a felmérés vagy az ajánlat kéréséig.",
  },
  {
    title: "Épületgépészet, klíma, hőszivattyú",
    text: "Az ügyfél a rendszerekről és a telepítés menetéről kérdez. Ha az oldal előre válaszol, a megkeresők már tudják, mit szeretnének.",
  },
  {
    title: "Egészségügyi magánrendelések",
    text: "A páciens bizalmat és gyors időpontot keres. Az oldal bemutatja a rendelést és a szakembereket, és pár lépésben elvisz a foglalásig.",
  },
  {
    title: "Ügyvédi, könyvelő- és mérnökirodák",
    text: "Itt a szakértelem maga a szolgáltatás. Az oldal érthetően leírja a szakterületeket, és könnyű első kapcsolatfelvételt kínál.",
  },
  {
    title: "Tanácsadók",
    text: "A döntéshozó több ajánlatot vet össze. Az oldal már az első beszélgetés előtt megmutatja, hogyan dolgozol, és milyen problémát oldasz meg.",
  },
];

/** What the client gets in the GEO service (the /geo page). */
export const GEO_ITEMS: Benefit[] = [
  {
    title: "AI-robotok beengedése és ellenőrzése",
    text: "A robots.txt-ben név szerint engedélyezzük az AI-keresők robotjait, és megnézzük, hogy a tárhely tűzfala vagy botvédelme sem tiltja ki őket.",
  },
  {
    title: "Strukturált adatok",
    text: "Gépileg olvasható formában is megadjuk, ki vagy, mit csinálsz, hol dolgozol és hogyan érhetnek el, így az AI-nak nem kell találgatnia.",
  },
  {
    title: "Válasz-első szövegek és GYIK",
    text: "Minden oldal egyenes válasszal kezdődik arra a kérdésre, amiről szól, és külön kérdés-válasz rész felel arra, amit az emberek az AI-tól kérdeznek.",
  },
  {
    title: "Egységes cégadatok",
    text: "A cégnév, a cím és a telefonszám szóról szóra ugyanaz lesz a weboldalon, a Google cégprofilban és a közösségi oldalakon.",
  },
  {
    title: "Véleménygyűjtő oldal",
    text: "Kapsz egy rövid linket, amit elküldhetsz az ügyfeleidnek, és ami egyenesen a Google-értékelés írásához viszi őket.",
  },
  {
    title: "Kérhető havi ellenőrzés",
    text: "Havonta megnézzük, megjelenik-e a céged az AI-válaszokban a fontos kérdéseidre, és táblázatban vezetjük az eredményt.",
  },
];

export const AI_ENGINES = ["ChatGPT", "Gemini", "Perplexity", "Claude"] as const;
