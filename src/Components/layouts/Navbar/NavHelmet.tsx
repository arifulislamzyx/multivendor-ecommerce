import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiVan } from "react-icons/pi";
import { LiaQuestionSolid } from "react-icons/lia";
import { GiSelfLove } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";

const NavHelmet: React.FC = () => {
  return (
    <div className="flex justify-between mt-4">
      <div>
        <h4 className="font-bold">FREE Express Shipping On Orders $99+</h4>
      </div>
      <div className="flex gap-3 font-bold">
        <p className="flex items-center">
          <select>
            <option>
              USD
              <FaArrowDown />
            </option>
            <option>
              EURO
              <FaArrowDown />
            </option>
          </select>
        </p>
        <p className="flex items-center gap-1">
          <select>
            <option>
              Eng <FaArrowDown />
            </option>
            <option>
              Ben <FaArrowDown />
            </option>
          </select>
        </p>
        <p className="flex items-center gap-1">
          <CiLocationOn /> Our Stores
        </p>
        <p className="flex items-center gap-1">
          <PiVan />
          Track Your Order
        </p>
        <p className="flex items-center ">
          <LiaQuestionSolid />
          Help
        </p>
        <p className="flex items-center gap-1 ">
          <GiSelfLove />
          Wishlist
        </p>
      </div>
    </div>
  );
};

export default NavHelmet;
