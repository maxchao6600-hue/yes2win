import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, rgb(2, 44, 34) 0%, rgb(6, 78, 59) 45%, rgb(16, 185, 129) 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(110, 231, 183, 0.3), transparent 38%), radial-gradient(circle at 80% 75%, rgba(52, 211, 153, 0.26), transparent 34%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 28,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "rgb(209, 250, 229)",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "rgb(110, 231, 183)",
              }}
            />
            Official Partner
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
            <div style={{ fontSize: 82, fontWeight: 800, letterSpacing: -2 }}>YES2WIN</div>
            <div style={{ marginTop: 14, fontSize: 34, fontWeight: 600, color: "rgb(236, 253, 245)" }}>
              Your gateway to the winning ecosystem
            </div>
            <div style={{ marginTop: 24, fontSize: 26, lineHeight: 1.4, color: "rgba(255,255,255,0.9)" }}>
              Games, promotions, VIP, payments, mobile access and partner pathways in one premium green ecosystem.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              fontSize: 24,
              color: "rgb(209, 250, 229)",
            }}
          >
            <div>Slots</div>
            <div>Live Casino</div>
            <div>Sports</div>
            <div>Fishing</div>
            <div>Lottery</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
