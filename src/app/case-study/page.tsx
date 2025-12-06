"use client";

import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import Portfolio from "@/components/CaseStudyComp/Portfolio/Portfolio";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col lg:gap-28 md:gap-20 gap-14">
        <HeroSection heading="Case Study" />
        <Portfolio />
        <ContactForm />
      </div>
      <Footer />
    </MainLayout>
  );
};

export default page;
