import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same monogram as components/site/Logo.tsx: brass rounded square with a graphite "N".
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
        <svg width="132" height="132" viewBox="0 0 24 24">
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
      </div>
    ),
    size
  );
}
