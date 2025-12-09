import Image from "next/image";
import React from "react";

const OurService = () => {
  return (
    <section className="2xl:px-44 md:px-10 px-2 flex flex-col gap-10">
      <div className="flex flex-col max-sm:items-start max-sm:w-full">
        <h6 className="uppercase text-textBlue text-start fontJakartaSemiBold text-xl">Our Services</h6>
        <h3>Transform your business</h3>
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 items-center max-xl:flex-wrap 2xl:justify-center justify-start ">
          <div className="sm:h-140 h-110 w-full   bg-[url('/Images/home/OurServiceImg.png')] bg-no-repeat  bg-cover relative  overflow-hidden group">
            <div className="absolute bottom-30 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl">Digital Marketing</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
          <div className="sm:h-140 h-110 w-full bg-[url('/Images/home/uiService.png')] bg-no-repeat bg-cover relative overflow-hidden group">
            {/* Text container */}
            <div className="absolute bottom-30 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl">UI/UX designing</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
          <div className="sm:h-140 h-110 w-full  bg-[url('/Images/home/webDev.png')] bg-no-repeat  bg-cover relative  overflow-hidden group">
            <div className="absolute bottom-30 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl text-start">website development</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
          <div className="sm:h-140 h-110 w-full  bg-[url('/Images/home/seo.png')] bg-no-repeat  bg-cover relative  overflow-hidden group">
            <div className="absolute bottom-30 left-0 p-6 flex flex-col gap-2 text-white transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-500">
              <strong className="uppercase fontJakartaSemiBold text-2xl">search engine optimization</strong>
              <p className="opacity-0 group-hover:opacity-100">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
