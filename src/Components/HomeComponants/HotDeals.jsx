"use client";
import React from "react";
import hoteDeals1 from "../../../public/hotDeals/hotDeals1.png";
import hoteDeals2 from "../../../public/hotDeals/hotDeals2.png";
import hoteDeals3 from "../../../public/hotDeals/hotDeals3.png";
import hoteDeals4 from "../../../public/hotDeals/hotDeals4.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotDeals = () => {
  const images = [hoteDeals1, hoteDeals2, hoteDeals3, hoteDeals4];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: false,
          speed: 1000,
          autoPlay: true,
          slidesToShow: 1,
          slidesToScroll: 4,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div>
      <p className=" text-2xl font-bold hidden sm:hidden md:block md:ml-32 md:py-4  lg:block lg:ml-35 lg:py-6  ">
        Hot Deals
      </p>
      <div className="md:grid lg:grid-cols-2 md:grid-cols-2 gap-3 px-4 w-full max-w-[1050px] mx-auto sm:hidden">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt="hotDealsImg"></Image>
          </div>
        ))}
      </div>
      <div className="md:hidden lg:hidden px-4 ">
        <p className="text-2xl font-bold mt-5 mb-2">Hot Deals</p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="">
              <div>
                <Image className="rounded" alt="hotDeals" src={image}></Image>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HotDeals;
