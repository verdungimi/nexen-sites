import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import ClosingCta from "@/components/site/ClosingCta";
import { LOGO_URL, jsonLd } from "@/components/StructuredData";
import { BLOG_POSTS, formatPostDate } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const LEAD = "Rövid, gyakorlati írások arról, hogyan hozhat több jó ügyfelet egy szolgáltató cég weboldala.";

export const metadata: Metadata = {
  title: "Blog: weboldal és ügyfélszerzés",
  description:
    "Rövid, gyakorlati írások arról, hogyan hozhat több jó ügyfelet egy szolgáltató cég weboldala: folyamat, mobilnézet, SEO, árajánlat.",
  alternates: {
    canonical: "/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Nexen Sites blog",
  description: LEAD,
  url: `${SITE_URL}/blog`,
  inLanguage: "hu-HU",
  publisher: {
    "@type": "Organization",
    name: "Nexen Sites",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: LOGO_URL },
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  })),
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(blogSchema)} />

      <PageHero title="Blog" lead={LEAD} />

      <Section>
        <ol className="border-b border-rule">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              {/* The title link stretches over the whole row, so the full row is clickable. */}
              <article className="reveal group relative grid gap-3 border-t border-rule py-8 sm:py-10 lg:grid-cols-12 lg:gap-8">
                <time dateTime={post.date} className="text-fog lg:col-span-3 lg:pt-1.5">
                  {formatPostDate(post.date)}
                </time>
                <div className="lg:col-span-6">
                  <h2 className="type-h3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors duration-200 after:absolute after:inset-0 group-hover:text-brass"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="measure mt-3 text-fog">{post.excerpt}</p>
                </div>
                <p className="text-fog lg:col-span-3 lg:pt-1.5">{post.readMinutes} perc olvasás</p>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <ClosingCta />
    </>
  );
}
