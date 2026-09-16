import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";
import HomePageStructuredData from "@/components/HomePageStructuredData";

export const metadata: Metadata = {
  title: { absolute: "Nexen Sites – Weboldal, ami az áraidhoz illik" },
  description:
    "Weboldal bejáratott szolgáltató cégeknek, amitől a jó ügyfél már az első hívás előtt téged választ. Az első működő változat 3 munkanap alatt kész, a végösszeget a jóváhagyás után fizeted.",
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
