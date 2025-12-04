import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import BlogCard from "@/components/BlogCard/BlogCard";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import OurClientsSection from "@/components/LandingPageComp/OurClientsSection/OurClientsSection";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <HeroSection heading="Blogs & Insights" />
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-80 grid grid-cols-2 items-center flex-col gap-6 justify-center place-self-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
      <OurClientsSection />
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-80 grid grid-cols-2 items-center flex-col gap-6 justify-center place-self-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
      <ContactForm />
      <Footer />
    </MainLayout>
  );
};

export default page;
