"use client";

import { useEffect, useRef, useState } from "react";
import { WWA_STATS, type Stat } from "@/lib/wwa-content";

function Counter({ stat }: { stat: Stat }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(stat.value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [stat.value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-[48px] font-bold leading-none text-brand md:text-[60px]">
        {value.toLocaleString("en-US")}
        {stat.suffix}
      </p>
      <p className="mt-3 text-[16px] tracking-[1px] text-[#666]">{stat.label}</p>
    </div>
  );
}

export function WwaStats() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-y-12 px-6 md:grid-cols-4">
        {WWA_STATS.map((stat) => (
          <Counter key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
