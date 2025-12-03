import Image from "next/image";
import React from "react";

const OurClientsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white  flex flex-col gap-16 px-80">
      <h3 className="uppercase text-center">Our satisfied Clients</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 place-items-center space-y-0">
        <Image src={"/Images/home/ClientIcons/Client1.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client2.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client3.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client4.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client5.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client4.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client3.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client2.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client5.png"} alt="Icons" width={200} height={200} />
        <Image src={"/Images/home/ClientIcons/Client1.png"} alt="Icons" width={200} height={200} />
      </div>
    </section>
  );
};

export default OurClientsSection;
