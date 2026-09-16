import type { Metadata } from "next";
import { Poppins, DM_Sans, Space_Grotesk } from "next/font/google";
import "./legacy.css";
import ConvexProviderWrapper from "@/components/ConvexProvider";

// Root layout for pages outside the Nexen Sites design: the admin panel and
// the Zöldház Energy client pages. Kept on the pre-redesign styles on purpose.

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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function LegacyRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${poppins.variable} ${dmSans.variable} ${spaceGrotesk.variable} font-sans flex flex-col min-h-screen`}
        style={{ backgroundColor: "#0a0a0a", color: "#ffffff", position: "relative" }}
      >
        <ConvexProviderWrapper>
          <main className="flex-grow relative z-10">{children}</main>
        </ConvexProviderWrapper>
      </body>
    </html>
  );
}
