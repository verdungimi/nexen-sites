import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const DISALLOW = ["/api/", "/admin", "/thank-you"];

/**
 * Search and AI crawlers that are allowed by name, so no generic rule can ever shut them out by accident.
 * - OAI-SearchBot, ChatGPT-User, GPTBot: OpenAI (ChatGPT search, user-triggered fetches, training)
 * - Claude-SearchBot, Claude-User, ClaudeBot: Anthropic
 * - PerplexityBot, Perplexity-User: Perplexity
 * - Google-Extended: Gemini; Googlebot and Bingbot: classic search (Bing also feeds Copilot)
 */
const NAMED_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...NAMED_BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
      { userAgent: "*", allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
