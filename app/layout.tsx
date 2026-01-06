import type { Metadata } from "next";
import { Poppins, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexensites.hu"),
  title: {
    default: "Weboldal Készítés 10 Nap Alatt | Olcsó Weboldal Készítő Cég | Nexen Sites",
    template: "%s | Nexen Sites",
  },
  description: "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon. Prémium minőség, fix ár, garantált határidő. Weboldal készítés szolgáltatások.",
  keywords: [
    "weboldal készítés",
    "weboldal készítő cég",
    "olcsó weboldal",
    "10 nap alatt kész weboldal",
    "weboldal készítés 10 nap",
    "olcsó weboldal készítés",
    "weboldal készítő",
    "weboldal készítés magyarország",
    "prémium weboldal",
    "modern weboldal",
    "mobilbarát weboldal",
    "weboldal fejlesztés",
    "nexen sites",
  ],
  authors: [{ name: "Nexen Sites" }],
  creator: "Nexen Sites",
  publisher: "Nexen Sites",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://nexensites.hu",
    siteName: "Nexen Sites",
    title: "Weboldal Készítés 10 Nap Alatt | Olcsó Weboldal Készítő Cég | Nexen Sites",
    description: "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon. Prémium minőség, fix ár, garantált határidő.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexen Sites - Weboldal készítés 10 nap alatt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weboldal Készítés 10 Nap Alatt | Olcsó Weboldal Készítő Cég",
    description: "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon.",
    images: ["/og-image.jpg"],
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
    canonical: "https://nexensites.hu",
  },
  category: "Weboldal készítés",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${poppins.variable} ${dmSans.variable} ${spaceGrotesk.variable} font-sans flex flex-col min-h-screen`} style={{ backgroundColor: '#0a0a0a', color: '#ffffff', position: 'relative' }}>
        <GoogleAnalytics />
        <StructuredData />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
