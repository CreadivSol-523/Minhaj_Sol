import Button from "@/components/Button/Button";
import { Phone } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen overflow-hidden relative">
      <div className="grid grid-cols-2 2xl:px-80 lg:px-40 md:px-10 px-2 h-full max-xl:grid-cols-1">
        <div className=" xl:mx-auto flex justify-center items-center max-xl:justify-start">
          {/* LEFT CONTENT */}
          <div className="pt-10 ">
            <h2 className="text-headingColor leading-tight mb-8">
              We Provide <br className="max-lg:hidden" />
              Smart Business <br className="max-lg:hidden" />
              Solutions
            </h2>

            <div className="flex gap-4 mb-10">
              <div className="w-0.5 bg-[#1A73D9] rounded" />
              <p className="text-textColor text-lg max-w-xl">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ab
                illo inventore.
              </p>
            </div>

            <Button name="Get In Touch" />
          </div>
        </div>

        {/* RIGHT BULB IMAGE */}
        <Image
          src={"/Images/home/bulb.png"}
          alt="Bulb"
          className="w-450 h-450 object-cover left-[25%] -top-[55%] absolute z-10 max-xl:hidden"
          width={1000}
          height={1000}
        />
      </div>

      <div className="bg-gradient-secondary text-white  z-20  justify-center flex py-6 absolute bottom-0 w-full">
        <div className=" flex items-center gap-10">
          <p className="text-xs sm:text-sm fontJakartaRegular">GET IN TOUCH</p>
          <span className="flex items-center gap-1">
            <Phone />
            <p className="text-xs sm:text-sm fontJakartaRegular">
              (414) 687 - 5892
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
