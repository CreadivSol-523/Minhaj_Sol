// OurExpertiseSection.jsx
import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurExpertiseSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section className="bg-white flex flex-col md:gap-16 gap-10 max-lg:pb-10 xl:pl-44 md:pl-10 px-2 relative">
      <div className="flex items-center justify-between sm:flex-row flex-col ">
        <div className="flex flex-col max-sm:items-start max-sm:w-full">
          <h6 className="uppercase text-textBlue text-start fontJakartaSemiBold text-xl">Our Expertise</h6>
          <h3>Who We Work With?</h3>
        </div>
        {/* Left/Right fade overlays */}
        <div className=" z-50 flex gap-2 mr-10 max-sm:justify-end max-sm:w-full">
          <button
            ref={prevRef}
            onClick={() => {
              (swiperRef.current as any)?.slidePrev();
              (swiperRef.current as any)?.autoplay?.stop?.();
            }}
            className="rounded-full p-4 shadow-md bg-white/90 hover:bg-white focus:outline-none border border-gray-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            ref={nextRef}
            onClick={() => {
              (swiperRef.current as any)?.slideNext();
              (swiperRef.current as any)?.autoplay?.stop?.();
            }}
            className="rounded-full p-4 shadow-md bg-white/90 hover:bg-white focus:outline-none border border-gray-300 cursor-pointer"
            aria-label="Next slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute lg:-bottom-10 bottom-0 left-1/2 w-full -translate-x-1/2 bg-blue-500">
        <div ref={paginationRef} className="swiper-pagination  flex gap-1 justify-center z-50 " />
      </div>
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && swiper.params.pagination) {
              (swiper.params.navigation as any).prevEl = prevRef.current;
              (swiper.params.navigation as any).nextEl = nextRef.current;
              (swiper.params.pagination as any).el = paginationRef.current;
            }
          }}
          onSwiper={(swiper) => {
            (swiperRef as any).current = swiper;
          }}
          slidesPerView={"auto"}
          spaceBetween={24}
          grabCursor={true}
          freeMode={{ enabled: true, momentum: false }}
          pagination={{ clickable: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          className="w-full"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i} className="w-auto! flex justify-center items-center relative">
              <div className="group flex min-w-[400px] w-100 bg-white px-4 py-6 border-2 rounded-sm border-gray-200 items-center gap-6">
                <div className="flex flex-col gap-2">
                  <Image src={"/Images/home/Human.png"} alt="Review 1" width={25} height={25} quality={100} className="rounded-full  w-10 h-auto" />
                  <h6 className="text-xl fontJakartaSemiBold">Floyd Miles</h6>
                  <small>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</small>
                </div>

                <div className="absolute top-10 right-10 flex items-center gap-1">
                  <Image src={"/Images/home/star.png"} alt="star" width={18} height={18} />
                  <Image src={"/Images/home/star.png"} alt="star" width={18} height={18} />
                  <Image src={"/Images/home/star.png"} alt="star" width={18} height={18} />
                  <Image src={"/Images/home/star.png"} alt="star" width={18} height={18} />
                  <Image src={"/Images/home/star.png"} alt="star" width={18} height={18} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurExpertiseSection;
