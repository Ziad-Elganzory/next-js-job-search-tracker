import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "72px",
          color: "#111827",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#4f46e5", marginBottom: "16px" }}>
          Job Application Tracker
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: "1.1", display: "flex" }}>
          Organize your job search workflow
        </div>
        <div style={{ fontSize: 30, marginTop: "24px", color: "#374151" }}>
          Track applications, interviews, and offers in one board.
        </div>
      </div>
    ),
    size,
  );
}
