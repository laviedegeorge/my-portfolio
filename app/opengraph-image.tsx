import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kelechi Apugo — Lead Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#080808",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "80px",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Initials */}
      <div
        style={{
          fontSize: 120,
          fontStyle: "italic",
          color: "#edeae0",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: 40,
        }}
      >
        KA.
      </div>

      {/* Name + title */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          style={{
            fontSize: 42,
            color: "#edeae0",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Kelechi Apugo
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#7e7a76",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Lead Frontend Engineer
        </div>
      </div>
    </div>,
    { ...size },
  );
}
