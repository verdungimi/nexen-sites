// Single source of the blog posts. The list page, the post pages and the sitemap all read from here.
// `content` is plain HTML (p, h2, h3, ul/li, strong, a). Styling comes from `.prose-nexen`.

export interface BlogPost {
  slug: string;
  title: string;
  /** Short summary for the list page and the meta description */
  excerpt: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  readMinutes: number;
  keywords: string[];
  content: string;
}

const POSTS: Omit<BlogPost, "readMinutes">[] = [
  {
    slug: "3-napos-weboldal-keszites-hogyan-mukodik",
    title: "3 napos weboldal-készítés: így néz ki a folyamat a gyakorlatban",
    excerpt:
      "Konzultáció, szerkezet és szöveg, design, első élő változat, jóváhagyás. Megmutatjuk, mi történik a 3 munkanap alatt, és mi kell hozzá tőled.",
    date: "2024-12-15",
    keywords: ["3 napos weboldal", "weboldal készítés 3 nap alatt", "weboldal készítés folyamata", "céges weboldal"],
    content: `
<p>Amikor azt mondjuk, hogy az első működő változatot 3 munkanap alatt látod, sokan gyanakodni kezdenek: ennyi idő alatt csak sablon készülhet. A gyanú érthető, mert egy céges weboldal sok helyen hetekig vagy hónapokig készül. Ebben az írásban megmutatjuk, mi történik pontosan a 3 munkanap alatt, és miért nem a minőségből vesszük el az időt.</p>

<h2>Miért tart máshol hetekig?</h2>
<p>A legtöbb weboldalprojekt nem a munkától lassú, hanem a várakozástól. Hetekig készül a szöveg, mert senki nem felel érte. Napokig áll a design, mert nem dőlt el, mit kell mondania az oldalnak. A megrendelő és a kivitelező e-mailekben egyeztet, és minden kör újabb hetet visz el.</p>
<p>Mi úgy kerüljük ezt el, hogy a döntéseket előre hozzuk. A konzultáción összegyűjtünk mindent, ami a munkához kell, a szövegeket pedig mi írjuk. Így a 3 munkanap tényleg munkával telik, nem várakozással.</p>

<h2>A folyamat lépései</h2>

<h3>Indulás előtt: konzultáció</h3>
<p>Online beszélgetünk a cégedről, az ügyfeleidről és arról, mit csinál most a weboldalad, és mit nem. Megnézzük, milyen kérdésekkel keresnek meg a jó ügyfelek, és mi tartja vissza őket az ajánlatkéréstől. Ha kiderül, hogy nem vagyunk jó páros, ezt ott elmondjuk. Ha igen, írásos ajánlatot kapsz a terjedelemről, és megrendeléskor előleget fizetsz.</p>
<p>A 3 munkanap akkor indul, amikor a konzultáció megvolt, és megérkeztek tőled a szükséges anyagok: a logód, a képeid, ha vannak, és azok a szakmai részletek, amelyeket csak te tudsz.</p>

<h3>1. munkanap: szerkezet és szöveg</h3>
<p>A konzultáción elhangzottakból megírjuk az oldal szerkezetét és szövegeit. Itt dől el, milyen sorrendben kap választ a látogató a kérdéseire: mit csinálsz, kinek, miben vagy más, miért bízhat benned, és hogyan kérhet ajánlatot. A szöveget a te szakmai nyelveden írjuk, de úgy, hogy egy laikus ügyfél is értse.</p>

<h3>2. munkanap: design és fejlesztés</h3>
<p>A kész szerkezetre megtervezzük és felépítjük az oldalt, a céged arculatához igazítva. A telefonos nézet ugyanannyi figyelmet kap, mint az asztali, mert sok ügyfeled először telefonon találkozik az oldaladdal. Közben arra is figyelünk, hogy az oldal gyorsan betöltsön, és az ajánlatkérés minden képernyőn kényelmes legyen.</p>

<h3>3. munkanap: első élő változat</h3>
<p>Megkapod az élő előnézeti linket. Végigkattintod telefonon és gépen, és elmondod, mit módosítsunk. Két javítási kör benne van, így a visszajelzéseid alapján addig finomítjuk a szövegeket és a részleteket, amíg az oldal azt mondja, amit mondania kell.</p>

<h3>Jóváhagyás, élesítés, végösszeg</h3>
<p>Amikor elégedett vagy, jóváhagyod az oldalt. Ekkor élesítjük a saját domaineden, és ekkor fizeted ki a végösszeg hátralévő részét. A maradékot tehát olyan munkáért fizeted, amelyet már láttál és elfogadtál. Ha szeretnéd, havi gondozással ezután is mi figyelünk az oldalra.</p>

<h2>Mi kell ehhez tőled?</h2>
<p>A tempó nemcsak rajtunk múlik. Három dolog segít a legtöbbet:</p>
<ul>
<li><strong>Az anyagok időben.</strong> A logó, a képek és a szakmai részletek a konzultáció után minél hamarabb érkezzenek meg.</li>
<li><strong>Összefoglalt visszajelzés.</strong> Az első változatnál őszinte, konkrét észrevételeket kérünk, lehetőleg egy listában, nem napokon át részletekben.</li>
<li><strong>Egy döntéshozó.</strong> Ha többen szólnak bele egymástól függetlenül, a javítási körök elhúzódnak.</li>
</ul>
<p>Ha ezek megvannak, a 3 munkanap tartható, és a javítási körök sem húzódnak el.</p>

<h2>Mit jelent a 3 munkanap, és mit nem?</h2>
<p>A 3 munkanap az első működő, élő változatig tart. A javítási körök és az élesítés ezután jönnek, a te visszajelzéseid tempójában. Ha egy projekthez különleges funkció kell, például webáruház, többnyelvűség vagy egy külső rendszerrel való összekötés, az ütemezést a konzultáción külön megbeszéljük.</p>

<p>Ha szeretnéd tudni, hogyan nézne ki mindez a te cégednél, <a href="/book">foglalj konzultációt</a>. Előtte a teljes folyamatot is <a href="/folyamat">végignézheted</a>.</p>
`,
  },
  {
    slug: "landing-page-vagy-tobb-oldalas-weboldal-melyiket-valasszam",
    title: "Landing page vagy több oldalas weboldal: melyiket válaszd?",
    excerpt:
      "Egyetlen oldal egyetlen céllal, vagy teljes céges bemutatkozás több aloldallal? Megmutatjuk, mikor melyik hoz több ajánlatkérést egy szolgáltató cégnek.",
    date: "2024-12-10",
    keywords: ["landing page", "több oldalas weboldal", "egyoldalas weboldal", "céges weboldal", "weboldal tervezés"],
    content: `
<p>Egy új weboldalnál az egyik első kérdés, hogy elég-e egyetlen, hosszú oldal, vagy több aloldal kell. A jó válasz nem attól függ, melyik a divatosabb, hanem attól, hogyan dönt az ügyfeled, mielőtt felhív vagy ajánlatot kér.</p>

<h2>Mi a landing page?</h2>
<p>A landing page egyetlen, jól tagolt oldal, amelynek egy dolga van: rávenni a látogatót egy konkrét lépésre. Szolgáltató cégnél ez szinte mindig az ajánlatkérés, a visszahívás kérése vagy az időpontfoglalás. Nincs menü, amelyben elkalandozhat a látogató, minden szakasz ugyanabba az irányba viszi.</p>

<h2>Mikor elég egy landing page?</h2>
<ul>
<li>Egy fő szolgáltatásod van, vagy egyetlen szolgáltatást szeretnél kiemelni.</li>
<li>Hirdetésből érkeznek a látogatók, és pontosan azt kell látniuk, amire a hirdetésben kattintottak.</li>
<li>Rövid kampányt indítasz, például egy szezonális ajánlatra.</li>
<li>Gyorsan kell egy ajánlatkérésre tervezett oldal, amíg a teljes weboldal elkészül.</li>
</ul>

<h2>Mikor kell több oldalas weboldal?</h2>
<ul>
<li>Több, egymástól eltérő szolgáltatásod van, és mindegyiknek más az ügyfele.</li>
<li>Az ügyfeleid alaposan körülnéznek, mielőtt döntenek: referenciákat, csapatot, folyamatot keresnek.</li>
<li>Fontos, hogy a Google-ben szolgáltatásonként külön is megtaláljanak.</li>
<li>Hosszú távú, bizalomépítő bemutatkozásra van szükséged, nem csak egy kampányra.</li>
</ul>

<h2>Egy tipikus helyzet</h2>
<p>Vegyünk egy épületgépészeti céget, amely hőszivattyút, klímát és kazáncserét is vállal. Ha mindent egyetlen oldalra zsúfol, rosszul jár: aki hőszivattyút keres, más kérdésekre vár választ, mint aki csak egy klímát szereltetne fel. Ugyanez a cég viszont egy tavaszi klímakampányhoz jól használhat egy külön landing page-et, amely csak erről szól.</p>

<h2>Nem kell mindig választani</h2>
<p>A két megoldás jól kiegészíti egymást. Sok szolgáltató cégnek az a legjobb, ha van egy több oldalas céges weboldala, mellette pedig külön landing oldalak a hirdetett szolgáltatásokhoz. Így a hirdetésből érkező látogató azt látja, amire kattintott, a többiek pedig a teljes bemutatkozást találják.</p>

<h2>Terjedelem és időzítés</h2>
<p>Egy landing page kisebb terjedelmű, ezért kevesebb szöveget, egyeztetést és javítást igényel. Az első működő változatot mindkét esetben 3 munkanap alatt látod, a több oldalas weboldalnál viszont a konzultáción több döntést kell előre meghozni. Hogy nálad melyik éri meg jobban, azt az ügyfeleid döntési folyamata mondja meg, nem az oldalak száma.</p>

<p>Ha nem vagy biztos benne, melyik illik a cégedhez, <a href="/book">beszéljük meg egy konzultáción</a>. A lehetséges terjedelmeket a <a href="/packages">szolgáltatásaink</a> között is áttekintheted.</p>
`,
  },
  {
    slug: "seo-optimalizalas-modern-weboldalhoz-tippek",
    title: "SEO-alapok céges weboldalhoz: amire tényleg érdemes figyelni",
    excerpt:
      "Gyors betöltés, jó mobilnézet, átlátható szerkezet, érthető szöveg és pontos Google cégprofil. Ezek az SEO-alapok számítanak egy szolgáltató cégnél, trükkök nélkül.",
    date: "2024-12-05",
    keywords: ["SEO optimalizálás", "weboldal SEO", "keresőoptimalizálás", "helyi SEO", "Google cégprofil"],
    content: `
<p>A keresőoptimalizálásról (SEO) sok a félreértés. Van, aki szerint néhány kulcsszó elég, és van, aki gyors, garantált első helyet ígér. Egyik sem igaz. Ebben az írásban azokat az alapokat vesszük sorra, amelyek egy szolgáltató cég weboldalánál valóban számítanak.</p>

<h2>Mit jelent az SEO egy szolgáltató cégnek?</h2>
<p>Azt, hogy a weboldalad úgy épül fel, hogy a Google megértse, mit csinálsz és hol, és azoknak mutassa meg, akik éppen ilyen szolgáltatást keresnek. Egy könyvelőirodának vagy egy tetőfedő cégnek nem országos forgalom kell, hanem az, hogy a környékbeli, valódi érdeklődők megtalálják.</p>

<h2>Technikai alapok</h2>

<h3>Gyors betöltés</h3>
<p>A lassú oldalt a látogatók hamar elhagyják, és a Google is figyeli, milyen élményt ad egy oldal. Optimalizált képek, felesleges elemek nélküli felépítés és megbízható tárhely: ezek nem látszanak, de minden látogatásnál számítanak.</p>

<h3>Mobilnézet</h3>
<p>A Google elsősorban az oldalad mobilos változata alapján értékel. Ha telefonon nehezen olvasható, vagy nehéz rajta ajánlatot kérni, az a helyezéseden és az érdeklődők számán is meglátszik.</p>

<h3>Átlátható szerkezet</h3>
<p>Minden fő szolgáltatásnak legyen saját oldala, érthető címmel és világos címsorokkal. Így a látogató és a Google is könnyen eligazodik, és egy konkrét keresésre a konkrét szolgáltatás oldala jelenhet meg.</p>

<h2>Tartalom</h2>

<h3>Az ügyfeleid szavaival</h3>
<p>A szakmai nyelv és az ügyfél nyelve gyakran eltér. Lehet, hogy te hőtermelő berendezés cseréjéről beszélsz, az ügyfeled viszont kazáncserét keres. Érdemes azokra a kifejezésekre építeni, amelyekkel a te ügyfeleid keresnek, és amelyekben reálisan esélyed van.</p>

<h3>Érdemi válaszok</h3>
<p>A Google azt az oldalt részesíti előnyben, amely válaszol a kereső kérdésére. Mit csinálsz pontosan, milyen területen, mennyi idő alatt, hogyan zajlik a munka, mire számíthat az ügyfél? Ha ezekre világosan válaszolsz, az a keresőnek és az érdeklődőnek is segít.</p>

<h2>Helyi láthatóság</h2>
<p>Szolgáltató cégeknél a helyi keresésekben a Google cégprofil gyakran legalább annyit számít, mint maga a weboldal. Legyen pontos a neved, a címed, a telefonszámod és a nyitvatartásod, egyezzenek ezek a weboldaladon szereplő adatokkal, és kérj értékelést az elégedett ügyfeleidtől.</p>

<h2>Hivatkozások</h2>
<p>Ha más, a szakmádhoz kapcsolódó oldalak linkelnek rád, például szakmai szövetségek, beszállítók vagy helyi cégkatalógusok, az növeli az oldalad hitelességét. Itt a minőség számít, nem a mennyiség: a megvásárolt linkcsomagok többet árthatnak, mint amennyit használnak.</p>

<h2>Mennyi idő alatt látszik az eredmény?</h2>
<p>A keresőoptimalizálás hosszú távú munka. A technikai alapokat és az átlátható szerkezetet az első naptól beépíthetjük, de a helyezések javulása hetekben és hónapokban mérhető, nem napokban. Ha valaki ennél gyorsabb, garantált eredményt ígér, érdemes megkérdezni, pontosan hogyan.</p>

<p>Minden oldalt keresőbarát szerkezettel, gyors betöltéssel és alapszintű SEO-beállításokkal adunk át, és segítünk rendbe tenni a Google cégprofilodat. Ha szeretnéd átnézni, hol tart most az oldalad, <a href="/book">foglalj konzultációt</a>.</p>
`,
  },
  {
    slug: "mobilbarat-weboldal-keszites-mi-a-fontos",
    title: "Mobilbarát weboldal: mitől kérnek ajánlatot telefonról is?",
    excerpt:
      "Sok ügyfeled telefonon találkozik először a céged oldalával. Mitől lesz egy weboldal valóban kényelmes mobilon, és miért múlik ezen az ajánlatkérések száma?",
    date: "2024-11-28",
    keywords: ["mobilbarát weboldal", "reszponzív weboldal", "mobil optimalizálás", "weboldal készítés"],
    content: `
<p>Egy leendő ügyfél gyakran munka közben, két hívás között vagy este otthon keres rá a cégedre, és ilyenkor a telefonja van a kezében. Ha az oldalad ott nehezen olvasható, lassan tölt be, vagy nem találja rajta a telefonszámodat, továbblép a következő találatra. A mobilbarát weboldal ezért nem technikai részlet, hanem ügyfélszerzési kérdés.</p>

<h2>Miért számít ennyire?</h2>
<ul>
<li>Sok ügyfeled először telefonon néz meg, és ez alapján dönti el, felhív-e.</li>
<li>A Google elsősorban a mobilos változat alapján értékeli az oldaladat.</li>
<li>Telefonon kevesebb a türelem: amit a látogató nem talál meg azonnal, azt nem keresgéli.</li>
<li>Ha telefonról is kényelmes ajánlatot kérni, több érdeklődő jut el a megkeresésig.</li>
</ul>

<h2>Nem elég, ha egymás alá rendeződik</h2>
<p>Sok régi oldal technikailag reszponzív, vagyis kisebb képernyőn egymás alá rendezi az elemeket. Ettől még lehet kényelmetlen: apró betűk, egymáshoz túl közeli gombok, hosszú bevezetők, amelyeken át kell görgetni. A mobilbarát oldal nem az asztali változat összenyomott mása, hanem telefonra végiggondolt felület.</p>

<h2>Mire figyelünk telefonos nézetben?</h2>

<h3>Olvasható szöveg</h3>
<p>Elég nagy betűméret, rövid bekezdések, jó kontraszt. A látogatónak ne kelljen nagyítania ahhoz, hogy megértse, mit kínálsz.</p>

<h3>Kéznél lévő kapcsolat</h3>
<p>A telefonszám legyen egy érintéssel hívható, az ajánlatkérés vagy az időpontfoglalás pedig mindig könnyen elérhető. Ha egy telefonszámért a lap aljára kell görgetni, sokan nem teszik meg.</p>

<h3>Kényelmes űrlapok</h3>
<p>Csak azt kérdezd, ami tényleg kell. A mezők legyenek elég nagyok, és a telefon a megfelelő billentyűzetet hozza fel: számokat a telefonszámhoz, @ jelet az e-mail-címhez.</p>

<h3>Elég nagy gombok</h3>
<p>A gomboknak és a linkeknek elég nagynak és egymástól elég távol kell lenniük ahhoz, hogy a látogató ne koppintson mellé.</p>

<h3>Gyors betöltés mobilneten</h3>
<p>Mobilneten minden felesleges nagy kép és külső szkript érezhetően lassít. Az optimalizált képek és a könnyű felépítés itt térülnek meg igazán.</p>

<h2>A telefonos nézet nálunk nem utólagos</h2>
<p>A telefonos nézetet ugyanolyan gondosan tervezzük, mint az asztalit, és az első élő változatot mindkettőn végignézed. Így már a javítási körök előtt kiderül, ha valami telefonon nem működik jól.</p>

<h2>Egy gyors önellenőrzés</h2>
<p>Nyisd meg most a saját oldaladat telefonon, és próbálj ki három dolgot:</p>
<ul>
<li>Érted-e néhány másodperc alatt, mit csinál a cég, és kinek?</li>
<li>Fel tudod-e hívni a céget egyetlen érintéssel?</li>
<li>El tudod-e küldeni az ajánlatkérést bosszankodás nélkül?</li>
</ul>
<p>Ha bármelyik nehézkes, ott most érdeklődőket veszítesz.</p>

<p>Ha szeretnéd, a <a href="/book">konzultáción</a> közösen is átnézzük a mostani oldaladat telefonon.</p>
`,
  },
  {
    slug: "premium-weboldal-keszites-aron-belul",
    title: "Mitől ér meg egy weboldal annyit, és mit kérdezz az árajánlatban?",
    excerpt:
      "Két weboldal-ajánlat között ritkán a design a valódi különbség. Megmutatjuk, mitől lesz egy weboldal befektetés, és mit érdemes megkérdezni, mielőtt döntesz.",
    date: "2024-11-20",
    keywords: ["prémium weboldal", "weboldal árajánlat", "weboldal készítés", "weboldal megtérülése", "céges weboldal"],
    content: `
<p>Ha két-három ajánlatot kérsz egy weboldalra, jó eséllyel nagyon eltérő összegeket kapsz. Első ránézésre mindegyik ugyanazt ígéri: szép, mobilbarát, keresőbarát oldalt. A különbség a sorok között van, és ezt érdemes előre kibontani. Egy rosszul választott weboldal ugyanis nem a számlán drága, hanem az elmaradt megkeresésekben.</p>

<h2>A weboldal befektetés, nem költség</h2>
<p>Egy bejáratott szolgáltató cégnél egyetlen új megbízás értéke gyakran százezrekben vagy milliókban mérhető. Ha egy weboldal évente csak néhány jó ügyféllel többet hoz, az már többszörösen megtérülhet. Ha viszont jól néz ki, de senki nem kér rajta ajánlatot, akkor bármennyibe került, kidobott pénz. A főoldali <a href="/#kalkulator">megtérülés-kalkulátorral</a> a saját számaiddal is megbecsülheted, mennyit ér neked egy jobb oldal.</p>

<h2>Mitől lesz értéke egy weboldalnak?</h2>
<ul>
<li><strong>Átgondolt szöveg.</strong> A látogató azért kér ajánlatot, mert érti, mit kap, és bízik benned. Ezt a szöveg éri el, nem a díszítés.</li>
<li><strong>Az ügyfeleid döntésére épülő szerkezet.</strong> Milyen kérdéseket tesz fel egy ügyfél, mielőtt felhív, és milyen sorrendben kap rájuk választ?</li>
<li><strong>Egyszerű ajánlatkérés.</strong> Kevés, jól megválasztott mező, és ha kell, szűrőkérdések, hogy a komoly érdeklődők jussanak el hozzád.</li>
<li><strong>Mérés.</strong> Ha nem látod, honnan jönnek az érdeklődők, azt sem tudod, mi működik.</li>
<li><strong>Gondozás az átadás után.</strong> Frissítések, biztonsági figyelés és kisebb módosítások, hogy az oldal egy év múlva is ugyanúgy dolgozzon.</li>
</ul>

<h2>Mit kérdezz az árajánlatban?</h2>
<p>Ezekre a kérdésekre érdemes írásban választ kérni, mielőtt döntesz:</p>
<ul>
<li>Ki írja a szövegeket, és mire épülnek?</li>
<li>Hány aloldal és milyen funkciók tartoznak bele pontosan?</li>
<li>Hány javítási kör van benne, és mi számít külön munkának?</li>
<li>Mikor látod az első működő változatot, és mikor kerül élesbe az oldal?</li>
<li>Hogyan fizetsz: mekkora az előleg, és mikor esedékes a többi?</li>
<li>Kié lesz a kész oldal, és hozzáférsz-e mindenhez: a domainhez, a tárhelyhez, a méréshez?</li>
<li>Be lesz-e állítva a mérés, hogy lásd, honnan jönnek az érdeklődők?</li>
<li>Mi történik az átadás után, ha módosítani kell valamit?</li>
</ul>

<h2>Amikor érdemes óvatosnak lenni</h2>
<ul>
<li>Ha az ajánlatban csak annyi áll, hogy „weboldal készítése”, részletezés nélkül.</li>
<li>Ha a szövegírást teljesen rád hagyják, de ezt előre nem mondják ki.</li>
<li>Ha garantált első helyet ígérnek a Google-ben.</li>
<li>Ha a teljes összeget előre kérik, és nincs leírva, mit kapsz és mikor.</li>
</ul>

<h2>Hogyan adunk mi ajánlatot?</h2>
<p>Árat nem táblázatból adunk, hanem a konzultáció után, írásos ajánlatban, mert egy bemutatkozó oldal és egy többoldalas céges weboldal terjedelme nagyon eltér. Az ajánlatban szerepel, mit kapsz, mikor, és hogyan fizetsz: megrendeléskor előleget, a végösszeg hátralévő részét pedig akkor, amikor az elkészült oldalt jóváhagytad. Két javítási kör minden esetben benne van.</p>

<p>Ha szeretnél ilyen ajánlatot a saját cégedre, <a href="/book">foglalj konzultációt</a>.</p>
`,
  },
  {
    slug: "weboldal-keszites-budapest-tippek-es-trendek",
    title: "Weboldal-készítés budapesti cégeknek: mi működik a helyi piacon?",
    excerpt:
      "Nagy verseny, sok hasonló ajánlat, gyorsan döntő ügyfelek. Gyakorlati tanácsok budapesti szolgáltató cégeknek, hogy a weboldaluk kiemelkedjen a helyi keresésekben.",
    date: "2024-11-15",
    keywords: ["weboldal készítés Budapest", "helyi SEO", "budapesti cégek weboldala", "Google cégprofil", "céges weboldal"],
    content: `
<p>Budapesten szinte minden szolgáltatásért tucatnyi cég versenyez ugyanazokért az ügyfelekért. Aki klímaszerelőt, fogorvost vagy könyvelőt keres, pár perc alatt több oldalt is megnyit, és gyorsan dönt: kit hív fel, és melyik oldalt zárja be. Ebben a helyzetben a weboldalnak nem elég léteznie, ki is kell emelkednie.</p>

<h2>A budapesti piac sajátosságai</h2>
<p>A nagy verseny miatt a látogató ritkán olvas végig egy oldalt. Már az első képernyőn el kell dőlnie, hogy jó helyen jár-e: mit csinálsz, melyik kerületekben vagy környéken dolgozol, és miért érdemes téged választania. Az általános szövegek, amelyek bármelyik cégre igazak lehetnének, itt különösen gyengén teljesítenek.</p>

<h2>Helyi keresés</h2>
<p>A helyi keresésekben, például „villanyszerelő XIII. kerület” vagy „könyvelő Buda”, a Google cégprofil és a weboldal együtt dolgozik. Érdemes:</p>
<ul>
<li>pontosan megadni, mely kerületekben vagy településeken vállalsz munkát,</li>
<li>a Google cégprofilt teljesen kitölteni, képekkel és friss adatokkal,</li>
<li>a cégnevet, a címet és a telefonszámot mindenhol ugyanúgy feltüntetni,</li>
<li>rendszeresen értékelést kérni az elégedett ügyfelektől.</li>
</ul>

<h2>Konkrét, magyar nyelvű tartalom</h2>
<p>A helyi ügyfél a saját kérdéseire keres választ. Mennyi idő alatt tudsz kijönni, vállalsz-e sürgős munkát, hogyan zajlik az első egyeztetés, milyen hasonló munkáid voltak már? A konkrét válaszok bizalmat építenek, és a keresőben is segítenek.</p>

<h2>Mi működik most?</h2>
<p>A divatos megoldásoknál többet érnek azok az alapok, amelyekre az ügyfél döntése épül. Jól teljesítenek azok az oldalak, amelyek:</p>
<ul>
<li>tiszták és könnyen átláthatók, felesleges díszítés nélkül,</li>
<li>gyorsan betöltenek, mobilneten is,</li>
<li>telefonon ugyanolyan kényelmesek, mint gépen,</li>
<li>egyértelmű, egy lépésben elérhető ajánlatkérést kínálnak,</li>
<li>valódi munkákat és valódi folyamatot mutatnak be.</li>
</ul>

<h2>Budapesti oldalhoz nem kell budapesti stúdió</h2>
<p>Mi Kecskemétről dolgozunk, de a konzultáció online zajlik, így budapesti cégekkel ugyanúgy dolgozunk, mint az ország bármely más részéről érkezőkkel. A helyi piacot a konzultáción a te ügyfeleiden keresztül ismerjük meg: kik ők, mit keresnek, és mi alapján választanak.</p>

<p>Budapesti cégként szeretnéd, hogy az oldalad kiemelkedjen a helyi versenyben? <a href="/book">Foglalj konzultációt</a>, és megnézzük, hol veszítesz most érdeklődőket.</p>
`,
  },
];

/** Rough reading time at ~200 words per minute, never less than 1 minute. */
function estimateReadMinutes(html: string): number {
  const words = html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const BLOG_POSTS: BlogPost[] = POSTS.map((post) => ({
  ...post,
  readMinutes: estimateReadMinutes(post.content),
})).sort((a, b) => b.date.localeCompare(a.date));

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/** "2024. december 15." */
export function formatPostDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
