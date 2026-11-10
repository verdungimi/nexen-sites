import { ImageResponse } from "next/og";

export const alt = "Nexen Sites – Weboldalkészítés ingyenes demóval. Előbb megnézed, utána fizetsz.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "Nexen Sites";
const LINE_1 = "Előbb megnézed.";
const LINE_2 = "Utána fizetsz.";
const SUBLINE = "Weboldalkészítés ingyenes demóval, az egész országban";

/**
 * Loads one cut of a Google font, subset to the given text.
 * The default ImageResponse font has no ő/ű. Returns null when the network is unavailable,
 * so the image still renders with the fallback font.
 */
async function loadFont(family: string, axes: string, text: string): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:${axes}&text=${encodeURIComponent(text)}`;
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
    loadFont("Fraunces", "opsz,wght@144,600", BRAND + LINE_1 + LINE_2),
    loadFont("Instrument+Sans", "wght@500", SUBLINE),
  ]);

  const fonts = [
    ...(display ? [{ name: "Fraunces", data: display, weight: 600 as const, style: "normal" as const }] : []),
    ...(text ? [{ name: "Instrument Sans", data: text, weight: 500 as const, style: "normal" as const }] : []),
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
          padding: "68px 80px 76px",
          background: "#0B1E3F",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="68" height="68" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#5EC2FF" />
            <rect x="7" y="7" width="5" height="18" rx="1.2" fill="#0B1E3F" />
            <rect x="20" y="7" width="5" height="18" rx="1.2" fill="#0B1E3F" />
            <path d="M7 7h5.5L25 25h-5.5z" fill="#FFFFFF" />
          </svg>
          <div style={{ fontFamily: "Fraunces", fontWeight: 600, fontSize: 44, color: "#FFFFFF" }}>{BRAND}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Fraunces", fontWeight: 600, fontSize: 124, lineHeight: 1, letterSpacing: -3, color: "#FFFFFF" }}>
            <div>{LINE_1}</div>
            <div>{LINE_2}</div>
          </div>
          <div style={{ fontFamily: "Instrument Sans", fontWeight: 500, fontSize: 36, color: "#5EC2FF", marginTop: 34 }}>{SUBLINE}</div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
