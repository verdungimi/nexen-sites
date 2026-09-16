import { ImageResponse } from "next/og";

export const alt = "Nexen Sites – Weboldal, ami az áraidhoz illik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "Nexen Sites";
const HEADLINE = "Olyan weboldal, ami az áraidhoz illik.";
const SUBLINE = "Weboldalak bejáratott szolgáltató cégeknek";

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
          <svg width="56" height="56" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="6" fill="#C7A263" />
            <path
              d="M7 17V7l10 10V7"
              fill="none"
              stroke="#1A1D21"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
