import { readdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const sourceDir = process.argv[2];
if (!sourceDir) throw new Error("Usage: node scripts/inspect-360.mjs <source-directory>");

const alreadyUsed = new Set([
  "Cổng 1.jpg", "Đại Lộ Vĩnh Hằng.jpg", "Vĩnh Hằng Đài.jpg", "Chùa Thiên Phước.jpg",
  "Hồn Việt.jpg", "Khu Mộ Gia Tộc.jpg", "Khu Cội Nguồn.jpg", "Đài Hóa Thân Hoàn Vũ.jpg",
]);

async function jpgs(folder) {
  const entries = await readdir(folder, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const fullPath = path.join(folder, entry.name);
    if (entry.isDirectory()) found.push(...await jpgs(fullPath));
    else if (entry.name.toLowerCase().endsWith(".jpg") && !alreadyUsed.has(entry.name)) found.push(fullPath);
  }
  return found;
}

const files = (await jpgs(sourceDir)).sort((a, b) => a.localeCompare(b, "vi"));
const width = 360;
const height = 255;
const columns = 3;
const rows = 2;

for (let start = 0; start < files.length; start += columns * rows) {
  const batch = files.slice(start, start + columns * rows);
  const overlays = [];
  for (let i = 0; i < batch.length; i++) {
    const number = start + i + 1;
    const image = await sharp(batch[i])
      .extract({ left: 3072, top: 1900, width: 2048, height: 1280 })
      .resize(width, 225)
      .jpeg({ quality: 75 })
      .toBuffer();
    const label = Buffer.from(`<svg width="360" height="30"><rect width="360" height="30" fill="white"/><text x="8" y="21" font-family="Arial" font-size="15" fill="#172b45">${number}. ${path.basename(batch[i]).replaceAll("&", "&amp;")}</text></svg>`);
    const left = (i % columns) * width;
    const top = Math.floor(i / columns) * height;
    overlays.push({ input: image, left, top }, { input: label, left, top: top + 225 });
    process.stdout.write(`${number}. ${batch[i]}\n`);
  }
  const output = path.join(os.tmpdir(), `tour-360-inspect-${Math.floor(start / (columns * rows)) + 1}.webp`);
  await sharp({ create: { width: width * columns, height: height * rows, channels: 3, background: "#fff" } })
    .composite(overlays)
    .webp({ quality: 80 })
    .toFile(output);
  process.stdout.write(`Sheet: ${output}\n`);
}

for (const fileName of process.argv.slice(3)) {
  const source = files.find((file) => path.basename(file) === fileName);
  if (!source) throw new Error(`Not found among unused panoramas: ${fileName}`);
  const output = path.join(os.tmpdir(), `tour-360-full-${path.basename(fileName, ".jpg").replaceAll(/[^a-z0-9]/gi, "-")}.webp`);
  await sharp(source).resize(2048, 1024).webp({ quality: 75 }).toFile(output);
  process.stdout.write(`Full panorama: ${output}\n`);
}
