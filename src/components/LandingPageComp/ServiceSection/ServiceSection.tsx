import { ArrowRight } from "lucide-react";
import React from "react";

const ServiceSection = ({ heading }: { heading?: string }) => {
  const arr = [0, 1, 2, 3, 4, 5];

  return (
    <section className="py-12 sm:py-16 lg:py-20 z-20 relative bg-[url('/Images/home/ServiceSection.png')] bg-no-repeat bg-center bg-cover 2xl:px-80 lg:px-40 md:px-10 px-2">
      <div className="flex flex-col gap-20">
        <div>
          <h6 className="uppercase text-textBlue text-center fontJakartaSemiBold text-xl">
            Our Services
          </h6>
          {heading ? (
            <h3 className="text-center">{heading}</h3>
          ) : (
            <h3 className="text-center">
              Empowering Our Worldwide Clients To Adopt
              <br className="hidden sm:block" />
              Cutting-Edge Technology, Reimagine
              <br className="hidden sm:block" />
              Processes, And Enhance Experiences
            </h3>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          {arr.map((_, index) => (
            <div
              className={`flex flex-col gap-3 2xl:pr-60 lg:pr-32 pr-2 lg:pl-10 pl-2 py-6 ${
                index % 2 ? "lg:border-l border-0 border-gray-300" : ""
              } ${index < arr.length - 2 ? "border-b border-gray-300" : ""}`}
              key={index}
            >
              <strong className="text-xl fontJakartaSemiBold">
                Digital Marketing
              </strong>
              <h6 className="text-textColor fontPoppins text-md">
                We use strategic marketing tactics that have been proven
                programming
              </h6>
              <span className="flex items-center gap-2 cursor-pointer">
                <p className="text-textBlue">Take a tour</p>
                <ArrowRight className="text-textBlue" size={20} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
