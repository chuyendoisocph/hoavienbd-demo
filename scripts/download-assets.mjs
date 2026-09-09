// Downloads all assets from nirvana.com.my to public/
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = "https://www.nirvana.com.my";
const OUT = "public";

// Map remote pathname -> local path under public/
const PATHS = [
  // hero / logo
  "/wp-content/uploads/2025/08/2023-%E5%AF%8C%E8%B2%B4Nirvana-master_Artboard-1-copy.png",
  // hero slider + culture + product imagery
  "/wp-content/uploads/2020/08/83609s.jpg",
  "/wp-content/uploads/2020/08/45.jpg",
  "/wp-content/uploads/2020/09/920.jpg",
  "/wp-content/uploads/2020/09/1661.jpg",
  // pre-plan icons
  "/wp-content/uploads/2020/09/PrePlan_Icon_Trust-Fund-150x150.png",
  "/wp-content/uploads/2020/09/PrePlan_Icon_FengShui.png",
  "/wp-content/uploads/2020/09/PrePlan_Icon_0-interest.png",
  "/wp-content/uploads/2020/09/PrePlan_Icon_Comprehensive.png",
  "/wp-content/uploads/2020/09/PrePlan_Icon_Majestic.png",
  // misc
  "/wp-content/uploads/2020/09/joe-yates-wNOymf_yTUA-unsplashaa.jpg",
  "/wp-content/uploads/2020/11/Stars.png",
  "/wp-content/uploads/2020/09/85_Weba.jpg",
  "/wp-content/uploads/2020/09/504.jpg",
  "/wp-content/uploads/2020/09/NRV08030_OKs.jpg",
  "/wp-content/uploads/2020/09/804.jpg",
  "/wp-content/uploads/2020/09/459.jpg",
  "/wp-content/uploads/2020/09/15455a.jpg",
  "/wp-content/uploads/2020/08/113.jpg",
  "/wp-content/uploads/2020/09/151a.jpg",
  "/wp-content/uploads/2020/09/chinh-le-duc-S9XD0IZ6iZA-unsplash_The-Funeral-scaled.jpg",
  "/wp-content/uploads/2020/09/158a.jpg",
  "/wp-content/uploads/2020/09/80_1a.jpg",
  "/wp-content/uploads/2020/08/1427.jpg",
  "/wp-content/uploads/2020/09/252a.jpg",
  // videos
  "/wp-content/uploads/2020/09/22222.mp4",
  "/wp-content/uploads/2020/08/resize-eng.mp4",
  // background images
  "/wp-content/uploads/2026/03/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner-1-scaled.jpg",
  "/wp-content/uploads/2025/07/2025_N3-Relocation_WEB_KS.jpg",
  "/wp-content/uploads/2022/04/2654962-01-scaled.jpg",
  "/wp-content/uploads/2022/01/amy-shamblen-pJ_DCj9KswI-unsplash-scaled.jpg",
  "/wp-content/uploads/2021/03/WebCover_1-01.jpg",
  "/wp-content/uploads/2021/03/A2S1-14-nw.jpg",
  "/wp-content/uploads/2021/06/NB_WebCover_1-01.jpg",
  "/wp-content/uploads/2020/08/alexandru-tudorache-JdjdIjzJl94-unsplash-scaled.jpg",
  "/wp-content/uploads/2020/09/NRV01561-1.jpg",
  "/wp-content/uploads/2020/08/NV-Lanscaping.jpg",
  // favicons
  "/wp-content/uploads/2020/10/cropped-Skype_Picture_2020_10_26T02_46_02_575Z-32x32.png",
  "/wp-content/uploads/2020/10/cropped-Skype_Picture_2020_10_26T02_46_02_575Z-192x192.png",
  "/wp-content/uploads/2020/10/cropped-Skype_Picture_2020_10_26T02_46_02_575Z-180x180.png",
];

function localFor(p) {
  // strip /wp-content/uploads/... -> images/<basename>, videos for mp4, seo for favicons
  let base = decodeURIComponent(p.split("/").pop());
  // ASCII-only filenames (the logo originally contains 富貴) — non-ASCII names break Next image preload headers
  if (base.includes("Nirvana-master")) base = "2023-Nirvana-master_Artboard-1-copy.png";
  if (p.endsWith(".mp4")) return join(OUT, "videos", base);
  if (base.includes("cropped-Skype")) return join(OUT, "seo", base);
  return join(OUT, "images", base);
}

async function dl(p) {
  const url = ORIGIN + p;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return { p, ok: false, status: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    const local = localFor(p);
    await mkdir(dirname(local), { recursive: true });
    await writeFile(local, buf);
    return { p: local, ok: true, kb: Math.round(buf.length / 1024) };
  } catch (e) {
    return { p, ok: false, err: String(e).slice(0, 80) };
  }
}

async function run() {
  const results = [];
  for (let i = 0; i < PATHS.length; i += 4) {
    const batch = PATHS.slice(i, i + 4);
    const r = await Promise.all(batch.map(dl));
    results.push(...r);
    r.forEach((x) => console.log(x.ok ? `OK  ${x.kb}KB  ${x.p}` : `FAIL ${x.status || x.err} ${x.p}`));
  }
  const ok = results.filter((r) => r.ok).length;
  console.log(`\nDone: ${ok}/${results.length} downloaded`);
}
run();
