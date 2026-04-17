import { ImageResponse } from "next/og";

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
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          color: "#111827",
        }}
      >
        <div style={{ fontSize: 30, color: "#4f46e5", marginBottom: 16 }}>
          Job Application Tracker
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Organize your
          {"\n"}
          job search workflow
        </div>
        <div style={{ fontSize: 30, marginTop: 24, color: "#374151" }}>
          Track applications, interviews, and offers in one board.
        </div>
      </div>
    ),
    size,
  );
}
