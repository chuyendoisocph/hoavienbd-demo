import {
  CARELINE,
  FOOTER_ADDRESS,
  FOOTER_COLUMNS,
  FOOTER_BUTTONS,
} from "@/lib/content";
import { FacebookIcon, YoutubeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const [gettingStarted, planningOptions, resources] = FOOTER_COLUMNS;

const socials = [
  {
    label: "Facebook",
    Icon: FacebookIcon,
    bg: "bg-[#3b5998]",
    href: "https://www.facebook.com/cphacobd.vn",
  },
  {
    label: "YouTube",
    Icon: YoutubeIcon,
    bg: "bg-[#e02b20]",
    href: "https://www.youtube.com/@hoavienbinhduong1276",
  },
];

function LinkGroup({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="pb-[10px] text-[20px] leading-[30px] font-medium tracking-[1px] !text-[#4453c4]">
        {heading}
      </h3>
      <ul className="space-y-[18px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[16px] leading-[1.2] tracking-[1px] text-white transition-colors hover:text-[#8d96ec]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-[70px] bg-footer-navy font-heading text-white lg:min-h-[735px] lg:pt-[7px] lg:pr-[15.18vw] lg:pb-[51px]">
      <div className="grid w-full grid-cols-1 lg:-mt-[77px] lg:w-[84.82vw] lg:grid-cols-[57.8%_15.6%_15.6%] lg:items-start lg:justify-between lg:pb-[27px]">
        {/* Column 1 — purple panel */}
        <div className="bg-footer-purple px-6 py-12 lg:min-h-[519px] lg:pt-[83px] lg:pr-[30px] lg:pb-0 lg:pl-[15.18vw]">
          <h2 className="pb-[20px] text-[30px] leading-[1.2] font-bold text-white">
            Kết Nối
          </h2>

          <div>
            <a
              href={`tel:${CARELINE.replace(/\s/g, "")}`}
              className="block pb-[30px] text-[20px] leading-[45px] tracking-[2px] text-white"
            >
              Tổng đài {CARELINE}
            </a>
            <div className="mt-[10px] text-[15px] leading-[22px] tracking-[1px] text-[#d6d6d6]">
              <p className="pb-[10px] font-bold">{FOOTER_ADDRESS.office}</p>
              <p>{FOOTER_ADDRESS.address}</p>
              <a
                href={FOOTER_ADDRESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[8px] inline-block text-white underline transition-colors hover:text-[#8d96ec]"
              >
                Xem bản đồ đường đi
              </a>
              <p className="mt-[10px]">{FOOTER_ADDRESS.hours}</p>
              <p className="mt-[10px]">
                Website:{" "}
                <a
                  href={FOOTER_ADDRESS.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline transition-colors hover:text-[#8d96ec]"
                >
                  {FOOTER_ADDRESS.website}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-[38px] flex gap-[19px]">
            {socials.map(({ label, Icon, bg, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "grid size-[52px] place-items-center text-white transition-transform duration-200 hover:-translate-y-[3px]",
                  bg,
                )}
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>

          <p className="mt-[42px] text-[14px] leading-[21px] tracking-[1px] text-white/70">
            {FOOTER_ADDRESS.copyright}
          </p>
        </div>

        {/* Column 2 — Getting Started + Planning Options */}
        <div className="space-y-6 px-6 py-12 lg:px-0 lg:pt-[95px] lg:pb-0">
          <LinkGroup
            heading={gettingStarted.heading}
            links={gettingStarted.links}
          />
          <LinkGroup
            heading={planningOptions.heading}
            links={planningOptions.links}
          />
        </div>

        {/* Column 3 — Resources + buttons + policy links */}
        <div className="px-6 pt-0 pb-12 lg:px-0 lg:pt-[95px] lg:pb-0">
          <LinkGroup heading={resources.heading} links={resources.links} />

          <div className="mt-[30px] flex flex-col items-start gap-[10px]">
            {FOOTER_BUTTONS.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className="w-fit border border-white px-[14px] py-[4px] text-[14px] leading-[24px] tracking-[1px] text-white transition-colors hover:bg-white/10"
              >
                {button.label}
              </a>
            ))}
          </div>

          <div className="mt-[12px] flex flex-col gap-[5px] text-[14px] leading-[21px] tracking-[1px] text-white/60">
            <a href="#" className="transition-colors hover:text-white">
              Chính sách bảo mật
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
