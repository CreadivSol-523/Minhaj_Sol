import Image from "next/image";
import React from "react";

const ProcedureSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-textBlue  flex flex-col gap-10">
      <div>
        <h6 className="uppercase text-white text-center fontJakartaSemiBold text-xl">Our Process</h6>
        <h3 className="text-center text-white ">Step By Step Procedure</h3>
      </div>
      <div className="flex items-center justify-center gap-10">
        {Array.from({ length: 4 }).map((_, i) => (
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

export default ProcedureSection;
