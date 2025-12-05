import Image from "next/image";

const OurStackSection = () => {
  return (
    <section className=" bg-white">
      <div className="flex flex-col md:gap-20 gap-5 2xl:px-80 lg:px-40 px-10">
        <h3 className="text-center">Our Tech Stack</h3>

        <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-4 sm:gap-6 lg:gap-8 place-items-center space-y-16">
          <Image src={"/Images/home/Stacks/TechIcon1.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon3.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon4.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon5.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon2.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon7.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon7.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon8.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon9.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon1.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon4.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
          <Image src={"/Images/home/Stacks/TechIcon5.png"} className="md:w-24 sm:w-16 w-10" alt="Icons" width={100} height={100} />
        </div>
      </div>
    </section>
  );
};

export default OurStackSection;
