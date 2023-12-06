"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import mainSlider from "@/data/mainslider";

const Slider = () => {
  return (
    <div>
      <div>
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper max-w-[1030px] rounded w-full mx-auto relative "
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
    </div>

    {/* <div>
<Swiper
  navigation={false}
  modules={[Autoplay]}
  className="hidden rounded w-full mx-auto relative"
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
</div>  */}
    </div>
  );
};
export default Slider;
