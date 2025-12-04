import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import ServiceOverviewSection from "@/components/AboutComp/ServiceOverviewSection/ServiceOverviewSection";
import Accordion from "@/components/Accordion/Accordion";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import OurClientsSection from "@/components/LandingPageComp/OurClientsSection/OurClientsSection";
import OurStackSection from "@/components/LandingPageComp/OurStackSection/OurStackSection";
import ServiceSection from "@/components/LandingPageComp/ServiceSection/ServiceSection";
import ProcedureSection from "@/components/ServiceComp/ProcedureSection/ProcedureSection";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <HeroSection heading="UI/UX DESIGN" />
      <ServiceOverviewSection
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      />
      <ServiceSection heading="Related Service" />
      <ProcedureSection />
      <OurStackSection />
      <Accordion />
      <OurClientsSection />
      <ContactForm />
      <Footer />
    </MainLayout>
  );
};

export default page;
