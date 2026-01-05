import type { Metadata } from "next";
import { Poppins, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

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
  title: {
    default: "Nexen Sites - Weboldal 10 nap alatt",
    template: "%s | Nexen Sites",
  },
  description: "Prémium, gyors, mobilbarát weboldal — olyan vállalkozóknak, akiknek most kell online jelenlét.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Nexen Sites",
  },
  // Analytics placeholder - uncomment and add your tracking ID
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${poppins.variable} ${dmSans.variable} ${spaceGrotesk.variable} font-sans flex flex-col min-h-screen`} style={{ backgroundColor: '#0a0a0a', color: '#ffffff', position: 'relative' }}>
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
