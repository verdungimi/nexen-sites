import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Amit építünk | Nexen Sites - Weboldal Típusok",
  description: "Nézd meg, milyen weboldalakat épít a Nexen Sites: vállalkozói oldalak, webshopok, landing page-ek és portfóliók, modern technológiával.",
  keywords: [
    "nexen sites portfólió",
    "weboldal típusok",
    "weboldal készítés minták",
    "webshop készítés",
    "landing page készítés",
  ],
  alternates: {
    canonical: "https://nexensites.hu/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
