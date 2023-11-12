"use client";
import Link from "next/link";
import Slider from "@/Components/HomeComponants/Slider";

const Header = () => {
  return (
    <div className="w-full flex flex-auto px-8 gap-4">
      <div className="w-1/4 items-center bg-slate-200 p-4 rounded">
        <h2 className="5xl font-bold">Category</h2>
        <ul>
          <Link href="/gadgets">
            <li>Gadgets</li>
          </Link>
          <li>Fashion</li>
          <li>Mobile</li>
          <li>Electronics</li>
          <li>Health & Beauty</li>
          <li>Grocery</li>
          <li>Sports & Outdoors</li>
          <li>More 1</li>
        </ul>
      </div>
      <Slider></Slider>
    </div>
  );
};

export default Header;
