"use client";

import { CONTACT_FORM } from "@/lib/contact-content";

export function ContactForm() {
  return (
    <section className="bg-[#f5f5f5] py-[70px]">
      <div className="mx-auto max-w-[760px] px-6">
        <h2 className="text-center font-heading text-[30px] font-medium text-brand md:text-[44px]">
          {CONTACT_FORM.title}
        </h2>

        {/* Demo form — submission is mocked (no backend). */}
        <form
          className="mt-10 flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {CONTACT_FORM.fields.map((field) =>
            field.type === "textarea" ? (
              <textarea
                key={field.name}
                name={field.name}
                placeholder={field.label}
                rows={5}
                className="w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-[15px] text-[#333] outline-none transition-colors focus:border-brand"
              />
            ) : (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className="w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-[15px] text-[#333] outline-none transition-colors focus:border-brand"
              />
            ),
          )}
          <button
            type="submit"
            className="mt-2 self-start rounded-none bg-brand px-10 py-3 text-[14px] uppercase tracking-[2px] text-white transition-colors hover:bg-brand/90"
          >
            {CONTACT_FORM.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
