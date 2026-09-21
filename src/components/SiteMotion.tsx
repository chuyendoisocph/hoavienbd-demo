"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = "main > section, main > article";

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector)
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("motion-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      }
    );

    const animationFrame = window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        const isAlreadyVisible =
          element.getBoundingClientRect().top <= window.innerHeight * 0.92;

        if (isAlreadyVisible) {
          element.classList.add("motion-visible");
          return;
        }

        element.classList.add("motion-reveal");
        observer.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
