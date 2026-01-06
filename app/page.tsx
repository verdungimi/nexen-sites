import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Weboldal Készítés 10 Nap Alatt | Olcsó Weboldal Készítő Cég | Nexen Sites",
  description: "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon. Prémium minőség, fix ár, garantált határidő. Weboldal készítés szolgáltatások.",
  keywords: [
    "weboldal készítés",
    "weboldal készítő cég",
    "olcsó weboldal",
    "10 nap alatt kész weboldal",
    "weboldal készítés 10 nap",
    "olcsó weboldal készítés",
    "weboldal készítő",
    "weboldal készítés magyarország",
    "prémium weboldal",
    "modern weboldal",
    "mobilbarát weboldal",
    "weboldal fejlesztés",
    "nexen sites",
  ],
  openGraph: {
    title: "Weboldal Készítés 10 Nap Alatt | Olcsó Weboldal Készítő Cég | Nexen Sites",
    description: "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon. Prémium minőség, fix ár, garantált határidő.",
    type: "website",
    url: "https://nexensites.hu",
    siteName: "Nexen Sites",
    images: [
      {
        url: "https://nexensites.hu/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexen Sites - Weboldal készítés 10 nap alatt",
      },
    ],
    locale: "hu_HU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weboldal Készítés 10 Nap Alatt | Olcsó Weboldal Készítő Cég",
    description: "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon.",
  },
  alternates: {
    canonical: "https://nexensites.hu",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
