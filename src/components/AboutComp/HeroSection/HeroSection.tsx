import { Phone } from "lucide-react";
import React from "react";

const HeroSection = ({ heading, subHeading }: { heading?: string; subHeading?: string }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 z-20 relative h-[60vh] bg-[url('/Images/home/ServiceSection.png')] bg-no-repeat bg-center bg-cover px-80 flex items-center flex-col gap-6 justify-center">
      <div className="flex items-center gap-2 flex-col">
        <h3>{heading || "UI/UX DESIGN"}</h3>
        <div className="w-20 h-0.5 bg-textBlue" />
      </div>
      <p className="text-center">{subHeading || "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam reme aperiam eaque abillo inventore"}</p>
      <div className="bg-gradient-secondary text-white  z-20  justify-center flex py-6 absolute bottom-0 w-full">
        <div className=" flex items-center gap-10">
          <p className="text-xs sm:text-sm fontJakartaRegular">GET IN TOUCH</p>
          <span className="flex items-center gap-1">
            <Phone />
            <p className="text-xs sm:text-sm fontJakartaRegular">(414) 687 - 5892</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
