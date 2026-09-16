import type { Metadata } from "next";
import KapcsolatContent from "./KapcsolatContent";

export const metadata: Metadata = {
  title: "Kapcsolat | Nexen Sites - Weboldal Készítés",
  description: "Lépj kapcsolatba a Nexen Sites csapatával. Kérj ingyenes konzultációt, és 3 nap alatt élesítjük az új weboldaladat.",
  keywords: [
    "nexen sites kapcsolat",
    "weboldal készítés árajánlat",
    "ingyenes konzultáció weboldal",
    "weboldal fejlesztő kapcsolat",
  ],
  alternates: {
    canonical: "https://nexensites.hu/kapcsolat",
  },
};

export default function KapcsolatPage() {
  return <KapcsolatContent />;
}
