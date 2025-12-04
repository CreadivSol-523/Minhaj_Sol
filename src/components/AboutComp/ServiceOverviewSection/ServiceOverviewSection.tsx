import Image from "next/image";
import React, { CSSProperties } from "react";

const ServiceOverviewSection = ({ style }: { style?: CSSProperties }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white px-80">
      <div className="items-center justify-center grid grid-cols-2 gap-20" style={style}>
        <div className="flex flex-col gap-8 col-span-1">
          <div className="flex flex-col ">
            <h6 className="uppercase text-textBlue text-start fontJakartaSemiBold text-xl">About us</h6>
            <h3>Heading Where I Define About Company.</h3>
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-0.5 bg-[#1A73D9] rounded" />
            <p className="text-textColor text-lg max-w-xl">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals. Our team works extensively to develop strategies for businesses focusing on getting conversions.</p>
          </div>
        </div>
        <Image src={"/Images/about/AboutImage.png"} alt="Choose Us" className="object-contain h-180 w-180 col-span-1" width={500} height={500} />
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
