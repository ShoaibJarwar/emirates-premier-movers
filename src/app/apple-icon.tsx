import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#0F172A",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 96 96" fill="none">
          <path d="M22 59L48 22L74 59" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 62H64V73H32V62Z" fill="#FFFFFF" />
          <path d="M42 50H54V62H42V50Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
