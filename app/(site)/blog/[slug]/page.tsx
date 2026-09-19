import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/site/Container";
import ClosingCta from "@/components/site/ClosingCta";
import { ButtonLink } from "@/components/site/Button";
import { LOGO_URL, OG_IMAGE, jsonLd } from "@/components/StructuredData";
import { BLOG_POSTS, formatPostDate, getBlogPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "hu_HU",
      siteName: "Nexen Sites",
      url: path,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "hu-HU",
    keywords: post.keywords.join(", "),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "Nexen Sites", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Nexen Sites",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />

      <article className="bg-graphite pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-32">
        <Container>
          <ButtonLink href="/blog" variant="quiet">
            Összes írás
          </ButtonLink>
          <h1 className="type-display mt-8 max-w-4xl">{post.title}</h1>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-fog">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{post.readMinutes} perc olvasás</span>
          </p>
          <div className="prose-nexen mt-12" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </article>

      <ClosingCta />
    </>
  );
}
