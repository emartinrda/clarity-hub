import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProgramContentSection from "@/components/sections/ProgramContentSection";
import TargetAudienceSection from "@/components/sections/TargetAudienceSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import FAQSection from "@/components/sections/FAQSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero: Headline + VSL + CTA */}
        <HeroSection />
        {/* 2. Qué Incluye el Programa */}
        <ProgramContentSection />
        {/* 3. Para Quién Es */}
        <TargetAudienceSection />
        {/* 4. Calculadora ROI */}
        <CalculatorSection />
        {/* 5. Social Proof / Testimonios */}
        <SocialProofSection />
        {/* 6. FAQ */}
        <FAQSection />
        {/* 7. Servicios DFY (Discovery + Consultoría) */}
        <ServicesSection />
        {/* 8. CTA Final */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
