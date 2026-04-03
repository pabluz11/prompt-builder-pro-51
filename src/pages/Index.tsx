import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LocalSeoSection from "@/components/LocalSeoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import NotarySection from "@/components/NotarySection";
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
      <NotarySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
