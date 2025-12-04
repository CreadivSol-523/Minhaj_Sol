import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white px-80 flex items-center flex-col gap-6 justify-center">
      <div className="flex flex-col gap-10">
        <div className="gap-4 flex flex-col">
          <h3 className="text-center text-headingColor ">Portfolio</h3>
          <p className="text-textColor px-40 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <Image src={"/Images/Portfolio/PortfolioImage.png"} alt="image" className="rounded-xl" width={450} height={450} />
          <Image src={"/Images/Portfolio/PortfolioImage.png"} alt="image" className="rounded-xl" width={450} height={450} />
          <Image src={"/Images/Portfolio/PortfolioImage.png"} alt="image" className="rounded-xl" width={450} height={450} />
          <Image src={"/Images/Portfolio/PortfolioImage.png"} alt="image" className="rounded-xl" width={450} height={450} />
          <Image src={"/Images/Portfolio/PortfolioImage.png"} alt="image" className="rounded-xl" width={450} height={450} />
          <Image src={"/Images/Portfolio/PortfolioImage.png"} alt="image" className="rounded-xl" width={450} height={450} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
