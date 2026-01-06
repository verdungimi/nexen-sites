import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klíma Akció | Zöldház Energy Kft. | Legjobb árak klímaberendezésekre",
  description: "Nagy klíma akció! Samsung, Midea, Gree, Daewoo klímák kedvező áron. Telepített ár, alapszereléssel. Ingyenes ajánlatkérés!",
  openGraph: {
    title: "Klíma Akció | Zöldház Energy Kft.",
    description: "Nagy klíma akció kedvező áron! Modern klímaberendezések telepítéssel.",
    type: "website",
  },
};

export default function TermekekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

