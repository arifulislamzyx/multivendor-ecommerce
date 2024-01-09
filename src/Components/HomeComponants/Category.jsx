"use client";
import Image from "next/image";
import categoriesImage from "@/data/categoriesImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Category = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          autoPlay: true,
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      <p className="text-2xl font-bold pt-5 mb-4 lg:ml-35 md:ml-32 ml-2 ">
        Popular Categories
      </p>
      <div className="hidden md:grid grid-cols-4 gap-4 max-w-[1050px] mx-auto bg-white rounded-xl ">
        {categoriesImage.map((category) => (
          <div
            key={category.id}
            className="p-5 rounded-xl items-center sm:rounded-full"
          >
            <Image
              width={200}
              height={200}
              src={category.image}
              alt="categories"
              className="rounded li hover:shadow-2xl"
            />
            <p className="mt-5">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="md:hidden lg:hidden  ml-8 ">
        <Slider {...settings}>
          {categoriesImage.map((category) => (
            <div key={category.id} className="">
              <div>
                <Image
                  className="rounded-full"
                  width={90}
                  height={10}
                  src={category.image}
                ></Image>
              </div>
              <p className="text-sm font-bold ml-5">{category.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
