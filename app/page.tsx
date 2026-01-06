import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Nexen Weboldal - Weboldal Készítés 10 Nap Alatt | Prémium Weboldalak",
  description: "Nexen Sites - Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak vállalkozásoknak. Weboldal készítés Budapest, weboldal fejlesztés. Nexen weboldal szolgáltatások.",
  keywords: [
    "nexen",
    "nexen weboldal",
    "weboldal készítés",
    "weboldalak készítése",
    "weboldal fejlesztés",
    "weboldal készítés budapest",
    "weboldal készítés 10 nap",
    "prémium weboldal",
    "modern weboldal",
    "mobilbarát weboldal",
    "nexen sites",
  ],
  openGraph: {
    title: "Nexen Weboldal - Weboldal Készítés 10 Nap Alatt",
    description: "Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak vállalkozásoknak.",
    type: "website",
    url: "https://nexensites.hu",
    siteName: "Nexen Sites",
    images: [
      {
        url: "https://nexensites.hu/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexen Sites - Weboldal Készítés",
      },
    ],
    locale: "hu_HU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexen Weboldal - Weboldal Készítés 10 Nap Alatt",
    description: "Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak.",
  },
  alternates: {
    canonical: "https://nexensites.hu",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
