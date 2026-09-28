import Image from "next/image";

type EventsHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export function EventsHero({
  title,
  subtitle,
  image,
  imageAlt,
}: EventsHeroProps) {
  return (
    <section className="relative mt-16 h-[430px] overflow-hidden bg-[#171728] min-[980px]:mt-[75px] md:h-[560px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,30,0.26)_0%,rgba(8,12,24,0.5)_100%)]" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-[720px]">
          <h1 className="font-heading text-[clamp(44px,7vw,78px)] font-medium leading-[1.08] text-white">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] text-[16px] font-medium leading-[1.7] text-white/90 md:mt-6 md:text-[18px]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
