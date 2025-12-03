import Image from "next/image";
import React from "react";

const CoreValuesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white px-80 flex flex-col gap-10">
      <h3 className="text-center">Core Values</h3>
      <div className="flex items-center justify-center gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="relative flex flex-col gap-3 items-start px-8 py-10 bg-white shadow-xl rounded-lg w-100" style={{ marginTop: i % 2 ? 100 : 0 }}>
            <Image src={"/Images/about/Pen.png"} alt="Pen icon" width={40} height={40} />
            <strong className="text-2xl fontJakartaSemiBold text-headingColor">Define</strong>
            <p className="text-textColor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 1500s, when an unknown </p>
            <h3 className="text-[#010101]/33 absolute top-8 right-10">0{i + 1}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
