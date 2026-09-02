import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weboldal Készítés Blog | 3 Nap Alatt Kész Weboldal | Nexen Sites",
  description: "Olvass a weboldal készítésről, olcsó weboldal készítő cég szolgáltatásairól és 3 nap alatt kész weboldal készítésről.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

