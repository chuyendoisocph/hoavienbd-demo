"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SECTION_SELECTOR = "main > section, main > article";

/**
 * Chuyển động toàn site. Giữ ở mức tiết chế cho một trang tưởng niệm:
 * 1. Hero: chữ hiện dần theo thứ tự, dẫn mắt từ tên hoa viên xuống tổng đài.
 * 2. Section: hiện khi cuộn tới, giúp người đọc tập trung từng phần.
 * 3. Nhóm thẻ [data-stagger]: các thẻ lần lượt hiện, cho thấy đây là một danh sách.
 * 4. [data-parallax]: ảnh nền trôi chậm hơn trang, tạo chiều sâu. Chỉ chạy trên desktop.
 *
 * Khi người dùng bật "giảm chuyển động", không có animation nào chạy và
 * cũng không phần tử nào bị ẩn, vì trạng thái ẩn chỉ đặt bằng JS lúc chạy.
 */
export function SiteMotion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motionOk: "(prefers-reduced-motion: no-preference)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { motionOk, isDesktop } = context.conditions as {
            motionOk: boolean;
            isDesktop: boolean;
          };

          if (!motionOk) return;

          // Viewport cao 0 (tab nền, khung xem bị ẩn) làm mọi mốc ScrollTrigger
          // sai và nội dung sẽ kẹt ở trạng thái ẩn. Trường hợp đó thì không animate.
          if (!window.innerHeight) return;

          const ease = "power2.out";
          const refresh = () => ScrollTrigger.refresh();
          const staggerItems: HTMLElement[] = [];

          // 1. Hero
          const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");

          if (heroItems.length) {
            gsap.from(heroItems, {
              opacity: 0,
              y: 18,
              duration: 0.8,
              ease,
              stagger: 0.12,
              delay: 0.1,
            });
          }

          // 2. Section
          const sections = gsap.utils
            .toArray<HTMLElement>(SECTION_SELECTOR)
            .filter((section) => !section.hasAttribute("data-no-reveal"));
          const [firstSection, ...restSections] = sections;
          const revealTargets = heroItems.length ? restSections : sections;

          if (!heroItems.length && firstSection) {
            // Trang không có hero riêng: section đầu vẫn hiện ngay, không chờ cuộn.
            gsap.from(firstSection, { opacity: 0, y: 20, duration: 0.7, ease });
          }

          if (revealTargets.length) {
            gsap.set(revealTargets, { opacity: 0, y: 24 });

            ScrollTrigger.batch(revealTargets, {
              start: "top 88%",
              once: true,
              onEnter: (batch) =>
                gsap.to(batch, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease,
                  stagger: 0.08,
                  overwrite: true,
                }),
            });
          }

          // 3. Nhóm thẻ
          gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
            const items = gsap.utils.toArray<HTMLElement>(group.children);
            if (items.length < 2) return;

            staggerItems.push(...items);
            gsap.set(items, { opacity: 0, y: 18 });

            ScrollTrigger.create({
              trigger: group,
              start: "top 85%",
              once: true,
              onEnter: () =>
                gsap.to(items, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease,
                  stagger: 0.1,
                  overwrite: true,
                }),
            });
          });

          // 4. Parallax
          if (isDesktop) {
            gsap.utils
              .toArray<HTMLElement>("[data-parallax]")
              .forEach((layer) => {
                gsap.fromTo(
                  layer,
                  { yPercent: -6 },
                  {
                    yPercent: 6,
                    ease: "none",
                    scrollTrigger: {
                      trigger: layer.parentElement ?? layer,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: true,
                    },
                  }
                );
              });
          }

          // Ảnh và font tải xong thì vị trí trigger thay đổi, cần tính lại.
          void document.fonts.ready.then(() => ScrollTrigger.refresh());
          window.addEventListener("load", refresh);
          window.addEventListener("pageshow", refresh);

          // Lưới an toàn. Nội dung đã nằm trong tầm nhìn mà vẫn ẩn nghĩa là
          // ScrollTrigger tính sai mốc. Khi đó thà bỏ hiệu ứng còn hơn để trang trắng:
          // tính lại một lần, nếu vẫn kẹt thì hiện toàn bộ.
          const animated = [...revealTargets, ...staggerItems];
          const stuckInView = () =>
            animated.filter((element) => {
              const { top } = element.getBoundingClientRect();
              const shouldBeVisible = top < window.innerHeight * 0.9;
              return (
                shouldBeVisible &&
                Number(getComputedStyle(element).opacity) < 0.99
              );
            });

          let recheck = 0;
          const failsafe = window.setTimeout(() => {
            if (!stuckInView().length) return;

            refresh();
            recheck = window.setTimeout(() => {
              if (!stuckInView().length) return;
              // Gán thẳng chứ không tween: tab nền bị treo requestAnimationFrame
              // nên tween sẽ không bao giờ chạy tới nơi.
              gsap.set(animated, { clearProps: "opacity,transform" });
            }, 400);
          }, 2500);

          return () => {
            window.clearTimeout(failsafe);
            window.clearTimeout(recheck);
            window.removeEventListener("load", refresh);
            window.removeEventListener("pageshow", refresh);
          };
        }
      );

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}
