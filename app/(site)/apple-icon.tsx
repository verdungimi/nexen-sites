import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same mark as components/site/Logo.tsx: dark blue square, two white bars and a light blue diagonal forming an "N".
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0B1E3F" }}>
        <svg width="132" height="132" viewBox="0 0 32 32">
          <rect x="7" y="7" width="5" height="18" rx="1.2" fill="#FFFFFF" />
          <rect x="20" y="7" width="5" height="18" rx="1.2" fill="#FFFFFF" />
          <path d="M7 7h5.5L25 25h-5.5z" fill="#5EC2FF" />
        </svg>
      </div>
    ),
    size
  );
}
