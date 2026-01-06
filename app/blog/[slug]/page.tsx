import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FinAIHero from "@/components/FinAIHero";

const blogPosts: Record<string, any> = {
  "10-napos-weboldal-keszites-hogyan-mukodik": {
    title: "10 Napos Weboldal Készítés: Hogyan Működik a Gyors Szállítási Rendszer?",
    date: "2024-12-15",
    readTime: "8 perc",
    category: "Weboldal Fejlesztés",
    keywords: ["10 napos weboldal", "weboldal készítés", "gyors weboldal fejlesztés", "prémium weboldal"],
    content: `
      <p>A <strong>10 napos weboldal készítés</strong> már nem csak egy ígéret, hanem egy bizonyított, működő rendszer. De hogyan működik ez pontosan? Ebben a cikkben részletesen bemutatjuk a folyamatot.</p>
      
      <h2>Miért 10 nap a határidő?</h2>
      <p>A <strong>10 napos weboldal fejlesztés</strong> nem véletlenül lett a standard. Ez az időszak optimális egy prémium minőségű, de hatékonyan elkészíthető weboldalhoz. A gyorsaság nem a minőség rovására megy, hanem egy jól kidolgozott folyamat eredménye.</p>
      
      <h2>A folyamat lépései</h2>
      <h3>1. nap: Kickoff és anyaggyűjtés</h3>
      <p>Az első napon összegyűjtjük az igényeket, begyűjtjük a márkaanyagokat (logo, színek, képek), és felállítjuk a projekt infrastruktúráját. Ez a lépés kritikus a hatékonysághoz.</p>
      
      <h3>2-3. nap: Vázlat és szöveg</h3>
      <p>Először a struktúra és a tartalom. Vázlatokat készítünk és finomhangoljuk a szövegeket, mielőtt a design elkezdődne. Ez biztosítja, hogy a <strong>weboldal készítés</strong> során minden rendben legyen.</p>
      
      <h3>4-6. nap: Vizuális design</h3>
      <p>Vizuális design fázis egy javítási körrel, hogy tökéletesítsük a megjelenést és az érzést. Modern, <strong>prémium weboldal</strong> design, amely kiemelkedik.</p>
      
      <h3>7-9. nap: Fejlesztés és tesztelés</h3>
      <p>Fejlesztés, tesztelés különböző eszközökön, és végső finomhangolás, hogy minden tökéletesen működjön. A <strong>mobilbarát weboldal</strong> készítés itt kap külön figyelmet.</p>
      
      <h3>10. nap: Indítás és átadás</h3>
      <p>Végső ellenőrzés, telepítés és átadás. A weboldalad élő lesz, időben, minden alkalommal.</p>
      
      <h2>Az eredmény</h2>
      <p>Az eredmény egy <strong>prémium minőségű weboldal</strong>, amely 10 nap alatt készül el, de nem éri le a minőséget. Ez a rendszer több száz sikeres projekten keresztül lett finomhangolva, és folyamatosan fejlesztjük.</p>
      
      <p>Ha szeretnél többet megtudni a <strong>10 napos weboldal készítésről</strong>, vagy szeretnél egy prémium weboldalt, <a href="/book" class="text-[#7C5CFF] hover:text-[#50AEDF] underline">foglalj időpontot</a> velünk!</p>
    `
  },
  "landing-page-vagy-tobb-oldalas-weboldal-melyiket-valasszam": {
    title: "Landing Page vagy Több Oldalas Weboldal: Melyiket Válasszam?",
    date: "2024-12-10",
    readTime: "6 perc",
    category: "Weboldal Tervezés",
    keywords: ["landing page", "weboldal tervezés", "egyoldalas weboldal", "weboldal struktúra"],
    content: `
      <p>A <strong>landing page</strong> és a több oldalas weboldal közötti választás gyakran nehéz lehet. Ebben a cikkben segítünk eldönteni, melyik felel meg jobban a vállalkozásodnak.</p>
      
      <h2>Mi a landing page?</h2>
      <p>A <strong>landing page</strong> egy egyoldalas weboldal, amely egyetlen célra koncentrál: a látogatók meggyőzése egy konkrét cselekvésre. Ez lehet egy termék megvásárlása, szolgáltatás igénylése, vagy időpontfoglalás.</p>
      
      <h2>Mikor válassz landing page-et?</h2>
      <p>A <strong>landing page</strong> ideális, ha:</p>
      <ul>
        <li>Egyetlen terméket vagy szolgáltatást szeretnél bemutatni</li>
        <li>Rövid távú kampányokat indítasz</li>
        <li>Gyors eredményt szeretnél</li>
        <li>Költséghatékony megoldást keresel</li>
      </ul>
      
      <h2>Mikor válassz több oldalas weboldalt?</h2>
      <p>A több oldalas <strong>weboldal készítés</strong> jobb választás, ha:</p>
      <ul>
        <li>Több szolgáltatást vagy terméket szeretnél bemutatni</li>
        <li>Hosszú távú online jelenlétet szeretnél</li>
        <li>SEO optimalizálás fontos számodra</li>
        <li>Részletes információt szeretnél közölni</li>
      </ul>
      
      <h2>Az ár és az idő</h2>
      <p>A <strong>landing page</strong> általában gyorsabban készül el és olcsóbb, mint a több oldalas weboldal. A <strong>10 napos weboldal készítés</strong> mindkét esetben lehetséges, de a landing page esetén még gyorsabb lehet.</p>
      
      <p>Ha bizonytalan vagy, hogy a <strong>landing page</strong> vagy a több oldalas <strong>weboldal</strong> felel meg jobban, <a href="/book" class="text-[#7C5CFF] hover:text-[#50AEDF] underline">beszéljük meg</a> együtt!</p>
    `
  },
  "seo-optimalizalas-modern-weboldalhoz-tippek": {
    title: "SEO Optimalizálás Modern Weboldalhoz: Alapvető Tippek és Best Practices",
    date: "2024-12-05",
    readTime: "10 perc",
    category: "SEO",
    keywords: ["SEO optimalizálás", "weboldal SEO", "keresőoptimalizálás", "modern weboldal SEO"],
    content: `
      <p>A <strong>SEO optimalizálás</strong> elengedhetetlen része a modern weboldal készítésnek. Ebben a cikkben az alapvető tippeket és best practice-eket mutatjuk be.</p>
      
      <h2>Mi az SEO?</h2>
      <p>A <strong>SEO (Search Engine Optimization)</strong> az a folyamat, amely során optimalizálod a weboldaladat, hogy jobb helyezést érjen el a keresőmotorokban. Ez növeli az organikus forgalmat és javítja a láthatóságot.</p>
      
      <h2>Technikai SEO</h2>
      <h3>Gyorsaság</h3>
      <p>A gyors weboldal nem csak a felhasználók számára jobb, hanem a Google is előnyben részesíti. A <strong>modern weboldal</strong> készítés során fontos a teljesítmény optimalizálása.</p>
      
      <h3>Mobilbarát design</h3>
      <p>A <strong>mobilbarát weboldal</strong> ma már nem opció, hanem kötelező. A Google mobile-first indexelést használ, ami azt jelenti, hogy a mobil verzió alapján rangsorol.</p>
      
      <h2>Tartalmi SEO</h2>
      <h3>Kulcsszavak</h3>
      <p>A megfelelő <strong>kulcsszavak</strong> kiválasztása kritikus. Kutatás és elemzés után válassz olyan kulcsszavakat, amelyek relevánsak, de nem túl versenyzőek.</p>
      
      <h3>Minőségi tartalom</h3>
      <p>A Google minőségi, értékes tartalmat preferál. A <strong>SEO optimalizálás</strong> során nem csak a kulcsszavakra kell koncentrálni, hanem a tartalom értékére is.</p>
      
      <h2>Link építés</h2>
      <p>A backlink-ek továbbra is fontosak a <strong>SEO</strong> szempontjából. Minőségi, releváns linkek növelik a weboldal autoritását.</p>
      
      <h2>Következtetés</h2>
      <p>A <strong>SEO optimalizálás</strong> hosszú távú stratégia, de a jó alapokkal már rövid időn belül látható eredményeket érhetsz el. Egy jól optimalizált, <strong>prémium weboldal</strong> nagy előnyt jelent a versenytársakkal szemben.</p>
      
      <p>Ha szeretnél egy <strong>SEO-optimalizált weboldalt</strong>, amely a keresőmotorok tetején jelenik meg, <a href="/book" class="text-[#7C5CFF] hover:text-[#50AEDF] underline">lépj velünk kapcsolatba</a>!</p>
    `
  },
  "mobilbarat-weboldal-keszites-mi-a-fontos": {
    title: "Mobilbarát Weboldal Készítés: Mi a Fontos?",
    date: "2024-11-28",
    readTime: "7 perc",
    category: "Weboldal Fejlesztés",
    keywords: ["mobilbarát weboldal", "responsive design", "mobil optimalizálás", "mobile-first"],
    content: `
      <p>A <strong>mobilbarát weboldal készítés</strong> ma már nem opció, hanem kötelező követelmény. A mobilfelhasználók már több mint 60%-ot tesznek ki az internetes forgalomból.</p>
      
      <h2>Miért fontos a mobilbarát weboldal?</h2>
      <p>A <strong>mobilbarát weboldal</strong> nem csak a felhasználói élmény miatt fontos, hanem azért is, mert:</p>
      <ul>
        <li>A Google mobile-first indexelést használ</li>
        <li>A mobilforgalom folyamatosan növekszik</li>
        <li>A gyors, mobiloptimalizált oldalak jobb konverziót érnek el</li>
        <li>Az algoritmus előnyben részesíti a mobilbarát oldalakat</li>
      </ul>
      
      <h2>A responsive design</h2>
      <p>A <strong>responsive design</strong> azt jelenti, hogy a weboldal minden eszközön tökéletesen működik és néz ki - legyen az mobiltelefon, tablet vagy asztali számítógép. Ez elengedhetetlen része a <strong>modern weboldal készítésnek</strong>.</p>
      
      <h2>Mobile-first megközelítés</h2>
      <p>A <strong>mobile-first</strong> megközelítés azt jelenti, hogy először a mobil verziót tervezzük, majd bővítjük asztali funkciókkal. Ez biztosítja, hogy a mobilélmény tökéletes legyen.</p>
      
      <h2>Gyorsaság</h2>
      <p>A mobilfelhasználók még érzékenyebbek a lassú betöltésre. A <strong>mobilbarát weboldal</strong> készítése során külön figyelmet fordítunk a teljesítményre.</p>
      
      <h2>Következtetés</h2>
      <p>A <strong>mobilbarát weboldal készítés</strong> nem csak trend, hanem elengedhetetlen követelmény. Ha weboldalad nincs mobilbarát, akkor a látogatóid jelentős részét elveszíted.</p>
      
      <p>Szeretnél egy <strong>prémium, mobilbarát weboldalt</strong>? <a href="/book" class="text-[#7C5CFF] hover:text-[#50AEDF] underline">Foglalj időpontot</a> és beszéljük meg!</p>
    `
  },
  "premium-weboldal-keszites-aron-belul": {
    title: "Prémium Weboldal Készítés Áron Belül: Értékteremtés és Minőség",
    date: "2024-11-20",
    readTime: "5 perc",
    category: "Weboldal Árazás",
    keywords: ["prémium weboldal", "weboldal árazás", "értékteremtés", "minőségi weboldal"],
    content: `
      <p>A <strong>prémium weboldal készítés</strong> nem feltétlenül jelenti a magas árat. Ebben a cikkben bemutatjuk, hogyan teremtünk értéket versenyképes áron.</p>
      
      <h2>Mi az értékteremtés?</h2>
      <p>Az <strong>értékteremtés</strong> azt jelenti, hogy többet adsz, mint amennyiért kérsz. A <strong>prémium weboldal készítés</strong> során nem csak egy szép oldalt készítünk, hanem egy működő, eredményes online eszközt.</p>
      
      <h2>A hatékonyság kulcsa</h2>
      <p>A <strong>10 napos weboldal készítés</strong> lehetővé teszi, hogy hatékonyan dolgozzunk anélkül, hogy a minőség rovására menne. Egy jól kidolgozott folyamat és tapasztalat teszi ezt lehetővé.</p>
      
      <h2>Miért prémium, ha versenyképes az ár?</h2>
      <p>A <strong>prémium weboldal</strong> nem az áron múlik, hanem:</p>
      <ul>
        <li>A minőségen - professzionális design és fejlesztés</li>
        <li>A gyorsaságon - 10 nap alatt elkészül</li>
        <li>A szolgáltatáson - átfogó támogatás</li>
        <li>Az eredményen - működő, konverziós weboldal</li>
      </ul>
      
      <h2>A befektetés megtérülése</h2>
      <p>Egy <strong>prémium weboldal</strong> nem költség, hanem befektetés. Jó weboldal több ügyfelet, több értékesítést és növekvő vállalkozást jelent.</p>
      
      <p>Készen állsz egy <strong>prémium weboldalra</strong> versenyképes áron? <a href="/book" class="text-[#7C5CFF] hover:text-[#50AEDF] underline">Lépj velünk kapcsolatba</a>!</p>
    `
  },
  "weboldal-keszites-budapest-tippek-es-trendek": {
    title: "Weboldal Készítés Budapest: Helyi Trendek és Legjobb Gyakorlatok",
    date: "2024-11-15",
    readTime: "6 perc",
    category: "Trendek",
    keywords: ["weboldal készítés Budapest", "magyar weboldal trendek", "helyi SEO", "Budapest"],
    content: `
      <p>A <strong>weboldal készítés Budapest</strong> egyedi kihívásokat és lehetőségeket is rejt. Ismerd meg a helyi trendeket és best practice-eket!</p>
      
      <h2>Budapesti piaci sajátosságok</h2>
      <p>A <strong>Budapest</strong> weboldal piac dinamikus és versenyző. A <strong>weboldal készítés</strong> során fontos, hogy kiemelkedj a tömegből egyedi designnal és funkcionalitással.</p>
      
      <h2>Helyi SEO fontossága</h2>
      <p>A <strong>helyi SEO</strong> kritikus a budapesti vállalkozások számára. A Google My Business optimalizálása és a helyi kulcsszavak használata növeli a láthatóságot.</p>
      
      <h2>Magyar nyelvű tartalom</h2>
      <p>A <strong>magyar nyelvű, minőségi tartalom</strong> kulcsfontosságú. A helyi célközönség értékeli az őket érdeklő, magyar nyelven írt információkat.</p>
      
      <h2>Trendek 2024-ben</h2>
      <p>A <strong>modern weboldal készítés</strong> Budapesten 2024-ben ezeket a trendeket követi:</p>
      <ul>
        <li>Minimalista, tiszta design</li>
        <li>Gyorsaság és teljesítmény</li>
        <li>Mobilbarát megoldások</li>
        <li>Interaktív elemek</li>
        <li>Személyre szabott tartalom</li>
      </ul>
      
      <h2>Következtetés</h2>
      <p>A <strong>weboldal készítés Budapest</strong> során fontos figyelembe venni a helyi sajátosságokat, de a minőség és a modern megoldások továbbra is elsőbbséget élveznek.</p>
      
      <p>Budapesti vállalkozás vagy és szeretnél egy <strong>prémium weboldalt</strong>? <a href="/book" class="text-[#7C5CFF] hover:text-[#50AEDF] underline">Foglalj időpontot</a> velünk!</p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: "Cikk nem található | Nexen Sites",
    };
  }

  const cleanContent = post.content.replace(/<[^>]*>/g, '').substring(0, 160);
  const keywords = [
    ...post.keywords,
    "weboldal készítés",
    "webshop készítés",
    "weboldal készítő cég",
    "olcsó weboldal",
    "10 nap alatt kész weboldal",
    "nexen sites"
  ];

  return {
    title: `${post.title} | Weboldal Készítés Blog | Nexen Sites`,
    description: cleanContent || `Olvass a ${post.title.toLowerCase()} témában. Weboldal készítés, webshop készítés, olcsó weboldal készítő cég szolgáltatásai.`,
    keywords: keywords,
    openGraph: {
      title: `${post.title} | Nexen Sites Blog`,
      description: cleanContent || `Olvass a ${post.title.toLowerCase()} témában.`,
      type: "article",
      url: `https://nexensites.hu/blog/${params.slug}`,
      siteName: "Nexen Sites",
      publishedTime: post.date,
      images: [
        {
          url: "https://nexensites.hu/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "hu_HU",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: cleanContent || `Olvass a ${post.title.toLowerCase()} témában.`,
    },
    alternates: {
      canonical: `https://nexensites.hu/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.content.replace(/<[^>]*>/g, '').substring(0, 200),
    "datePublished": post.date,
    "dateModified": post.date,
    "articleSection": post.category,
    "keywords": [...post.keywords, "weboldal készítés", "webshop készítés", "weboldal készítő cég", "olcsó weboldal", "10 nap alatt kész weboldal"].join(", "),
    "url": `https://nexensites.hu/blog/${params.slug}`,
    "author": {
      "@type": "Organization",
      "name": "Nexen Sites - Weboldal Készítő Cég",
      "url": "https://nexensites.hu"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexen Sites - Weboldal Készítő Cég",
      "alternateName": "Nexen Sites",
      "url": "https://nexensites.hu",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexensites.hu/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nexensites.hu/blog/${params.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-4xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#7C5CFF] hover:text-[#50AEDF] mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Vissza a bloghoz ikon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Vissza a bloghoz
          </Link>

          {/* Article Header */}
          <article className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10 mb-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-[rgba(124,92,255,0.2)] border border-[rgba(124,92,255,0.3)] text-[#7C5CFF] text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 pb-4 leading-[1.15] break-words overflow-wrap-anywhere" style={{ lineHeight: '1.15', paddingBottom: '1rem' }}>
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-[#A8B3C7] mb-8 pb-8 border-b border-[rgba(255,255,255,0.1)]">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('hu-HU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime} olvasás</span>
            </div>

            {/* Content */}
            <div
              className="prose prose-invert prose-lg max-w-none break-words overflow-wrap-anywhere
                prose-headings:text-white prose-headings:font-bold prose-headings:break-words
                prose-p:text-[#A8B3C7] prose-p:leading-relaxed prose-p:break-words prose-p:overflow-wrap-anywhere
                prose-a:text-[#7C5CFF] prose-a:no-underline hover:prose-a:text-[#50AEDF] hover:prose-a:underline prose-a:break-words
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-[#A8B3C7] prose-li:text-[#A8B3C7] prose-li:break-words
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:break-words
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:break-words"
              style={{ wordWrap: 'break-word', overflowWrap: 'anywhere' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* CTA */}
          <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4 break-words overflow-wrap-anywhere">
              Szeretnél egy <span className="bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent">prémium weboldalt</span>?
            </h2>
            <p className="text-[#A8B3C7] mb-6 break-words overflow-wrap-anywhere">
              Foglalj időpontot és beszéljük meg a projektedet!
            </p>
            <Link
              href="/book"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl hover:shadow-[0_0_30px_rgba(124,92,255,0.6)] hover:scale-105 transition-all duration-300 font-semibold text-base shadow-lg"
            >
              Időpont Foglalása
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

