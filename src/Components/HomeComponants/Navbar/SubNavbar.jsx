import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuBadgePercent } from "react-icons/lu";
import Link from "next/link";

const SubNavbar = () => {
  return (
    <div className="hidden md:max-w-[1050px] mx-auto bg-blue-700 rounded-lg md:flex items-center">
      <div className="flex font-extrabold text-2xl text-white text-center items-center gap-2 p-4 ">
        <RxHamburgerMenu></RxHamburgerMenu>
        <h3>ALl Departments</h3>
      </div>
      <div className="flex gap-80">
        <div>
          <ul className="flex gap-3 text-white font-bold">
            <li>
              <Link href={"/all-products"}>Products</Link>
            </li>
            <li>
              <Link href={"/features"}>Features</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/elements"}>Elements</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-1 text-xl text-white font-extrabold items-center">
          <div className="text-orange-300">
            <LuBadgePercent></LuBadgePercent>
          </div>
          <div>Best Offers Here</div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
