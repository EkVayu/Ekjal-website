import AboutSection from "@/components/Home/AboutSection";
import CustomersLocatedSection from "@/components/Home/CustomersLocatedSection";
import CustomersSection from "@/components/Home/CustomersSection";
import HeroSection from "@/components/Home/HeroSection"
import OurCybersecurityCapabilities from "@/components/Home/OurCybersecurityCapabilities";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSection />
      <AboutSection/>
      <ServicesSection />
      <OurCybersecurityCapabilities />
      <TestimonialsSection />
      <CustomersSection />
      <CustomersLocatedSection />
    </div>
  );
}

export default HomePage
