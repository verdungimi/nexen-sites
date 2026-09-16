import type { Metadata } from "next";
import GyikContent from "./GyikContent";

export const metadata: Metadata = {
  title: "Gyakran Ismételt Kérdések | Nexen Sites",
  description: "Válaszok a weboldal készítéssel kapcsolatos leggyakoribb kérdésekre: ár, határidő, folyamat, technológia és támogatás.",
  keywords: [
    "weboldal készítés gyik",
    "weboldal készítés árak",
    "nexen sites kérdések",
    "weboldal fejlesztés kérdések",
  ],
  alternates: {
    canonical: "https://nexensites.hu/gyik",
  },
};

export default function GyikPage() {
  return <GyikContent />;
}
