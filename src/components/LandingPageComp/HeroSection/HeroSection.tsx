import Button from "@/components/Button/Button";
import { Phone } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="xl:h-screen lg:h-[115vh] h-[80vh] overflow-hidden relative">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-start  2xl:px-32 sm:px-16 px-4 h-full relative z-20">
        <div className=" mx-auto flex justify-center items-center">
          {/* LEFT CONTENT */}
          <div className="pt-10 ">
            <h2 className="text-white leading-tight mb-8">
              We Provide <br />
              Smart Business <br />
              Solutions
            </h2>

            <div className="flex gap-4 mb-10">
              <div className="w-0.5 bg-[#1A73D9] rounded" />
              <p className="text-[#FFFFFF] text-lg max-w-xl">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ab illo inventore.</p>
            </div>

            <Button name="Get In Touch" />
          </div>
        </div>

        {/* RIGHT BULB IMAGE */}
      </div>
      <Image src={"/Images/home/HeroBG.png"} alt="Bulb" className="w-full h-full lg:object-fill object-cover top-0 absolute z-10" width={2000} height={2000} />

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
