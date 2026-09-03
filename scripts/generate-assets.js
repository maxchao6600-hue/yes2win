const sharp = require("sharp");
const fs = require("fs");

async function makeIcon(logo, size, out) {
  const padded = Math.floor(size * 0.72);
  const resized = await sharp(logo)
    .resize({ width: padded, height: padded, fit: "inside" })
    .png()
    .toBuffer();
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 6, g: 78, b: 59, alpha: 1 },
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png()
    .toFile(out);
}

async function main() {
  const logo = "public/images/logo.png";
  await fs.promises.mkdir("public/icons", { recursive: true });
  await fs.promises.mkdir("public/images/og", { recursive: true });

  const meta = await sharp(logo).metadata();
  console.log("logo", meta.width, meta.height, meta.format);

  await makeIcon(logo, 180, "public/icons/apple-touch-icon.png");
  await makeIcon(logo, 192, "public/icons/icon-192.png");
  await makeIcon(logo, 512, "public/icons/icon-512.png");
  await makeIcon(logo, 32, "public/icons/favicon-32.png");
  await sharp("public/icons/favicon-32.png").resize(32, 32).toFile("public/favicon.ico");

  const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="55%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="980" cy="120" r="180" fill="#10b981" fill-opacity="0.18"/>
  <circle cx="160" cy="520" r="220" fill="#34d399" fill-opacity="0.12"/>
  <text x="80" y="290" font-family="Arial, sans-serif" font-size="28" fill="#a7f3d0" letter-spacing="6">OFFICIAL PARTNER</text>
  <text x="80" y="370" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff">YES2WIN</text>
  <text x="80" y="440" font-family="Arial, sans-serif" font-size="30" fill="#d1fae5">Your Gateway to the Winning Ecosystem</text>
  <text x="80" y="510" font-family="Arial, sans-serif" font-size="22" fill="#6ee7b7">YES is the Choice. WIN is the Result.</text>
</svg>`);

  const ogLogo = await sharp(logo)
    .resize({ width: 420, height: 140, fit: "inside" })
    .png()
    .toBuffer();

  await sharp(svg).png().toFile("public/images/og/og-base.png");
  await sharp("public/images/og/og-base.png")
    .composite([{ input: ogLogo, top: 70, left: 80 }])
    .toFile("public/images/og/og-default.png");
  await fs.promises.unlink("public/images/og/og-base.png");

  await sharp(logo).webp({ quality: 90 }).toFile("public/images/logo.webp");
  console.log("assets-ok");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
