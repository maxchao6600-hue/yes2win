const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ASSETS = "C:/Users/maxch/.cursor/projects/d-yes2win/assets";
const OUT = path.join(process.cwd(), "public/images");

const map = [
  ["yes2win-home-hero.png", "brand/yes2win-home-hero"],
  ["yes2win-games-slots.png", "brand/yes2win-games-slots"],
  ["yes2win-games-live-casino.png", "brand/yes2win-games-live-casino"],
  ["yes2win-games-sports.png", "brand/yes2win-games-sports"],
  ["yes2win-games-fishing.png", "brand/yes2win-games-fishing"],
  ["yes2win-games-lottery.png", "brand/yes2win-games-lottery"],
  ["yes2win-promotion-welcome.png", "brand/yes2win-promotion-welcome"],
  ["yes2win-promotion-deposit.png", "brand/yes2win-promotion-deposit"],
  ["yes2win-promotion-weekly.png", "brand/yes2win-promotion-weekly"],
  ["yes2win-promotion-cashback.png", "brand/yes2win-promotion-cashback"],
  ["yes2win-promotion-vip.png", "brand/yes2win-promotion-vip"],
  ["yes2win-promotion-special.png", "brand/yes2win-promotion-special"],
  ["yes2win-vip-hero.png", "brand/yes2win-vip-hero"],
  ["yes2win-vip-personal.png", "brand/yes2win-vip-personal"],
  ["yes2win-vip-events.png", "brand/yes2win-vip-events"],
  ["yes2win-mobile-device.png", "brand/yes2win-mobile-device"],
  ["yes2win-partner-ecosystem.png", "brand/yes2win-partner-ecosystem"],
  ["yes2win-partner-tracking.png", "brand/yes2win-partner-tracking"],
  ["yes2win-about-ecosystem.png", "brand/yes2win-about-ecosystem"],
  ["yes2win-featured-games.png", "brand/yes2win-featured-games"],
  ["yes2win-responsible.png", "brand/yes2win-responsible"],
  ["yes2win-contact-support.png", "brand/yes2win-contact-support"],
  ["yes2win-register-journey.png", "brand/yes2win-register-journey"],
  ["yes2win-account-access.png", "brand/yes2win-account-access"],
];

async function ensureDir(filePath) {
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
}

async function convert(srcName, outBase) {
  const src = path.join(ASSETS, srcName);
  if (!fs.existsSync(src)) {
    console.warn("missing", src);
    return;
  }
  const webpOut = path.join(OUT, `${outBase}.webp`);
  await ensureDir(webpOut);
  const meta = await sharp(src).metadata();
  const isWide = /hero|featured|about|sports/.test(outBase);
  const width = Math.min(meta.width || 1600, isWide ? 1920 : 1600);
  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(webpOut);
  const size = Math.round((await fs.promises.stat(webpOut)).size / 1024);
  console.log("wrote", outBase, `${width}px`, `${size}KB`);
}

async function paymentIcon(label, filename, glyph) {
  const size = 512;
  const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#065f46"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="96" fill="url(#g)"/>
  <rect x="56" y="56" width="400" height="400" rx="72" fill="#064e3b" fill-opacity="0.55"/>
  ${glyph}
  <text x="256" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#ecfdf5">${label}</text>
</svg>`);
  const base = path.join(OUT, "payment", filename);
  await ensureDir(`${base}.png`);
  await sharp(svg).png().toFile(`${base}.png`);
  await sharp(svg).webp({ quality: 90 }).toFile(`${base}.webp`);
}

async function main() {
  for (const [src, out] of map) {
    await convert(src, out);
  }

  await paymentIcon("Bank", "bank", `<rect x="150" y="150" width="212" height="150" rx="18" fill="#34d399"/><rect x="170" y="180" width="172" height="18" fill="#022c22"/><rect x="170" y="220" width="110" height="14" fill="#022c22"/>`);
  await paymentIcon("E-Wallet", "ewallet", `<rect x="160" y="150" width="192" height="170" rx="28" fill="#34d399"/><circle cx="256" cy="230" r="34" fill="#022c22"/>`);
  await paymentIcon("DuitNow", "duitnow", `<circle cx="256" cy="220" r="78" fill="#34d399"/><path d="M220 220 L246 246 L300 190" stroke="#022c22" stroke-width="18" fill="none" stroke-linecap="round"/>`);
  await paymentIcon("TNG", "tng", `<rect x="150" y="160" width="212" height="150" rx="24" fill="#34d399"/><circle cx="256" cy="235" r="36" fill="#022c22"/>`);
  await paymentIcon("Online", "online", `<rect x="140" y="150" width="232" height="170" rx="18" fill="#34d399"/><rect x="164" y="176" width="184" height="90" rx="10" fill="#022c22"/>`);
  await paymentIcon("Crypto", "crypto", `<circle cx="256" cy="220" r="82" fill="#34d399"/><text x="256" y="236" text-anchor="middle" font-family="Arial" font-size="70" font-weight="700" fill="#022c22">₮</text>`);
  await paymentIcon("Cards", "cards", `<rect x="150" y="170" width="212" height="140" rx="18" fill="#34d399"/><rect x="170" y="200" width="172" height="22" fill="#022c22"/>`);
  await paymentIcon("GrabPay", "grab", `<rect x="150" y="160" width="212" height="160" rx="28" fill="#34d399"/><path d="M190 240 C220 180 292 180 322 240" stroke="#022c22" stroke-width="18" fill="none"/>`);

  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
