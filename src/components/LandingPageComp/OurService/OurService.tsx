import Image from "next/image";
import React from "react";

const OurService = () => {
  return (
    <section className="xl:px-44 md:px-10 px-2 flex flex-col gap-10">
      <div className="flex flex-col max-sm:items-start max-sm:w-full">
        <h6 className="uppercase text-textBlue text-start fontJakartaSemiBold text-xl">Our Services</h6>
        <h3>Transform your business</h3>
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="flex gap-10 items-center max-2xl:flex-wrap 2xl:justify-center justify-start ">
          <div className="h-140 max-[1000px]:w-full w-100  bg-[url('/Images/home/OurServiceImg.png')] bg-no-repeat  bg-cover relative  overflow-hidden group">
            <div className="absolute bottom-20 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl">Digital Marketing</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
          <div className="h-140 max-[1000px]:w-full w-100 bg-[url('/Images/home/uiService.png')] bg-no-repeat bg-cover relative overflow-hidden group">
            {/* Text container */}
            <div className="absolute bottom-20 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl">UI/UX designing</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
          <div className="h-140 max-[1000px]:w-full w-140  bg-[url('/Images/home/webDev.png')] bg-no-repeat  bg-cover relative  overflow-hidden group">
            <div className="absolute bottom-20 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl text-start">website development</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center max-2xl:flex-wrap 2xl:justify-center justify-start ">
          <div className="h-140 max-[1000px]:w-full w-140  bg-[url('/Images/home/seo.png')] bg-no-repeat  bg-cover relative  overflow-hidden group">
            <div className="absolute sm:bottom-20 bottom-20 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl">search engine optimization</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
          <div className="h-140 max-[1000px]:w-full w-100  bg-[url('/Images/home/design.png')] bg-no-repeat  bg-cover relative  overflow-hidden group">
            <div className="absolute bottom-20 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl">graphic design</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
          <div className="h-140 max-[1000px]:w-full w-100  bg-[url('/Images/home/crm.png')] bg-no-repeat  bg-cover relative  overflow-hidden group">
            <div className="absolute bottom-20 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 focus-within:translate-y-0 active:translate-y-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl">crm development</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
