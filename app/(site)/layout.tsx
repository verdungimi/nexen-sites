import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./site.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ConvexProviderWrapper from "@/components/ConvexProvider";
import { SITE_URL } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const DESCRIPTION =
  "Weboldalak bejáratott szolgáltató cégeknek, akiknek a munkája prémium, de a weboldaluk még nem. Az első működő változatot 3 munkanap alatt látod, a végösszeget jóváhagyás után fizeted.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexen Sites – Weboldal, ami az áraidhoz illik",
    template: "%s | Nexen Sites",
  },
  description: DESCRIPTION,
  keywords: [
    "weboldal készítés",
    "prémium weboldal",
    "céges weboldal",
    "weboldal szolgáltató cégeknek",
    "konverzióra tervezett weboldal",
    "weboldal készítés Kecskemét",
    "weboldal 3 nap alatt",
    "Nexen Sites",
  ],
  authors: [{ name: "Nexen Sites" }],
  creator: "Nexen Sites",
  publisher: "Nexen Sites",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: SITE_URL,
    siteName: "Nexen Sites",
    title: "Nexen Sites – Weboldal, ami az áraidhoz illik",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexen Sites – Weboldal, ami az áraidhoz illik",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "Weboldal készítés",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export const viewport: Viewport = {
  themeColor: "#1A1D21",
  colorScheme: "dark",
};

export default function SiteRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={archivo.variable}>
      <body className="flex min-h-screen flex-col">
        <ConvexProviderWrapper>
          <GoogleAnalytics />
          <StructuredData />
          <Navbar />
          <main id="tartalom" className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ConvexProviderWrapper>
      </body>
    </html>
  );
}
