import type { NextRequest } from "next/server";

// Spam protection shared by the form APIs: a honeypot field, a minimum fill time and a per-IP rate limit.
// The rate limit lives in memory, so it is per server instance. It stops simple floods; it is not a firewall.

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 2500;

const hits = new Map<string, number[]>();

export function clientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

/** True when this IP may submit again. Records the attempt. */
export function allowRequest(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map small
  if (hits.size > 5000) {
    hits.forEach((times, key) => {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(key);
    });
  }
  return true;
}

/**
 * Bots fill every field and submit instantly. A filled honeypot or a too-fast submit is treated as spam.
 * The API answers such requests with a normal success so the bot learns nothing.
 */
export function looksLikeBot(data: Record<string, unknown>): boolean {
  if (typeof data.fax === "string" && data.fax.trim() !== "") return true;
  if (typeof data.elapsedMs === "number" && data.elapsedMs < MIN_FILL_MS) return true;
  return false;
}

export function asString(value: unknown, maxLength = 500): string {
  return typeof value === "string" ? value.slice(0, maxLength) : "";
}

/** Keeps only utm_* keys with short string values. */
export function sanitizeUtm(input: unknown): Record<string, string> {
  const result: Record<string, string> = {};
  if (!input || typeof input !== "object") return result;
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (/^utm_(source|medium|campaign|content|term)$/.test(key) && typeof value === "string" && value) {
      result[key] = value.slice(0, 120).replace(/[<>]/g, "");
    }
  }
  return result;
}
