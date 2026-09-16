"use client";

import dynamic from "next/dynamic";

// Convex queries only run in the browser, and useQuery throws without a ConvexProvider.
const Gallery = dynamic(() => import("@/components/Gallery"), {
  ssr: false,
  loading: () => null,
});

/** Client wrapper for the live gallery. Renders nothing when Convex is not configured. */
export default function PortfolioContent() {
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    return null;
  }

  return <Gallery />;
}
