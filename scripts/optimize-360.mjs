import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const sourceDir = process.argv[2];

if (!sourceDir) {
  throw new Error("Usage: node scripts/optimize-360.mjs <source-directory>");
}

const scenes = [
  ["cong-1", "Cổng 1.jpg"],
  ["dai-lo-vinh-hang", "Đại Lộ Vĩnh Hằng.jpg"],
  ["vinh-hang-dai", "Vĩnh Hằng Đài.jpg"],
  ["chua-thien-phuoc", "Chùa Thiên Phước.jpg"],
  ["hon-viet", "Hồn Việt.jpg"],
  ["khu-mo-gia-toc", "Khu Mộ Gia Tộc.jpg"],
  ["khu-coi-nguon", "Khu Cội Nguồn.jpg"],
  ["dai-hoa-than-hoan-vu", "Đài Hóa Thân Hoàn Vũ.jpg"],
  ["linh-hoa-tue-dan", "Linh Hoa Tuệ Đàn.jpg"],
  ["me-viet-nam-anh-hung", "Mẹ VNAH.jpg"],
  ["khu-b3", path.join("Chưa đặt tên", "Khu B3.jpg")],
  ["khu-b3-1", "Khu B3.1.jpg"],
  ["khu-b22", "Khu B22 - Đài Phật Văn Thù.jpg"],
  ["khu-f", "Khu F - Địa Tạng Vương Bồ Tát.jpg"],
  ["khu-g733", "Khu G733 - Đức Mẹ Maria.jpg"],
];

const outputDir = path.join(process.cwd(), "public", "images", "360");
await mkdir(outputDir, { recursive: true });

let sourceBytes = 0;
let outputBytes = 0;

for (const [slug, fileName] of scenes) {
  const source = path.join(sourceDir, fileName);
  const metadata = await sharp(source).metadata();
  if (metadata.width !== 8192 || metadata.height !== 4096) {
    throw new Error(`${fileName} is not an 8192×4096 equirectangular panorama`);
  }

  const panoramaPath = path.join(outputDir, `${slug}.webp`);
  const thumbnailPath = path.join(outputDir, `${slug}-tour-thumb.webp`);

  await sharp(source)
    .resize(4096, 2048, { fit: "fill" })
    .webp({ quality: 78, effort: 5 })
    .toFile(panoramaPath);

  await sharp(source)
    .extract({ left: 3072, top: 1900, width: 2048, height: 1280 })
    .resize(800, 500)
    .webp({ quality: 75, effort: 5 })
    .toFile(thumbnailPath);

  sourceBytes += (await stat(source)).size;
  const panoramaBytes = (await stat(panoramaPath)).size;
  const thumbnailBytes = (await stat(thumbnailPath)).size;
  outputBytes += panoramaBytes + thumbnailBytes;
  process.stdout.write(`${slug}: ${(panoramaBytes / 1048576).toFixed(2)} MB panorama, ${(thumbnailBytes / 1024).toFixed(0)} KB thumbnail\n`);
}

process.stdout.write(`Optimized ${scenes.length} scenes: ${(sourceBytes / 1048576).toFixed(1)} MB → ${(outputBytes / 1048576).toFixed(1)} MB\n`);
