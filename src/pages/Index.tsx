import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LocalSeoSection from "@/components/LocalSeoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ArticlesSection from "@/components/ArticlesSection";
import MaterialsSection from "@/components/MaterialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocalSeoSection />
      <HowItWorksSection />
      <ArticlesSection />
      <MaterialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
