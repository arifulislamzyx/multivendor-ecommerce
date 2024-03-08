import Image from "next/image";
import React from "react";
import img from "../../../public/offerImage/KitchenOffer.jpeg";
import img2 from "../../../public/offerImage/chairOffer.jpeg";
import img3 from "../../../public/offerImage/bestDeals.jpeg";
import {
  FaArrowAltCircleRight,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const OfferBaneer: React.FC = () => {
  return (
    <section className="flex container my-5">
      <div className="w-[400px] h-80 bg-yellow-300 z-10 ml-5 rounded">
        <div className="flex justify-end ">
          <Image
            src={img}
            width={150}
            alt="image"
            className="rounded-bl-[50%]"
          ></Image>
        </div>

        <div className="">
          <h3 className="text-3xl font-bold ml-10 -mt-10">
            Home
            <br />
            Refresh
            <br />
            New Ideas
          </h3>
          <div className="flex justify-between mx-10 mt-10 text-lg">
            <h4>New Arrivals</h4>
            <div className="flex items-center gap-2">
              <button className="hover:-translate-x-2 transition-all">
                Shop Now
              </button>
              <FaArrowAltCircleRight></FaArrowAltCircleRight>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-80 bg-blue-600 z-10 ml-5 rounded">
        <div className="flex justify-end ">
          <Image
            src={img2}
            width={150}
            alt="image"
            className="rounded-bl-[50%]"
          ></Image>
        </div>
        <div className="text-white">
          <h3 className="text-3xl font-bold ml-10 -mt-10">
            Shop <br /> Modern <br />
            Products
          </h3>
          <div className="flex justify-between mx-10 mt-10 text-lg">
            <h4>New Arrivals</h4>
            <div className="flex items-center gap-2">
              <button className="hover:-translate-x-2 transition-all">
                Shop Now
              </button>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-80 bg-slate-300 z-10 ml-5 rounded">
        <div className="flex justify-end ">
          <Image
            src={img3}
            width={150}
            alt="image"
            className="rounded-bl-[50%]"
          ></Image>
        </div>
        <div>
          <h3 className=" text-3xl font-bold ml-10 -mt-10">
            Best <br />
            Deals In <br />
            Fashionable
          </h3>
          <div className="flex justify-between mx-10 mt-10 text-lg">
            <h4>New Arrivals</h4>
            <div className="flex items-center gap-2">
              <button className="hover:-translate-x-2 transition-all">
                Shop Now
              </button>
              <IoIosArrowDropright></IoIosArrowDropright>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBaneer;
