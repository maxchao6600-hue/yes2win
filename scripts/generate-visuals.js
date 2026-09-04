const sharp = require("sharp");
const fs = require("fs");

async function ensureDirs() {
  for (const dir of [
    "public/images/categories",
    "public/images/promotions",
    "public/images/vip",
    "public/images/payment",
    "public/images/mobile",
    "public/images/partner",
    "public/images/home",
    "public/images/about",
    "public/images/og",
  ]) {
    await fs.promises.mkdir(dir, { recursive: true });
  }
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function gradientSvg(width, height, title, subtitle, accent = "#34d399", dark = "#022c22") {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${dark}"/>
      <stop offset="55%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <radialGradient id="glow" cx="70%" cy="20%" r="50%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  <circle cx="${width * 0.15}" cy="${height * 0.8}" r="${Math.min(width, height) * 0.28}" fill="${accent}" fill-opacity="0.12"/>
  <circle cx="${width * 0.88}" cy="${height * 0.18}" r="${Math.min(width, height) * 0.2}" fill="#10b981" fill-opacity="0.18"/>
  <text x="48" y="${height * 0.42}" font-family="Arial, sans-serif" font-size="${Math.round(height * 0.085)}" font-weight="700" fill="#ffffff">${safeTitle}</text>
  <text x="48" y="${height * 0.55}" font-family="Arial, sans-serif" font-size="${Math.round(height * 0.045)}" fill="#a7f3d0">${safeSubtitle}</text>
  <rect x="48" y="${height * 0.68}" width="96" height="8" rx="4" fill="${accent}"/>
</svg>`);
}

async function writeVisual(svg, outPng, outWebp) {
  const png = await sharp(svg).png().toBuffer();
  await sharp(png).toFile(outPng);
  await sharp(png).webp({ quality: 86 }).toFile(outWebp);
}

async function iconTile(label, pathBase, symbol) {
  const size = 512;
  const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="72" fill="url(#g)"/>
  <circle cx="256" cy="210" r="110" fill="#10b981" fill-opacity="0.25"/>
  ${symbol}
  <text x="256" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#ecfdf5">${label}</text>
</svg>`);
  await writeVisual(svg, `${pathBase}.png`, `${pathBase}.webp`);
}

async function main() {
  await ensureDirs();

  // Download bg if missing
  try {
    const res = await fetch("https://m-yes2win.com/bg.png");
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.promises.writeFile("public/images/home/bg-ref.png", buf);
      await sharp(buf).resize(1600).webp({ quality: 80 }).toFile("public/images/home/hero-bg.webp");
      console.log("hero-bg ok");
    }
  } catch (e) {
    console.log("bg download skipped", e.message);
  }

  // Convert signup art
  if (fs.existsSync("public/images/home/signin-signup.jpg")) {
    await sharp("public/images/home/signin-signup.jpg")
      .resize(1400)
      .webp({ quality: 82 })
      .toFile("public/images/home/account-access.webp");
    await sharp("public/images/home/signin-signup.jpg")
      .resize(1200, 630, { fit: "cover" })
      .webp({ quality: 82 })
      .toFile("public/images/about/platform-access.webp");
  }

  const categories = [
    ["slots", "SLOT GAMES", "Classic Video Jackpot"],
    ["live-casino", "LIVE CASINO", "Baccarat Roulette Blackjack"],
    ["sports", "SPORTS", "Football Basketball Tennis"],
    ["fishing", "FISHING", "Interactive catch-style play"],
    ["lottery", "LOTTERY 4D", "Draw-style entertainment"],
  ];
  for (const [id, title, sub] of categories) {
    await writeVisual(
      gradientSvg(1200, 750, title, sub),
      `public/images/categories/${id}.png`,
      `public/images/categories/${id}.webp`,
    );
  }

  const promos = [
    ["welcome", "WELCOME OFFER", "Start your YES2WIN journey"],
    ["deposit", "DEPOSIT PROMOS", "Check live platform terms"],
    ["weekly", "WEEKLY CAMPAIGNS", "Recurring member value"],
    ["cashback", "CASHBACK REBATE", "Loyalty-style rewards"],
    ["vip", "VIP BENEFITS", "Recognition & priority care"],
    ["special", "SPECIAL CAMPAIGNS", "Seasonal & event offers"],
  ];
  for (const [id, title, sub] of promos) {
    await writeVisual(
      gradientSvg(1200, 700, title, sub, "#6ee7b7"),
      `public/images/promotions/${id}.png`,
      `public/images/promotions/${id}.webp`,
    );
  }

  await writeVisual(gradientSvg(1400, 900, "YES2WIN VIP", "Premium member experience", "#fbbf24", "#022c22"), "public/images/vip/hero.png", "public/images/vip/hero.webp");
  await writeVisual(gradientSvg(1200, 800, "PERSONALISED", "Service built around you", "#34d399"), "public/images/vip/personal.png", "public/images/vip/personal.webp");
  await writeVisual(gradientSvg(1200, 800, "PRIORITY CARE", "Elevated support pathways", "#10b981"), "public/images/vip/support.png", "public/images/vip/support.webp");
  await writeVisual(gradientSvg(1200, 800, "EXCLUSIVE", "Events & recognition", "#a7f3d0"), "public/images/vip/events.png", "public/images/vip/events.webp");

  const payments = [
    ["bank", "Bank Transfer", `<path d="M120 300 L256 180 L392 300 Z" fill="#ecfdf5"/><rect x="150" y="310" width="212" height="110" rx="12" fill="#a7f3d0"/>`],
    ["ewallet", "E-Wallet", `<rect x="150" y="160" width="212" height="150" rx="28" fill="#ecfdf5"/><circle cx="256" cy="235" r="34" fill="#10b981"/>`],
    ["duitnow", "DuitNow", `<circle cx="256" cy="220" r="90" fill="#ecfdf5"/><text x="256" y="235" text-anchor="middle" font-size="48" font-weight="700" fill="#047857">DN</text>`],
    ["tng", "Touch 'n Go", `<rect x="140" y="150" width="232" height="160" rx="24" fill="#ecfdf5"/><text x="256" y="245" text-anchor="middle" font-size="42" font-weight="700" fill="#047857">TNG</text>`],
    ["online", "Online Banking", `<rect x="150" y="150" width="212" height="170" rx="18" fill="#ecfdf5"/><rect x="180" y="190" width="152" height="18" rx="6" fill="#10b981"/><rect x="180" y="230" width="110" height="18" rx="6" fill="#6ee7b7"/>`],
    ["crypto", "USDT / Crypto", `<circle cx="256" cy="220" r="88" fill="#ecfdf5"/><text x="256" y="238" text-anchor="middle" font-size="54" font-weight="700" fill="#047857">₮</text>`],
    ["cards", "Bank Cards", `<rect x="140" y="170" width="232" height="150" rx="22" fill="#ecfdf5"/><rect x="160" y="200" width="80" height="28" rx="6" fill="#10b981"/>`],
    ["grab", "GrabPay", `<rect x="140" y="160" width="232" height="160" rx="28" fill="#ecfdf5"/><text x="256" y="250" text-anchor="middle" font-size="40" font-weight="700" fill="#047857">GP</text>`],
  ];
  for (const [id, label, symbol] of payments) {
    await iconTile(label, `public/images/payment/${id}`, symbol);
  }

  await writeVisual(gradientSvg(1200, 1600, "MOBILE READY", "Browser • Android • iOS", "#34d399"), "public/images/mobile/hero.png", "public/images/mobile/hero.webp");
  await writeVisual(gradientSvg(1000, 1600, "YES2WIN", "Responsive lobby", "#6ee7b7"), "public/images/mobile/phone.png", "public/images/mobile/phone.webp");
  await writeVisual(gradientSvg(1400, 900, "PLAY ANYWHERE", "Optimised for phones", "#10b981"), "public/images/mobile/devices.png", "public/images/mobile/devices.webp");

  await writeVisual(gradientSvg(1400, 900, "PARTNER WITH YES2WIN", "Build • Share • Grow", "#34d399"), "public/images/partner/hero.png", "public/images/partner/hero.webp");
  await writeVisual(gradientSvg(1200, 800, "REFERRAL FLOW", "Audience growth tools", "#6ee7b7"), "public/images/partner/network.png", "public/images/partner/network.webp");
  await writeVisual(gradientSvg(1200, 800, "MARKETING KIT", "Brand-safe resources", "#10b981"), "public/images/partner/resources.png", "public/images/partner/resources.webp");
  await writeVisual(gradientSvg(1200, 800, "TRACKING", "Progress & reporting", "#a7f3d0"), "public/images/partner/tracking.png", "public/images/partner/tracking.webp");

  await writeVisual(gradientSvg(1600, 900, "YES2WIN ECOSYSTEM", "Official Partner Gateway", "#34d399"), "public/images/home/ecosystem.png", "public/images/home/ecosystem.webp");
  await writeVisual(gradientSvg(1400, 900, "FIND YOUR NEXT FAVORITE", "Multi-category entertainment", "#6ee7b7"), "public/images/home/featured.png", "public/images/home/featured.webp");
  await writeVisual(gradientSvg(1400, 900, "HOW TO JOIN", "Register in clear steps", "#10b981"), "public/images/home/join.png", "public/images/home/join.webp");
  await writeVisual(gradientSvg(1400, 900, "WHY YES2WIN", "Games • Offers • Access", "#34d399"), "public/images/home/why.png", "public/images/home/why.webp");
  await writeVisual(gradientSvg(1400, 900, "PLAY RESPONSIBLY", "18+ • Stay in control", "#a7f3d0", "#064e3b"), "public/images/home/responsible.png", "public/images/home/responsible.webp");

  await writeVisual(gradientSvg(1400, 900, "ABOUT YES2WIN", "Brand & partner gateway", "#34d399"), "public/images/about/hero.png", "public/images/about/hero.webp");
  await writeVisual(gradientSvg(1200, 800, "ECOSYSTEM MAP", "Games • VIP • Payments", "#10b981"), "public/images/about/map.png", "public/images/about/map.webp");

  // OG variants
  const ogs = [
    ["home", "YES2WIN Official Partner"],
    ["games", "YES2WIN Games"],
    ["promotions", "YES2WIN Promotions"],
    ["vip", "YES2WIN VIP"],
    ["payment", "YES2WIN Payments"],
    ["mobile", "YES2WIN Mobile"],
    ["partner", "YES2WIN Partner"],
    ["faq", "YES2WIN FAQ"],
  ];
  for (const [id, title] of ogs) {
    const svg = gradientSvg(1200, 630, title, "YES is the Choice. WIN is the Result.");
    await sharp(svg).png().toFile(`public/images/og/og-${id}.png`);
  }

  // Prefer official logo
  if (fs.existsSync("public/images/logo-official.png")) {
    await sharp("public/images/logo-official.png").png().toFile("public/images/logo.png");
    await sharp("public/images/logo-official.png").webp({ quality: 90 }).toFile("public/images/logo.webp");
  }

  console.log("visual-assets-ready");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
