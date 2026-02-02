import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProgramContentSection from "@/components/sections/ProgramContentSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* SECCIÓN 1: HERO (Detiene + Convence) */}
        <HeroSection />
        
        {/* SECCIÓN 2: QUÉ INCLUYE (Detalles del Programa) */}
        <ProgramContentSection />
        
        {/* SECCIÓN 3: CALCULADORA ROI */}
        <CalculatorSection />
        
        {/* SECCIÓN 4: SOCIAL PROOF (Credibilidad) */}
        <SocialProofSection />
        
        {/* SECCIÓN 5: FAQ (Responde últimas dudas) */}
        <FAQSection />
        
        {/* SECCIÓN 6: PRICING & CTA (Cierre de venta - ÚLTIMO) */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
