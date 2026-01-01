import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Weboldal Készítés, Landing Page, SEO Tippek | Nexen Sites",
  description: "Olvass a weboldal készítésről, landing page tervezésről, SEO optimalizálásról és modernebb weboldal fejlesztésről.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

