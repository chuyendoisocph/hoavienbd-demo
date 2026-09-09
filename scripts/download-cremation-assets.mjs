// Downloads cremation/columbaria-page assets from nirvana.com.my to public/images
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = "https://www.nirvana.com.my";
const OUT = "public";

const PATHS = [
  "/wp-content/uploads/2020/09/NRV01561.jpg", // hero bg
  "/wp-content/uploads/2020/09/IMG_9472a.jpg", // 360 poster
  // Luxury
  "/wp-content/uploads/2020/08/Nirvana-Shah-Alam-58.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Shah-Alam-70-Display.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Shah-Alam-92.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Shah-Alam-12-master.jpg",
  "/wp-content/uploads/2020/09/NRV08043_OKs.jpg",
  // Modern
  "/wp-content/uploads/2020/09/NB2S3_S_1-scaled.jpg",
  "/wp-content/uploads/2020/09/NB2S3_S.jpg",
  "/wp-content/uploads/2020/09/NA1S7_S.jpg",
  "/wp-content/uploads/2020/09/NRV07986_OKs.jpg",
  // Ancient Chinese
  "/wp-content/uploads/2020/09/OV-17-Display-scaled.jpg",
  "/wp-content/uploads/2020/09/OV-71.jpg",
  "/wp-content/uploads/2020/09/river2.jpg",
  "/wp-content/uploads/2021/06/Untitled-02-scaled.jpg",
  "/wp-content/uploads/2021/06/Untitled-01-scaled.jpg",
  // Christian
  "/wp-content/uploads/2020/09/NRV07959_OKs.jpg",
  "/wp-content/uploads/2020/09/NRV07955_OKs.jpg",
  "/wp-content/uploads/2020/09/NB1S21_S.jpg",
  "/wp-content/uploads/2020/09/NRV01489b.jpg",
  "/wp-content/uploads/2022/03/0923-3-scaled.jpg",
  // Rhyme of Life
  "/wp-content/uploads/2021/03/A2S1-3-2-nw.jpg",
  // Urn Garden
  "/wp-content/uploads/2020/09/Nirvana-Shah-Alam-436a.jpg",
  "/wp-content/uploads/2020/09/NRV08116_OKs.jpg",
  "/wp-content/uploads/2020/09/NRV08114_OKs.jpg",
  "/wp-content/uploads/2020/09/NRV08094_OKs.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Shah-Alam-420a.jpg",
  // READ cards
  "/wp-content/uploads/2020/09/New_04.jpg",
  "/wp-content/uploads/2020/09/NA1S2_S.jpg",
  "/wp-content/uploads/2020/10/NRV01553b_web.jpg",
];

async function dl(p) {
  const url = ORIGIN + p;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return { p, ok: false, status: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    const local = join(OUT, "images", decodeURIComponent(p.split("/").pop()));
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
    const r = await Promise.all(PATHS.slice(i, i + 4).map(dl));
    results.push(...r);
    r.forEach((x) => console.log(x.ok ? `OK ${x.kb}KB ${x.p}` : `FAIL ${x.status || x.err} ${x.p}`));
  }
  console.log(`\nDone: ${results.filter((r) => r.ok).length}/${results.length}`);
}
run();
