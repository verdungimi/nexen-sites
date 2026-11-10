"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { CONSENT_EVENT, readConsent, type Consent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/** AI search engines whose visitors should be visible as their own group in GA4. */
const AI_SOURCES: { name: string; pattern: RegExp }[] = [
  { name: "chatgpt", pattern: /(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/ },
  { name: "perplexity", pattern: /(^|\.)perplexity\.ai$/ },
  { name: "gemini", pattern: /(^|\.)gemini\.google\.com$/ },
  { name: "claude", pattern: /(^|\.)claude\.ai$/ },
  { name: "copilot", pattern: /(^|\.)copilot\.microsoft\.com$/ },
];

/** Works out the AI source from the referrer or from utm_source (ChatGPT adds utm_source=chatgpt.com). */
function detectAiSource(): string | null {
  const candidates: string[] = [];
  try {
    if (document.referrer) candidates.push(new URL(document.referrer).hostname);
  } catch {
    // malformed referrer
  }
  const utmSource = new URLSearchParams(window.location.search).get("utm_source");
  if (utmSource) candidates.push(utmSource.toLowerCase().replace(/^https?:\/\//, "").split("/")[0]);
  for (const host of candidates) {
    const match = AI_SOURCES.find((source) => source.pattern.test(host));
    if (match) return match.name;
  }
  return null;
}

// Read once per page load, before any consent decision, and kept only in memory.
let aiSource: string | null | undefined;
let gaLoaded = false;
let pixelLoaded = false;

function loadGa() {
  if (gaLoaded || !GA_ID) return;
  gaLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  if (aiSource) {
    // A user property (for segments and a custom channel group) and an event (for quick reports)
    window.gtag("set", "user_properties", { ai_source: aiSource });
    window.gtag("event", "ai_referral", { ai_source: aiSource });
  }
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function loadPixel() {
  if (pixelLoaded || !PIXEL_ID) return;
  pixelLoaded = true;
  // Standard Meta Pixel bootstrap, written out so no inline <script> is needed
  const queue: unknown[][] = [];
  const fbq = function (...args: unknown[]) {
    const self = fbq as unknown as { callMethod?: (...a: unknown[]) => void };
    if (self.callMethod) self.callMethod(...args);
    else queue.push(args);
  } as unknown as Window["fbq"] & { queue: unknown[][]; loaded: boolean; version: string; push: unknown };
  fbq.queue = queue;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  window.fbq = fbq;
  (window as unknown as { _fbq: unknown })._fbq = fbq;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  window.fbq!("init", PIXEL_ID);
  window.fbq!("track", "PageView");
}

function apply(consent: Consent | null) {
  if (consent?.analytics) loadGa();
  if (consent?.marketing) loadPixel();
}

/** Loads Google Analytics 4 and the Meta Pixel, each only after the visitor has consented to it. */
export default function Analytics() {
  const pathname = usePathname();
  const firstPath = useRef(true);

  useEffect(() => {
    if (aiSource === undefined) aiSource = detectAiSource();
    apply(readConsent());
    const onConsent = (event: Event) => apply((event as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  // GA4 follows client-side navigation on its own (enhanced measurement). The Pixel does not.
  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    if (pixelLoaded) window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
