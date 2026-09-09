// Downloads burial-page assets from nirvana.com.my to public/
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = "https://www.nirvana.com.my";
const OUT = "public";

const PATHS = [
  // plot type slider images
  "/wp-content/uploads/2020/08/Nirvana-Semenyih-111.jpg",
  "/wp-content/uploads/2020/09/nirvana-32.jpg",
  "/wp-content/uploads/2020/09/nirvana-254.jpg",
  "/wp-content/uploads/2020/09/TR-1-03.jpg",
  "/wp-content/uploads/2020/08/Nirvana-Semenyih-128.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Semenyih-125.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Semenyih-467.jpg",
  "/wp-content/uploads/2020/08/Nirvana-Semenyih-394.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Semenyih-416A.jpg",
  "/wp-content/uploads/2020/09/newnewNirvana-Semenyih-432B.jpg",
  "/wp-content/uploads/2020/08/nirvana-64.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Semenyih-147.jpg",
  "/wp-content/uploads/2020/09/Nirvana-Semenyih-152B.jpg",
  "/wp-content/uploads/2020/09/nirvana-237.jpg",
  "/wp-content/uploads/2020/09/Christian-DB392-B.jpg",
  "/wp-content/uploads/2020/09/1660a.jpg",
  "/wp-content/uploads/2020/09/101.jpg",
  // commitment video poster + hero/commitment video
  "/wp-content/uploads/2020/09/video-commit.jpg",
  "/wp-content/uploads/2020/10/14444444.mp4",
];

function localFor(p) {
  const base = decodeURIComponent(p.split("/").pop());
  if (p.endsWith(".mp4")) return join(OUT, "videos", base);
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
    const r = await Promise.all(PATHS.slice(i, i + 4).map(dl));
    results.push(...r);
    r.forEach((x) => console.log(x.ok ? `OK  ${x.kb}KB  ${x.p}` : `FAIL ${x.status || x.err} ${x.p}`));
  }
  console.log(`\nDone: ${results.filter((r) => r.ok).length}/${results.length}`);
}
run();
