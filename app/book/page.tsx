import type { Metadata } from "next";
import BookContent from "./BookContent";

export const metadata: Metadata = {
  title: "Időpont Foglalása | Nexen Sites",
  description: "Foglalj ingyenes konzultációs időpontot a Nexen Sites csapatával, és indítsd el a weboldalad 3 napos elkészítését.",
  keywords: [
    "weboldal konzultáció foglalás",
    "nexen sites időpont",
    "weboldal készítés foglalás",
  ],
  alternates: {
    canonical: "https://nexensites.hu/book",
  },
};

export default function BookPage() {
  return <BookContent />;
}
