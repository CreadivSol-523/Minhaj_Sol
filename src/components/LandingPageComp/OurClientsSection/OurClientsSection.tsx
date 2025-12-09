import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const OurClientsSection = () => {
  const techImages = ["/Images/home/Stacks/TechIcon1.png", "/Images/home/Stacks/TechIcon2.png", "/Images/home/Stacks/TechIcon3.png", "/Images/home/Stacks/TechIcon4.png", "/Images/home/Stacks/TechIcon5.png", "/Images/home/Stacks/TechIcon6.png", "/Images/home/Stacks/TechIcon7.png", "/Images/home/Stacks/TechIcon8.png", "/Images/home/Stacks/TechIcon9.png"];

  return (
    <section className="bg-white">
      <div className="flex flex-col md:gap-20 gap-5 ">
        <h3 className="uppercase text-center">Our satisfied Clients</h3>

        <div className="relative flex gap-10 flex-col overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-50"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-50"></div>
          <div className="w-full">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop={true}
              speed={800}
              slidesPerView={"auto"}
              spaceBetween={24}
              grabCursor={true}
              freeMode={{ enabled: true, momentum: false }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
              }}
              className="w-full"
            >
              {[...techImages, ...techImages].map((src, idx) => (
                <SwiperSlide key={idx} className="w-auto! flex justify-center items-center">
                  <div className="xl:mx-14 md:mx-10 sm:mx-8 mx-6 flex items-center justify-center">
                    <Image src={src} alt={`tech-${idx}`} width={80} height={80} className="md:w-24 sm:w-16 w-10 object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop={true}
              speed={800}
              slidesPerView={"auto"}
              spaceBetween={24}
              grabCursor={true}
              freeMode={{ enabled: true, momentum: false }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
                reverseDirection: true,
              }}
              className="w-full"
            >
              {[...techImages, ...techImages].map((src, idx) => (
                <SwiperSlide key={idx} className="w-auto! flex justify-center items-center">
                  <div className="xl:mx-14 md:mx-10 sm:mx-8 mx-6 flex items-center justify-center">
                    <Image src={src} alt={`tech-${idx}`} width={80} height={80} className="md:w-24 sm:w-16 w-10 object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
