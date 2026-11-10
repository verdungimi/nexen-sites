import type { MetadataRoute } from "next";
import { BLOG_POSTS, postUpdated } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/** Date of the last content change of the static pages (the 2026 rebuild). Update when their copy changes. */
const STATIC_UPDATED = "2026-11-10";

const STATIC_ROUTES: { path: string; changeFrequency: ChangeFrequency; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/demo", changeFrequency: "monthly", priority: 0.9 },
  { path: "/packages", changeFrequency: "monthly", priority: 0.9 },
  { path: "/geo", changeFrequency: "monthly", priority: 0.8 },
  { path: "/folyamat", changeFrequency: "monthly", priority: 0.8 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.7 },
  { path: "/rolunk", changeFrequency: "monthly", priority: 0.7 },
  { path: "/gyik", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/book", changeFrequency: "monthly", priority: 0.6 },
  { path: "/kapcsolat", changeFrequency: "monthly", priority: 0.6 },
  { path: "/impresszum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      lastModified: new Date(`${STATIC_UPDATED}T00:00:00Z`),
      changeFrequency,
      priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${postUpdated(post)}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
