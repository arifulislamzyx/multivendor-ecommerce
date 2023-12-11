"use client";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import mainSlider from "@/data/mainslider";
import SlideR from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"

  };
  return (
   <>
   
      <div className="max-w-[1030px] rounded w-full mx-auto ">
        <SlideR {...settings}>

        {mainSlider.map((sliderImg) => (
          <div key={sliderImg.id}>

            <Image
              src={sliderImg.bg}
              alt="slider image"
              width={1920}
              height={835}
            ></Image>

          </div>
        ))}
        </SlideR>
     </div>
   
   </>
  )
  };
export default Slider;
