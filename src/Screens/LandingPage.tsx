import MainLayout from "@/Layout/MainLayout";
import Footer from "@/components/Footer/Footer";
import BlogSection from "@/components/LandingPageComp/BlogSection/BlogSection";
import ChooseUSSection from "@/components/LandingPageComp/ChooseUSSection/ChooseUSSection";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import HeroSection from "@/components/LandingPageComp/HeroSection/HeroSection";
import OurClientsSection from "@/components/LandingPageComp/OurClientsSection/OurClientsSection";
import OurExpertiseSection from "@/components/LandingPageComp/OurExpertiseSection/OurExpertiseSection";
import OurService from "@/components/LandingPageComp/OurService/OurService";
import OurStackSection from "@/components/LandingPageComp/OurStackSection/OurStackSection";
import ServiceSection from "@/components/LandingPageComp/ServiceSection/ServiceSection";

export default function LandingPage() {
  return (
    <MainLayout fixedHead>
      <div className="flex flex-col lg:gap-28 md:gap-20 gap-14">
        {/* Hero Section */}
        <HeroSection />

        <OurService />

        {/* Mission Statement */}
        <ServiceSection />

        {/* Tech Stack */}
        <OurStackSection />

        {/* Why Choose Us */}
        <ChooseUSSection />

        {/* Our Expertise */}
        <BlogSection />

        {/* Our Expertise */}
        <OurExpertiseSection />

        {/* Our Clients */}
        <OurClientsSection />

        {/*Contact US */}
        <ContactForm />
      </div>
      {/* Footer */}
      <Footer />
    </MainLayout>
  );
}
