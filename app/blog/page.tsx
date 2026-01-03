import type { Metadata } from "next";
import Link from "next/link";
import FinAIHero from "@/components/FinAIHero";

export const metadata: Metadata = {
  title: "Blog | Weboldal Készítés, Landing Page, SEO Tippek | Nexen Sites",
  description: "Olvass a weboldal készítésről, landing page tervezésről, SEO optimalizálásról, 10 napos weboldal fejlesztésről és modernebb weboldal készítésről. Hasznos cikkek prémium weboldal fejlesztéshez.",
  keywords: [
    "weboldal készítés",
    "landing page",
    "weboldal fejlesztés",
    "10 napos weboldal",
    "prémium weboldal",
    "modern weboldal",
    "weboldal tervezés",
    "weboldal készítés Budapest",
    "weboldal fejlesztés 10 nap",
    "SEO optimalizálás",
    "mobilbarát weboldal",
    "weboldal árazás",
    "gyors weboldal készítés",
    "professzionális weboldal"
  ],
  openGraph: {
    title: "Blog | Weboldal Készítés, Landing Page, SEO Tippek | Nexen Sites",
    description: "Olvass a weboldal készítésről, landing page tervezésről és modernebb weboldal fejlesztésről.",
    type: "website",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "10-napos-weboldal-keszites-hogyan-mukodik",
    title: "10 Napos Weboldal Készítés: Hogyan Működik a Gyors Szállítási Rendszer?",
    excerpt: "Ismerd meg, hogyan készítünk prémium weboldalakat 10 nap alatt. Részletes betekintés a folyamatba, a hatékonyság kulcsai és az eredmények garanciája. Megtudod, mit várhatsz el egy 10 napos weboldal fejlesztés során.",
    date: "2024-12-15",
    readTime: "8 perc",
    category: "Weboldal Fejlesztés",
    keywords: ["10 napos weboldal", "weboldal készítés", "gyors weboldal fejlesztés", "prémium weboldal", "weboldal szállítás"]
  },
  {
    slug: "landing-page-vagy-tobb-oldalas-weboldal-melyiket-valasszam",
    title: "Landing Page vagy Több Oldalas Weboldal: Melyiket Válasszam?",
    excerpt: "Segítünk eldönteni, hogy az egyoldalas landing page vagy a több oldalas weboldal felel meg jobban a vállalkozásodnak. Áttekintjük az előnyöket, hátrányokat és a legjobb választást különböző üzleti célokhoz.",
    date: "2024-12-10",
    readTime: "6 perc",
    category: "Weboldal Tervezés",
    keywords: ["landing page", "weboldal tervezés", "egyoldalas weboldal", "weboldal struktúra", "weboldal készítés"]
  },
  {
    slug: "seo-optimalizalas-modern-weboldalhoz-tippek",
    title: "SEO Optimalizálás Modern Weboldalhoz: Alapvető Tippek és Best Practices",
    excerpt: "Tanuld meg a modern weboldal SEO optimalizálásának alapjait. Technikai SEO, tartalmi optimalizálás, mobile-first megközelítés és gyorsaság - minden, amire szükséged van a keresőmotorok tetejére kerüléshez.",
    date: "2024-12-05",
    readTime: "10 perc",
    category: "SEO",
    keywords: ["SEO optimalizálás", "weboldal SEO", "keresőoptimalizálás", "modern weboldal SEO", "SEO tippek"]
  },
  {
    slug: "mobilbarat-weboldal-keszites-mi-a-fontos",
    title: "Mobilbarát Weboldal Készítés: Mi a Fontos?",
    excerpt: "A mobilfelhasználók már több mint 60%-ot tesznek ki az internetes forgalomból. Ismerd meg, miért kritikus a mobilbarát weboldal készítés és milyen elemei vannak egy professzionális mobiloptimalizált weboldalnak.",
    date: "2024-11-28",
    readTime: "7 perc",
    category: "Weboldal Fejlesztés",
    keywords: ["mobilbarát weboldal", "responsive design", "mobil optimalizálás", "weboldal készítés", "mobile-first"]
  },
  {
    slug: "premium-weboldal-keszites-aron-belul",
    title: "Prémium Weboldal Készítés Áron Belül: Értékteremtés és Minőség",
    excerpt: "Fedezd fel, hogyan készítünk prémium minőségű weboldalokat versenyképes áron. A minőség, a hatékonyság és a gyorsaság kombinációja, amely lehetővé teszi a hozzáférhető luxust minden vállalkozás számára.",
    date: "2024-11-20",
    readTime: "5 perc",
    category: "Weboldal Árazás",
    keywords: ["prémium weboldal", "weboldal árazás", "értékteremtés", "weboldal készítés ár", "minőségi weboldal"]
  },
  {
    slug: "weboldal-keszites-budapest-tippek-es-trendek",
    title: "Weboldal Készítés Budapest: Helyi Trendek és Legjobb Gyakorlatok",
    excerpt: "A budapesti vállalkozások egyedi igényei és a helyi piaci trendek áttekintése. Tanuld meg, mi működik a magyar piacon weboldal készítés során és hogyan lehet kiugrani a tömegből.",
    date: "2024-11-15",
    readTime: "6 perc",
    category: "Trendek",
    keywords: ["weboldal készítés Budapest", "magyar weboldal trendek", "helyi SEO", "weboldal fejlesztés", "Budapest"]
  }
];

export default function BlogPage() {
  // Schema.org JSON-LD for Blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nexen Sites Blog",
    "description": "Weboldal készítés, landing page tervezés és SEO optimalizálás cikkek",
    "url": "https://nexensites.hu/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Nexen Sites",
      "url": "https://nexensites.hu"
    }
  };

  const blogPostSchemas = blogPosts.map(post => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "articleSection": post.category,
    "keywords": post.keywords.join(", "),
    "url": `https://nexensites.hu/blog/${post.slug}`
  }));

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {blogPostSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-6xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
          {/* Header */}
          <div className="text-center mb-16 pb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 pb-4 text-white leading-[1.15] break-words overflow-wrap-anywhere px-4" style={{ lineHeight: '1.15', paddingBottom: '1rem' }}>
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Blog
              </span>
              <span className="block bg-gradient-to-r from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent mt-2">
                Weboldal Készítés & SEO Tippek
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#A8B3C7] max-w-3xl mx-auto font-light leading-relaxed break-words overflow-wrap-anywhere px-4 mt-4">
              Hasznos cikkek a <strong className="text-white">weboldal készítésről</strong>, <strong className="text-white">landing page tervezésről</strong>, <strong className="text-white">SEO optimalizálásról</strong> és a <strong className="text-white">10 napos weboldal fejlesztésről</strong>.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#7C5CFF]/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.2)] hover:-translate-y-1 group flex flex-col blog-card"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[rgba(124,92,255,0.2)] border border-[rgba(124,92,255,0.3)] text-[#7C5CFF] text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Date and Read Time */}
                <div className="flex items-center gap-4 text-xs text-[#A8B3C7] mb-4 flex-wrap">
                  <time dateTime={post.date} className="break-words">
                    {new Date(post.date).toLocaleDateString('hu-HU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span className="break-words">{post.readTime} olvasás</span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7C5CFF] group-hover:to-[#50AEDF] transition-all duration-300 leading-tight break-words overflow-wrap-anywhere">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <div className="relative mb-6 blog-excerpt-wrapper">
                  <p className="text-[#A8B3C7] leading-relaxed break-words overflow-wrap-anywhere blog-excerpt-text">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#7C5CFF] hover:text-[#50AEDF] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Tovább olvasás
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 break-words overflow-wrap-anywhere">
                Készen állsz egy <span className="bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent">prémium weboldalra</span>?
              </h2>
              <p className="text-lg text-[#A8B3C7] mb-6 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
                Foglalj időpontot és beszéljük meg, hogyan készíthetünk neked egy <strong className="text-white">10 nap alatt elkészülő, prémium minőségű weboldalt</strong> vagy <strong className="text-white">landing page</strong>-et.
              </p>
              <Link
                href="/book"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl hover:shadow-[0_0_30px_rgba(124,92,255,0.6)] hover:scale-105 transition-all duration-300 font-semibold text-base shadow-lg"
              >
                Időpont Foglalása
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

