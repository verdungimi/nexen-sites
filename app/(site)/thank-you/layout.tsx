import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Köszönjük! | Nexen Sites",
  description: "Megkaptuk az időpontfoglalási kérést. Hamarosan jelentkezünk.",
  openGraph: {
    title: "Köszönjük! | Nexen Sites",
    description: "Megkaptuk az időpontfoglalási kérést.",
    type: "website",
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
