import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const BASE = "https://www.nirvana.com.my";
const OUT = path.resolve("public/images");

const paths = [
  "/wp-content/uploads/2020/08/Icon_1_Artboard-1.png",
  "/wp-content/uploads/2020/08/Icon_1_Artboard-2.png",
  "/wp-content/uploads/2020/08/Icon_1_Artboard-3.png",
  "/wp-content/uploads/2020/08/Icon_1_Artboard-4.png",
  "/wp-content/uploads/2021/05/P23_0950_REV-scaled.jpg",
  "/wp-content/uploads/2021/05/nfuguitang-25.jpg",
  "/wp-content/uploads/2021/05/nfuguitang-31.jpg",
  "/wp-content/uploads/2021/05/nfuguitang-4.jpg",
  "/wp-content/uploads/2021/05/NCKL-Parloir-scaled.jpg",
  "/wp-content/uploads/2021/05/Parlour-11-Buddist_REV-scaled.jpg",
  "/wp-content/uploads/2021/05/nUrn-honour-3.png",
  "/wp-content/uploads/2021/05/nUrn-blessing1-1.png",
  "/wp-content/uploads/2021/05/nurn-elegant-C.png",
  "/wp-content/uploads/2021/05/nurn-harmony.png",
  "/wp-content/uploads/2021/05/nCasket-Honour1.png",
  "/wp-content/uploads/2021/05/nCasket-Harmony1.png",
  "/wp-content/uploads/2021/05/nCasket-Elegant1.png",
  "/wp-content/uploads/2021/05/nCasket-Gracious-1-1.png",
  "/wp-content/uploads/2021/05/nCasket-Blessing1-1.png",
  "/wp-content/uploads/2020/08/129.jpg",
  "/wp-content/uploads/2020/09/1395a.jpg",
  "/wp-content/uploads/2020/08/chinh-le-duc-S9XD0IZ6iZA-unsplash-scaled.jpg",
];

await mkdir(OUT, { recursive: true });

async function dl(p) {
  const name = decodeURIComponent(p.split("/").pop());
  const dest = path.join(OUT, name);
  if (existsSync(dest)) return `skip ${name}`;
  const res = await fetch(BASE + p, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) return `FAIL ${name} (${res.status})`;
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return `ok   ${name} (${(buf.length / 1024).toFixed(0)}kb)`;
}

const batchSize = 4;
for (let i = 0; i < paths.length; i += batchSize) {
  const res = await Promise.all(paths.slice(i, i + batchSize).map(dl));
  res.forEach((r) => console.log(r));
}
console.log("done");
