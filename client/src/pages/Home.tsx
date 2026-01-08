import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Home Page
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Full-page scrolling experience
 * - Animated sections with parallax effects
 * - Responsive design for all devices
 * - Integrated WhatsApp contact button
 */

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
