import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";
import HomePageStructuredData from "@/components/HomePageStructuredData";

export const metadata: Metadata = {
  title: { absolute: "Weboldalkészítés szolgáltató cégeknek | Nexen Sites" },
  description:
    "Weboldalkészítés bejáratott szolgáltató cégeknek: az első működő változat 3 munkanap alatt kész, a végösszeget jóváhagyás után fizeted.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageStructuredData />
      <HomePageContent />
    </>
  );
}
