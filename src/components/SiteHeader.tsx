"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TOP_NAV, LOGO } from "@/lib/content";
import { PhoneIcon, ChevronDownIcon } from "@/components/icons";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.08)] min-[980px]:h-[75px]">
      <div className="relative h-full w-full px-[15px]">
        <Link
          href="/"
          aria-label="Hoa Viên Bình Dương - trang chủ"
          className={cn(
            "absolute left-[15px] top-1/2 flex h-[45px] w-auto -translate-y-1/2 items-center gap-2 rounded-sm",
            "min-[980px]:h-[55px] min-[980px]:w-auto min-[980px]:gap-3",
            focusRing
          )}
        >
          <Image
            src={LOGO}
            alt=""
            width={639}
            height={639}
            sizes="55px"
            className="h-[45px] w-[45px] shrink-0 object-contain min-[980px]:h-[55px] min-[980px]:w-[55px]"
          />
          <span className="whitespace-nowrap font-heading text-[13px] font-bold uppercase leading-none tracking-[0.35px] text-brand min-[980px]:text-[15px] min-[980px]:tracking-[0.5px]">
            Hoa Viên Bình Dương
          </span>
        </Link>

        <nav
          aria-label="Điều hướng chính"
          className="absolute right-[15px] top-1/2 hidden -translate-y-1/2 items-center gap-7 min-[980px]:flex"
        >
          {TOP_NAV.map((item) => {
            const hasChildren = Boolean(item.children?.length);

            return (
              <div key={item.label} className="group relative">
                {hasChildren ? (
                  <button
                    type="button"
                    aria-haspopup="menu"
                    className={cn(
                      "flex items-center gap-1 rounded-sm font-heading text-[15px] font-normal leading-none text-black transition-colors duration-200 hover:text-brand",
                      focusRing
                    )}
                  >
                    {item.label}
                    <ChevronDownIcon className="text-[11px]" aria-hidden="true" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center gap-1 rounded-sm font-heading text-[15px] font-normal leading-none text-black transition-colors duration-200 hover:text-brand",
                      focusRing
                    )}
                  >
                    {item.label}
                  </a>
                )}

                {hasChildren && (
                  <div className="invisible absolute right-0 top-full z-20 w-[220px] translate-y-2 pt-[10px] opacity-0 transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="bg-white py-2 shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href === "#" ? undefined : child.href}
                            className={cn(
                              "block px-4 py-2 font-heading text-[14px] leading-snug text-heading transition-colors duration-200 hover:bg-black/[0.03] hover:text-brand",
                              focusRing
                            )}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className={cn(
            "absolute right-[15px] top-1/2 flex h-11 w-11 -translate-y-1/2 flex-col items-center justify-center gap-[5px] rounded-sm min-[980px]:hidden",
            focusRing
          )}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-black transition-transform duration-200",
              mobileOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-black transition-opacity duration-200",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-black transition-transform duration-200",
              mobileOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-64px)] overflow-y-auto border-t border-black/10 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] min-[980px]:hidden"
        >
          <nav aria-label="Điều hướng di động" className="px-4 py-2">
            {TOP_NAV.map((item) => (
              <div key={item.label} className="border-b border-black/[0.07] last:border-b-0">
                {item.href === "#" ? (
                  <p className="py-3 font-heading text-[15px] font-normal text-black">
                    {item.label}
                  </p>
                ) : (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cn(
                      "block rounded-sm py-3 font-heading text-[15px] font-normal text-black transition-colors duration-200 hover:text-brand",
                      focusRing
                    )}
                  >
                    {item.label}
                  </a>
                )}
                {!!item.children?.length && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href === "#" ? undefined : child.href}
                          className={cn(
                            "block rounded-sm py-1.5 font-heading text-[14px] text-heading transition-colors duration-200 hover:text-brand",
                            focusRing
                          )}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4 text-[13px] text-heading">
              <a
                href="/lien-he"
                className={cn(
                  "flex items-center gap-1.5 rounded-sm transition-colors duration-200 hover:text-brand",
                  focusRing
                )}
              >
                <PhoneIcon className="text-[15px]" aria-hidden="true" />
                <span>Liên hệ</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
