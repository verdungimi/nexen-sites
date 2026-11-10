import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { BLOG_POSTS, formatPostDate, postUpdated } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: weboldal, keresők, AI, árak",
  description:
    "Gyakorlati írások cégvezetőknek weboldalkészítésről, keresőoptimalizálásról, GEO-ról és arról, mennyibe kerül egy weboldal.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        crumbs={[{ href: "/blog", label: "Blog" }]}
        answer="Gyakorlati írások cégvezetőknek arról, hogyan készül egy weboldal, mennyibe kerül, hogyan talál rá a Google és az AI, és mit érdemes megkérdezni, mielőtt megrendeled. Minden cikk egyenes válasszal kezdődik, és mindegyiken ott a megjelenés és az utolsó frissítés dátuma."
      />

      <Section aria-labelledby="cikkek-cim">
        <h2 id="cikkek-cim" className="sr-only">
          Cikkek
        </h2>
        <ul className="border-b border-line">
          {BLOG_POSTS.map((post, index) => (
            <li key={post.slug} className="border-t border-line" data-reveal style={{ "--i": Math.min(index, 4) } as React.CSSProperties}>
              <article className="grid gap-x-10 gap-y-3 py-8 lg:grid-cols-12">
                <p className="text-[0.9375rem] text-muted lg:col-span-3 lg:pt-2">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span className="block">Frissítve: {formatPostDate(postUpdated(post))}</span>
                  <span className="block">{post.readMinutes} perc olvasás</span>
                </p>
                <div className="lg:col-span-9">
                  <h3 className="type-h3 !text-[clamp(1.5rem,1.3rem+1vw,2rem)]">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-mid">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="measure mt-3 text-muted">{post.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
