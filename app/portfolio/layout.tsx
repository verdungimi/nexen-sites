import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólió | Nexen Sites - Weboldal Készítés",
  description: "Nézd meg az általunk készített weboldalakat. Prémium minőség, modern design, 10 napos szállítás.",
  keywords: [
    "nexen",
    "nexen weboldal",
    "portfólió",
    "weboldal példák",
    "nexen sites",
  ],
  openGraph: {
    title: "Portfólió | Nexen Sites - Weboldal Készítés",
    description: "Nézd meg az általunk készített weboldalakat. Prémium minőség, modern design, 10 napos szállítás.",
    type: "website",
    url: "https://nexensites.hu/portfolio",
  },
  alternates: {
    canonical: "https://nexensites.hu/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
