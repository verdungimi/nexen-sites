import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapcsolat | Nexen Sites - Weboldal Készítés",
  description: "Lépj velünk kapcsolatba! Írj nekünk üzenetet, vagy foglalj időpontot. Kecskemét, Magyarország.",
  keywords: [
    "nexen",
    "nexen weboldal",
    "kapcsolat",
    "weboldal készítés",
    "nexen sites",
  ],
  openGraph: {
    title: "Kapcsolat | Nexen Sites - Weboldal Készítés",
    description: "Lépj velünk kapcsolatba! Írj nekünk üzenetet, vagy foglalj időpontot. Kecskemét, Magyarország.",
    type: "website",
    url: "https://nexensites.hu/kapcsolat",
  },
  alternates: {
    canonical: "https://nexensites.hu/kapcsolat",
  },
};

export default function KapcsolatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
