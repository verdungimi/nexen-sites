import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Időpontfoglalás | Nexen Sites",
  description: "Foglalj időpontot egy 15 perces gyors egyeztetésre. Megnézzük, beleférsz-e a következő 2 hely egyikébe.",
  openGraph: {
    title: "Időpontfoglalás | Nexen Sites",
    description: "Foglalj időpontot egy 15 perces gyors egyeztetésre.",
    type: "website",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
