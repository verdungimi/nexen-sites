import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/site/Button";
import Container from "@/components/site/Container";
import JsonLd from "@/components/site/JsonLd";
import Section from "@/components/site/Section";
import { SectionHeading } from "@/components/site/Words";
import { BLOG_POSTS, formatPostDate, getBlogPost, postUpdated } from "@/lib/blog";
import { BRAND, CTA_HREF, CTA_LABEL, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      modifiedTime: postUpdated(post),
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const others = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: postUpdated(post),
            inLanguage: "hu",
            mainEntityOfPage: url,
            url,
            author: { "@type": "Organization", name: BRAND, url: SITE_URL },
            publisher: { "@id": `${SITE_URL}/#business` },
            keywords: post.keywords.join(", "),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Főoldal", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          },
        ]}
      />

      <article>
        <header className="on-navy bg-navy pb-12 pt-8 text-white sm:pb-16 sm:pt-12">
          <Container className="max-w-4xl">
            <nav aria-label="Morzsamenü" className="text-[0.9375rem] text-cloud">
              <ol className="flex flex-wrap items-center gap-x-2">
                <li className="flex items-center gap-x-2">
                  <Link href="/" className="inline-flex min-h-10 items-center underline decoration-navy-line underline-offset-4 hover:text-white">
                    Főoldal
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
                <li>
                  <Link href="/blog" className="inline-flex min-h-10 items-center underline decoration-navy-line underline-offset-4 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>
            <h1 className="type-h1 mt-6 !text-[clamp(2rem,1.4rem+2.8vw,3.5rem)]">{post.title}</h1>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem] text-cloud">
              <span>
                Megjelent: <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              </span>
              <span>
                Utolsó frissítés: <time dateTime={postUpdated(post)}>{formatPostDate(postUpdated(post))}</time>
              </span>
              <span>{post.readMinutes} perc olvasás</span>
            </p>
          </Container>
        </header>

        <Container className="max-w-4xl py-12 sm:py-16">
          <div className="prose-nexen table-scroll max-w-[44rem]" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </article>

      <Section tone="mist" aria-labelledby="tovabbi-cim" className="!py-14 sm:!py-20">
        <h2 id="tovabbi-cim" className="type-h2">
          További írások
        </h2>
        <ul className="mt-8 grid gap-x-10 md:grid-cols-3">
          {others.map((item) => (
            <li key={item.slug} className="border-t border-line-strong py-6">
              <p className="text-[0.9375rem] text-muted">{formatPostDate(item.date)}</p>
              <h3 className="type-h3 mt-2">
                <Link href={`/blog/${item.slug}`} className="transition-colors hover:text-mid">
                  {item.title}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" aria-labelledby="cikk-zaro-cim">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="cikk-zaro-cim"
            title="Nézd meg a saját cégeden"
            lead="Kérj ingyenes demo weboldalt. Egy napon belül elkészül, és csak akkor fizetsz, ha tetszik."
            onNavy
          />
          <ButtonLink href={CTA_HREF} size="lg" className="self-start lg:self-auto">
            {CTA_LABEL}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
