import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Időpont Választása | Nexen Sites",
  description: "Válassz egy időpontot a találkozóhoz.",
  openGraph: {
    title: "Időpont Választása | Nexen Sites",
    description: "Válassz egy időpontot a találkozóhoz.",
    type: "website",
  },
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

