import type { Metadata } from "next";
import FolyamatContent from "./FolyamatContent";

export const metadata: Metadata = {
  title: "A folyamat | Nexen Sites - Weboldal Készítés 3 Nap Alatt",
  description: "Így épül fel a weboldalad 3 nap alatt: konzultáció, tervezés, fejlesztés, tesztelés és indítás. Nézd meg lépésről lépésre, hogyan dolgozunk.",
  keywords: [
    "weboldal készítés folyamata",
    "weboldal fejlesztés lépései",
    "nexen sites folyamat",
    "3 napos weboldal készítés",
    "weboldal tervezés",
  ],
  alternates: {
    canonical: "https://nexensites.hu/folyamat",
  },
};

export default function FolyamatPage() {
  return <FolyamatContent />;
}
