import { CONTACT_INFO } from "@/lib/contact-content";
import { PhoneIcon } from "@/components/icons";

export function ContactInfo() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center text-[15px] uppercase tracking-[6px] text-[#999]">
          {CONTACT_INFO.eyebrow}
        </p>
        <h2 className="mt-3 text-center font-heading text-[34px] font-medium text-brand md:text-[44px]">
          {CONTACT_INFO.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
          {/* Left: info blocks */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-heading text-[18px] font-bold tracking-[1px] text-brand">
                {CONTACT_INFO.office.label}
              </h3>
              <address className="mt-3 not-italic text-[15px] leading-[1.8] text-[#666]">
                {CONTACT_INFO.office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div>
              <h3 className="font-heading text-[18px] font-bold tracking-[1px] text-brand">
                {CONTACT_INFO.contact.label}
              </h3>
              <p className="mt-3 flex items-center gap-2 text-[15px] text-[#666]">
                <PhoneIcon className="text-brand" />
                <span>TỔNG ĐÀI :</span>
                <a href={`tel:${CONTACT_INFO.contact.hotline.replace(/[^0-9]/g, "")}`} className="text-brand-link">
                  {CONTACT_INFO.contact.hotline}
                </a>
              </p>
              <p className="mt-2 text-[15px] text-[#666]">
                <a href={`mailto:${CONTACT_INFO.contact.email}`} className="text-brand-link">
                  {CONTACT_INFO.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Right: map */}
          <div className="min-h-[320px] overflow-hidden rounded-sm shadow-[0_20px_40px_-24px_rgba(0,0,0,0.4)]">
            <iframe
              title="Nirvana Asia corporate office map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapQuery)}&output=embed`}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
