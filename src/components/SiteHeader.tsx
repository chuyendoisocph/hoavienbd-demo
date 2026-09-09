"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TOP_NAV, LOGO } from "@/lib/content";
import { SearchIcon, PhoneIcon, ChevronDownIcon } from "@/components/icons";

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
            "absolute left-[15px] top-1/2 flex h-[45px] w-[140px] -translate-y-1/2 items-center gap-2 rounded-sm",
            "min-[980px]:h-[55px] min-[980px]:w-[187px] min-[980px]:gap-3",
            focusRing
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO}
            alt=""
            width={639}
            height={639}
            className="h-[45px] w-[45px] shrink-0 object-contain min-[980px]:h-[55px] min-[980px]:w-[55px]"
          />
          <span className="font-heading text-[12px] font-bold uppercase leading-[1.15] tracking-[0.35px] text-brand min-[980px]:text-[15px] min-[980px]:tracking-[0.5px]">
            Hoa Viên
            <br />
            Bình Dương
          </span>
        </Link>

        <div className="absolute right-[15px] top-[7px] hidden items-center gap-5 text-[13px] leading-none text-heading min-[980px]:flex">
          <button
            type="button"
            aria-label="Tìm kiếm"
            className={cn(
              "flex items-center gap-1.5 rounded-sm transition-colors duration-200 hover:text-brand",
              focusRing
            )}
          >
            <SearchIcon className="text-[13px]" aria-hidden="true" />
            <span>Tìm kiếm</span>
          </button>
          <a
            href="/resources/contact-us-new"
            className={cn(
              "flex items-center gap-1.5 rounded-sm transition-colors duration-200 hover:text-brand",
              focusRing
            )}
          >
            <PhoneIcon className="text-[13px]" aria-hidden="true" />
            <span>Liên hệ</span>
          </a>
        </div>

        <nav
          aria-label="Điều hướng chính"
          className="absolute bottom-[10px] right-[15px] hidden items-center gap-7 min-[980px]:flex"
        >
          {TOP_NAV.map((item) => {
            const hasChildren = Boolean(item.children?.length);

            return (
              <div key={item.label} className="group relative">
                <a
                  href={item.href === "#" ? undefined : item.href}
                  aria-haspopup={hasChildren ? "menu" : undefined}
                  className={cn(
                    "flex items-center gap-1 rounded-sm font-heading text-[15px] font-normal leading-none text-black transition-colors duration-200 hover:text-brand",
                    focusRing
                  )}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDownIcon className="text-[11px]" aria-hidden="true" />
                  )}
                </a>

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

      <div
        className="nirvana-swoosh pointer-events-none absolute bottom-0 left-0 h-2 w-[55%]"
        aria-hidden="true"
      />

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-64px)] overflow-y-auto border-t border-black/10 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] min-[980px]:hidden"
        >
          <nav aria-label="Điều hướng di động" className="px-4 py-2">
            {TOP_NAV.map((item) => (
              <div key={item.label} className="border-b border-black/[0.07] last:border-b-0">
                <a
                  href={item.href === "#" ? undefined : item.href}
                  className={cn(
                    "block rounded-sm py-3 font-heading text-[15px] font-normal text-black transition-colors duration-200 hover:text-brand",
                    focusRing
                  )}
                >
                  {item.label}
                </a>
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
              <button
                type="button"
                aria-label="Tìm kiếm"
                className={cn(
                  "flex items-center gap-1.5 rounded-sm transition-colors duration-200 hover:text-brand",
                  focusRing
                )}
              >
                <SearchIcon className="text-[15px]" aria-hidden="true" />
                <span>Tìm kiếm</span>
              </button>
              <a
                href="/resources/contact-us-new"
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
