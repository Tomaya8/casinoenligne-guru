import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "casinoenligne.guru — Le Guide Ultime du Casino en Ligne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6c5ce7, #0097a7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            CG
          </div>
          <div style={{ display: "flex", fontSize: "36px", fontWeight: "bold" }}>
            <span style={{ color: "#6c5ce7" }}>casino</span>
            <span style={{ color: "#8888aa" }}>enligne</span>
            <span style={{ color: "#e6a817" }}>.guru</span>
          </div>
        </div>

        <div style={{ fontSize: "56px", fontWeight: "bold", color: "white", lineHeight: 1.2, marginBottom: "8px" }}>
          Le Guide Ultime du
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #6c5ce7, #a855f7)",
            backgroundClip: "text",
            color: "#6c5ce7",
            lineHeight: 1.2,
            marginBottom: "32px",
          }}
        >
          Casino en Ligne
        </div>

        <div style={{ fontSize: "24px", color: "#8888aa" }}>
          Comparatifs · Bonus · Stratégies · Jeux · 100% Francophone
        </div>

        <div
          style={{
            width: "120px",
            height: "4px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #e6a817, #f0c040)",
            marginTop: "32px",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
