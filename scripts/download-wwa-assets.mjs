import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const BASE = "https://www.nirvana.com.my";
const IMG = path.resolve("public/images");
const VID = path.resolve("public/videos");
await mkdir(IMG, { recursive: true });
await mkdir(VID, { recursive: true });

const images = [
  "/wp-content/uploads/2025/11/Map6_ENG.png",
  "/wp-content/uploads/2020/09/esteban-castle-MCJE6Zd0cLs-unsplash.jpg",
  "/wp-content/uploads/2020/08/IMG_8060-copy.jpg",
  "/wp-content/uploads/2020/10/New-Dato-Sri-Jeff-Kong_web.png",
  "/wp-content/uploads/2023/01/Award_JAN-2023_Artboard-15-1.jpg",
  "/wp-content/uploads/2023/01/Award_JAN-2023_Artboard-14-1.jpg",
  "/wp-content/uploads/2023/01/Award_JAN-2023_Artboard-13-1.jpg",
];
for (let i = 1; i <= 12; i++) images.push(`/wp-content/uploads/2023/01/Award_DEC-2022_Artboard-${i}.png`);

async function dl(p, dir, name) {
  const dest = path.join(dir, name || decodeURIComponent(p.split("/").pop()));
  if (existsSync(dest)) return `skip ${path.basename(dest)}`;
  const r = await fetch(BASE + p, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) return `FAIL ${path.basename(dest)} ${r.status}`;
  await writeFile(dest, Buffer.from(await r.arrayBuffer()));
  return `ok ${path.basename(dest)}`;
}

for (let i = 0; i < images.length; i += 4) {
  (await Promise.all(images.slice(i, i + 4).map((p) => dl(p, IMG)))).forEach((x) => console.log(x));
}
console.log(await dl("/wp-content/uploads/2020/10/2222222.mp4", VID, "wwa-hero.mp4"));
console.log("done");
