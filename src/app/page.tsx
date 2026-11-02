import { SiteHeader } from "@/components/SiteHeader";
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

export default function Home() {
  return (
    <>
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
