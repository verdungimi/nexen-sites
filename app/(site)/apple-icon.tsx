import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same mark as components/site/Logo.tsx: graphite square, two bone bars and a brass diagonal forming an "N".
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1D21",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="8" fill="#2D3238" />
          <rect x="7" y="7" width="5" height="18" rx="1.2" fill="#EDE8DF" />
          <rect x="20" y="7" width="5" height="18" rx="1.2" fill="#EDE8DF" />
          <path d="M7 7h5.5L25 25h-5.5z" fill="#C7A263" />
        </svg>
      </div>
    ),
    size
  );
}
