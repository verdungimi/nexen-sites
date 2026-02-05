import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";

export function useConvexQuery<T>(
  query: (() => T | undefined) | undefined,
  fallback: T
): T {
  try {
    const result = query?.();
    return result ?? fallback;
  } catch (error) {
    console.error("Convex query error:", error);
    return fallback;
  }
}
