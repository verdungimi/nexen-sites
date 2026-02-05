"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

// Only create Convex client if URL is available
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

export default function ConvexProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // If Convex is not configured, just render children without provider
  if (!convex) {
    return <>{children}</>;
  }

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
