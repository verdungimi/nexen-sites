"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = typeof window !== "undefined" 
  ? process.env.NEXT_PUBLIC_CONVEX_URL 
  : process.env.NEXT_PUBLIC_CONVEX_URL;

// Create client immediately if URL is available
const convexClient = convexUrl ? new ConvexReactClient(convexUrl) : null;

export default function ConvexProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // If Convex is not configured, just render children without provider
  if (!convexClient) {
    return <>{children}</>;
  }

  return <ConvexProvider client={convexClient}>{children}</ConvexProvider>;
}
