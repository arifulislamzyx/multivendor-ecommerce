"use client";
import useProducts from "@/Hooks/useProducts";
import Slider from "react-slick";

import NewProductCard from "./NewProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ProductDisplay from "../../../app/(home)/all-products/ProductDisplay";

// import { Product } from "@/types/product";

// https://mitnog-server.vercel.app
export const NewProducts: React.FC = () => {
  const { products, loading } = useProducts();

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="bg-white ">
      <p className="text-2xl font-bold lg:ml-35 md:ml-32 pt-5  sm:ml-2">
        Flash Sale
      </p>
      {loading ? (
        <>
          <div
            className="bg-white grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 rounded w-full container relative 
        md:w-[750px] sm:m-auto"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={200}
                height={300}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className="bg-white rounded  max-w-[1050px] mx-auto  
                        md:w-[750px] md:h-200 sm:m-auto"
          >
            <Slider {...settings}>
              {products.slice(0, 12).map((product) => (
                <NewProductCard
                  key={product._id}
                  product={product}
                ></NewProductCard>
              ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};
