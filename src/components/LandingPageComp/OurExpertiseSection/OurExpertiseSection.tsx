import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const OurExpertiseSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white  flex flex-col gap-16">
      <div className="flex flex-col px-80">
        <h6 className="uppercase text-textBlue text-start fontJakartaSemiBold text-xl">Our Expertise</h6>
        <h3>Who We Work With?</h3>
      </div>
      <div className="px-4 py-6 bg-[#000000]/2 ml-80 flex gap-10 overflow-x-scroll">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="flex min-w-[400px]  bg-white px-4 py-6 border-t-2 border-t-textBlue" key={i}>
            <div className="flex flex-col gap-4">
              <h6 className="text-xl fontJakartaSemiBold">Enterprises</h6>
              <small>Providing technical support, network setup, software installation.</small>
              <div className="p-1 bg-textBlue rounded-full w-fit">
                <ArrowRight color="white" className="w-6" />
              </div>
            </div>
            <Image src={"/Images/home/Review1.png"} alt="Review 1" className="object-contain " width={200} height={200} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurExpertiseSection;
