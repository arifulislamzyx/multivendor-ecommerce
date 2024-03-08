"use client";
import Image from "next/image";
import categoriesImage from "@/data/categoriesImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Category: React.FC = () => {
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
      <p className="text-2xl font-bold pt-5 mb-4 lg:ml-30 md:ml-24 ml-2 ">
        Popular Categories
      </p>
      <div className="hidden  items-center md:grid grid-cols-4 gap-4 container bg-white ">
        {categoriesImage.map((category) => (
          <div key={category.id} className="rounded-full p-5 items-center">
            <Image
              width={200}
              src={category.image}
              alt="categories"
              className="rounded-2xl hover:opacity-50 box-border cursor-pointer"
            />
            <p className="text-center font-bold mt-3">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="md:hidden lg:hidden  ml-8 ">
        <Slider {...settings}>
          {categoriesImage.map((category) => (
            <div key={category.id} className="">
              <div>
                <Image
                  alt="category_img"
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
