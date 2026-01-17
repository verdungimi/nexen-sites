import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Folyamat | Nexen Sites - Weboldal Készítés",
  description: "Ismerd meg, hogyan dolgozunk: egyszerű, átlátható lépések az eredményig. 10 nap alatt professzionális weboldal.",
  keywords: [
    "nexen",
    "nexen weboldal",
    "weboldal készítés",
    "weboldal folyamat",
    "nexen sites",
  ],
  openGraph: {
    title: "Folyamat | Nexen Sites - Weboldal Készítés",
    description: "Ismerd meg, hogyan dolgozunk: egyszerű, átlátható lépések az eredményig. 10 nap alatt professzionális weboldal.",
    type: "website",
    url: "https://nexensites.hu/folyamat",
  },
  alternates: {
    canonical: "https://nexensites.hu/folyamat",
  },
};

export default function FolyamatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
