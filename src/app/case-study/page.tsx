import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import Portfolio from "@/components/CaseStudyComp/Portfolio/Portfolio";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <HeroSection heading="Case Study" />
      <Portfolio />
      <ContactForm />
      <Footer />
    </MainLayout>
  );
};

export default page;
