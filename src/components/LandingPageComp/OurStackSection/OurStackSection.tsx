"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const OurStackSection = () => {
  const techImages = [
    "/Images/home/Stacks/TechIcon1.png",
    "/Images/home/Stacks/TechIcon3.png",
    "/Images/home/Stacks/TechIcon4.png",
    "/Images/home/Stacks/TechIcon5.png",
    "/Images/home/Stacks/TechIcon7.png",
    "/Images/home/Stacks/TechIcon8.png",
    "/Images/home/Stacks/TechIcon9.png",
  ];

  return (
    <section className="bg-white">
      <div className="flex flex-col md:gap-20 gap-5 2xl:px-80 lg:px-40 px-10">
        <h3 className="text-center">Our Tech Stack</h3>

        <Marquee
          speed={60}
          gradient={false}
          pauseOnHover={true}
          className="flex items-center"
        >
          {[...techImages, ...techImages].map((src, index) => (
            <div
              key={index}
              className="xl:mx-20 lg:mx-14 sm:mx-8 mx-6 flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`Tech Icon ${index}`}
                width={100}
                height={100}
                className="md:w-24 sm:w-16 w-10 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurStackSection;
