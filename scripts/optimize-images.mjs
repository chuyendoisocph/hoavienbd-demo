import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imageRoot = path.resolve("public/images");
const targets = [
  "hvbd/TV da sua.jpg",
  "1660a.jpg",
  "775_Web.jpg",
  "115_Web.jpg",
  "hvbd/thien-phuoc-garden-angle.jpg",
  "hvbd/linh-hoa-tue-dan-3.jpg",
  "hvbd/thien-phuoc-garden-path.jpg",
  "hvbd/thien-phuoc-ceremony.jpg",
  "hvbd/columbarium-altar.jpg",
  "hvbd/thien-phuoc-courtyard.jpg",
  "hvbd/thien-phuoc-front.jpg",
];

for (const relativePath of targets) {
  const sourcePath = path.join(imageRoot, relativePath);
  const temporaryPath = `${sourcePath}.optimized`;
  const before = (await fs.stat(sourcePath)).size;

  if (before < 700 * 1024) {
    console.log(`${relativePath}: skipped (already below 700 KB)`);
    continue;
  }

  await sharp(sourcePath)
    .rotate()
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(temporaryPath);

  await fs.rename(temporaryPath, sourcePath);
  const after = (await fs.stat(sourcePath)).size;
  const saving = Math.round((1 - after / before) * 100);
  console.log(`${relativePath}: ${saving}% smaller`);
}

for (const relativePath of ["hero-dji0305-poster.webp", "toan-canh-dji0304-poster.webp"]) {
  const sourcePath = path.join(imageRoot, relativePath);
  const outputPath = sourcePath.replace(/\.webp$/, "-optimized.webp");
  const before = (await fs.stat(sourcePath)).size;

  try {
    await fs.access(outputPath);
    console.log(`${relativePath}: skipped (optimized copy exists)`);
    continue;
  } catch {
    // Continue and create the optimized derivative.
  }

  if (before < 160 * 1024) {
    console.log(`${relativePath}: skipped (already below 160 KB)`);
    continue;
  }

  await sharp(sourcePath)
    .rotate()
    .resize({ width: 1600, height: 1000, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 58, effort: 6 })
    .toFile(outputPath);

  const after = (await fs.stat(outputPath)).size;
  const saving = Math.round((1 - after / before) * 100);
  console.log(`${relativePath}: ${saving}% smaller`);
}
