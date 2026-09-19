import { ImageResponse } from "next/og";

export const alt = "Nexen Sites – Weboldalkészítés szolgáltató cégeknek";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "Nexen Sites";
const HEADLINE = "Weboldalkészítés szolgáltató cégeknek";
const SUBLINE = "A jó ügyfél már az első hívás előtt téged választ.";

/**
 * Loads an Archivo cut from Google Fonts, subset to the given text.
 * The default ImageResponse font has no ő/ű, and Archivo is the site's typeface anyway.
 * Returns null when the network is unavailable, so the image still renders with the fallback font.
 */
async function loadArchivo(axes: string, text: string): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=Archivo:${axes}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl)).text();
    const fontUrl = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/)?.[1];
    if (!fontUrl) return null;
    const response = await fetch(fontUrl);
    return response.ok ? await response.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [display, text] = await Promise.all([
    loadArchivo("wdth,wght@75,600", BRAND + HEADLINE),
    loadArchivo("wght@400", SUBLINE),
  ]);

  const fonts = [
    ...(display ? [{ name: "Archivo Display", data: display, weight: 600 as const, style: "normal" as const }] : []),
    ...(text ? [{ name: "Archivo", data: text, weight: 400 as const, style: "normal" as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px 80px",
          background: "#1A1D21",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="9" fill="#2D3238" />
            <rect x="8" y="8" width="4" height="16" rx="1.1" fill="#EDE8DF" />
            <rect x="20" y="8" width="4" height="16" rx="1.1" fill="#EDE8DF" />
            <path d="M8 8h4.4L24 24h-4.4z" fill="#C7A263" />
          </svg>
          <div style={{ fontFamily: "Archivo Display", fontWeight: 600, fontSize: 44, color: "#EDE8DF" }}>{BRAND}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Archivo Display",
              fontWeight: 600,
              fontSize: 112,
              lineHeight: 0.98,
              letterSpacing: -2.5,
              color: "#EDE8DF",
              maxWidth: 940,
            }}
          >
            {HEADLINE}
          </div>
          <div style={{ fontFamily: "Archivo", fontWeight: 400, fontSize: 38, color: "#A7A197", marginTop: 36 }}>
            {SUBLINE}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
