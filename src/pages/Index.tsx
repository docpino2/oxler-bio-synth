import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import PentaSection from "@/components/PentaSection";
import CicloOxlerSection from "@/components/CicloOxlerSection";
import AgentsSection from "@/components/AgentsSection";
import ServicesSection from "@/components/ServicesSection";
import OxLearningSection from "@/components/OxLearningSection";
import TeamSection from "@/components/TeamSection";
import AlliesSection from "@/components/AlliesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingNav />
      <HeroSection />
      <ManifestoSection />
      <CicloOxlerSection />
      <PentaSection />
      <AgentsSection />
      <ServicesSection />
      <OxLearningSection />
      <TeamSection />
      <AlliesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;