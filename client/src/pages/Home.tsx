import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProgramContentSection from "@/components/sections/ProgramContentSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* SECCIÓN 1: HERO (Detiene + Convence) */}
        <HeroSection />
        
        {/* SECCIÓN 2: QUÉ INCLUYE (Detalles del Programa) */}
        <ProgramContentSection />
        
        {/* SECCIÓN 3: SOCIAL PROOF (Credibilidad) */}
        <SocialProofSection />
        
        {/* SECCIÓN 4: PRICING & CTA (Cierre de venta) */}
        <CTASection />
        
        {/* SECCIÓN 5: FAQ (Responde últimas dudas) */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
