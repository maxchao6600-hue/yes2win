const sharp = require("sharp");
const fs = require("fs");

async function main() {
  const src = "public/images/logo.png";
  const meta = await sharp(src).metadata();
  console.log("logo", meta.width, meta.height);

  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  let bestX = 100;
  let bestScore = -1;
  for (let cx = 60; cx <= 140; cx++) {
    let score = 0;
    for (let y = 0; y < h; y++) {
      for (let x = cx - 20; x <= cx + 20; x++) {
        if (x < 0 || x >= w) continue;
        const i = (y * w + x) * 4;
        const a = data[i + 3];
        const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
        if (a > 40 && lum > 160) score++;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestX = cx;
    }
  }
  console.log("chip center x", bestX, "score", bestScore);

  const size = Math.min(h, 56);
  const left = Math.max(0, Math.round(bestX - size / 2));
  const top = Math.max(0, Math.round((h - size) / 2));
  const extract = {
    left,
    top,
    width: Math.min(size, w - left),
    height: Math.min(size, h - top),
  };

  await fs.promises.mkdir("public/icons", { recursive: true });

  async function makeIcon(out, dim, padRatio = 0.16) {
    const inner = Math.round(dim * (1 - padRatio * 2));
    const resized = await sharp(src)
      .extract(extract)
      .resize(inner, inner, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    const bg = await sharp({
      create: {
        width: dim,
        height: dim,
        channels: 4,
        background: { r: 6, g: 78, b: 59, alpha: 1 },
      },
    })
      .png()
      .toBuffer();

    await sharp(bg)
      .composite([{ input: resized, gravity: "centre" }])
      .png()
      .toFile(out);
    console.log("wrote", out);
  }

  await makeIcon("public/icons/favicon-32.png", 32, 0.12);
  await makeIcon("public/icons/apple-touch-icon.png", 180);
  await makeIcon("public/icons/icon-192.png", 192);
  await makeIcon("public/icons/icon-512.png", 512);
  await makeIcon("src/app/icon.png", 512);
  await makeIcon("src/app/apple-icon.png", 180);

  await sharp(src)
    .extract(extract)
    .resize(256, 256, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile("public/icons/yes2win-mark.png");

  // Multi-resolution ICO via PNG packs is limited; write a crisp 48px PNG renamed through sharp
  await sharp("public/icons/favicon-32.png").resize(48, 48).png().toFile("public/favicon.ico");
  // Also keep a real PNG favicon for modern browsers
  await makeIcon("public/favicon.png", 48, 0.12);

  console.log("favicon pipeline done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
