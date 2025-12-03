import Image from "next/image";
import React from "react";

const OurStackSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="flex flex-col gap-20 px-80">
        <h3 className="text-center">Our Tech Stack</h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 place-items-center space-y-16">
          <Image src={"/Images/home/Stacks/TechIcon1.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon3.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon4.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon5.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon2.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon7.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon7.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon8.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon9.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon1.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon4.png"} alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon5.png"} alt="Icons" width={100} height={100} />
        </div>
      </div>
    </section>
  );
};

export default OurStackSection;
