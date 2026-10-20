import { ImageResponse } from "next/og";

export const alt = "KOKEN International FZ-LLC – HNB production and granules manufacturing in the UAE";
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #071f4d, #155fd6)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, textTransform: "uppercase", opacity: 0.8 }}>
          UAE HNB production · Ras Al Khaimah
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>KOKEN International FZ-LLC</div>
        <div style={{ fontSize: 38, marginTop: 28, opacity: 0.92, lineHeight: 1.3 }}>
          HNB granules manufacturing, tobacco and herbal sticks, OEM and private label for global B2B buyers.
        </div>
      </div>
    ),
    size,
  );
}
