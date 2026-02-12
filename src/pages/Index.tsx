import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PentaSection from "@/components/PentaSection";
import CicloOxlerSection from "@/components/CicloOxlerSection";
import AgentsSection from "@/components/AgentsSection";
import ServicesSection from "@/components/ServicesSection";
import OxLearningSection from "@/components/OxLearningSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CicloOxlerSection />
      <PentaSection />
      <AgentsSection />
      <ServicesSection />
      <OxLearningSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default Index;
