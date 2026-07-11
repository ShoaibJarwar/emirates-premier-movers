import { ImageResponse } from "next/og";
import { company } from "@/lib/site-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0F172A",
          backgroundImage:
            "radial-gradient(circle at 8% 10%, rgba(245,158,11,0.35), transparent 45%), radial-gradient(circle at 92% 92%, rgba(245,158,11,0.18), transparent 40%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#0F172A",
              border: "2px solid rgba(245,158,11,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 96 96" fill="none">
              <path d="M22 59L48 22L74 59" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32 62H64V73H32V62Z" fill="#FFFFFF" />
              <path d="M42 50H54V62H42V50Z" fill="#FFFFFF" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, color: "#FFFFFF" }}>{company.name}</span>
            <span style={{ fontSize: 20, color: "#F59E0B", fontWeight: 600, letterSpacing: 1 }}>
              MOVERS &amp; PACKERS · UAE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 980 }}>
          <span style={{ fontSize: 54, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15 }}>
            {company.tagline}
          </span>
          <span style={{ fontSize: 24, color: "#CBD5E1" }}>{company.hours} · {company.phone}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
