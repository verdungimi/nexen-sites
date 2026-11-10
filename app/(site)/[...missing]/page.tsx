import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Az oldal nem található", robots: { index: false } };

/**
 * Catches every address that no other route matches, so the visitor gets the site's own 404 page
 * (app/(site)/not-found.tsx) with the header and footer instead of the framework's bare one.
 */
export default function MissingPage() {
  notFound();
}
