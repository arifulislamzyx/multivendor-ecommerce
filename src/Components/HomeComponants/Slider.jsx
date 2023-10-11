"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import mainSlider from "@/data/mainslider";
console.log(mainSlider);

const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-3/4"
      >
        {mainSlider.map((sliderImg) => (
          <SwiperSlide key={sliderImg.id}>
            <Image
              src={sliderImg.bg}
              alt="slider image"
              width={1920}
              height={835}
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
