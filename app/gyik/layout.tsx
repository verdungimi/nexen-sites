import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GYIK | Nexen Sites - Gyakran Ismételt Kérdések",
  description: "Válaszok a leggyakrabban feltett kérdésekre a weboldal készítésről, folyamatról és szolgáltatásainkról. Nexen Sites - Modern weboldal fejlesztés 10 nap alatt.",
  keywords: [
    "gyik",
    "gyakran ismételt kérdések",
    "nexen",
    "nexen weboldal",
    "weboldal készítés",
    "weboldalak készítése",
    "nexen sites",
    "faq",
  ],
  openGraph: {
    title: "GYIK | Nexen Sites - Gyakran Ismételt Kérdések",
    description: "Válaszok a leggyakrabban feltett kérdésekre a weboldal készítésről, folyamatról és szolgáltatásainkról.",
    type: "website",
    url: "https://nexensites.hu/gyik",
  },
  alternates: {
    canonical: "https://nexensites.hu/gyik",
  },
};

export default function GyikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
