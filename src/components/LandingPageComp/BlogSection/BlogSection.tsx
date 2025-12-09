import BlogCard from "@/components/BlogCard/BlogCard";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BlogSection = () => {
  return (
    <section className=" bg-white xl:pl-44 md:pl-10 px-2 flex flex-col gap-10">
      <div className="flex flex-col ">
        <h6 className="uppercase text-textBlue text-start fontJakartaSemiBold text-xl">Blogs</h6>
        <h3>Who We Work With?</h3>
      </div>
      <div>
        <Swiper modules={[Autoplay, FreeMode]} slidesPerView={"auto"} spaceBetween={24} grabCursor={true} className="w-full flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i} className="w-auto! flex justify-center items-center">
              <BlogCard className="w-100 flex flex-col gap-2 border border-gray-200 gap-6 p-4" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
