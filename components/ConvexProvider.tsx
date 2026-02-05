"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useState, useEffect } from "react";

export default function ConvexProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [convexClient, setConvexClient] = useState<ConvexReactClient | null>(null);

  useEffect(() => {
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
    if (convexUrl) {
      const client = new ConvexReactClient(convexUrl);
      setConvexClient(client);
    }
  }, []);

  // If Convex is not configured, just render children without provider
  if (!convexClient) {
    return <>{children}</>;
  }

  return <ConvexProvider client={convexClient}>{children}</ConvexProvider>;
}
