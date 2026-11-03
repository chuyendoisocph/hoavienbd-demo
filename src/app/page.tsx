import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { ORGANIZATION_JSON_LD, SITE_DESCRIPTION, SITE_TITLE, WEBSITE_JSON_LD, pageMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/HeroSection";
import { CultureSection } from "@/components/CultureSection";
import { CaringSection } from "@/components/CaringSection";
import { PreplanCards } from "@/components/PreplanCards";
import { ProductsSection } from "@/components/ProductsSection";
import { SiteView360 } from "@/components/SiteView360";
import { FilialVersesSection } from "@/components/FilialVersesSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { QuoteSection } from "@/components/QuoteSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = pageMetadata("/", { title: SITE_TITLE, description: SITE_DESCRIPTION });

export default function Home() {
  return (
    <>
      <JsonLd data={ORGANIZATION_JSON_LD} />
      <JsonLd data={WEBSITE_JSON_LD} />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CultureSection />
        <CaringSection />
        <PreplanCards />
        <ProductsSection />
        <SiteView360 />
        <FilialVersesSection />
        <AdvantagesSection />
        <QuoteSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
