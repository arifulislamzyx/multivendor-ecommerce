"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuBadgePercent } from "react-icons/lu";
import Link from "next/link";
import ecommerceCategories, { Category } from "@/data/categoryList";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import useProducts from "@/Hooks/useProducts";
import Image from "next/image";
import { fadeIn } from "@/animation/varient";

const SubNavbar: React.FC = () => {
  const { products } = useProducts();
  const [hoverAllDept, setHoverAllDept] = useState(false);
  const [hoverSubAllDept, setHoverSubAllDept] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoverProducts, setHoverProducts] = useState(false);

  const handleCategoryHover = (categoryId: number) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryHoverNull = () => {
    setActiveCategory(null);
  };
  const toggleAllDept = () => {
    setHoverAllDept(!hoverAllDept);
  };

  const toggleSubAllDept = () => {
    setHoverSubAllDept(!hoverSubAllDept);
  };

  const toggleProduct = () => {
    setHoverProducts(!hoverProducts);
  };

  const leaveProduct = () => {
    setHoverProducts(false);
  };

  return (
    <section className="hidden bg-blue-700 rounded-lg md:flex items-center">
      <div className="relative flex font-bold  text-white text-center items-center gap-2 p-4 ">
        <div className="font-extrabold text-2xl ">
          <RxHamburgerMenu></RxHamburgerMenu>
        </div>
        <h3 className="cursor-pointer" onMouseEnter={toggleAllDept}>
          All Departments
        </h3>
      </div>
      {hoverAllDept && (
        <div
          onMouseLeave={toggleAllDept}
          onMouseEnter={toggleSubAllDept}
          className="bg-slate-50 absolute z-10 top-48 p-4 rounded"
        >
          {ecommerceCategories.map((category) => (
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              key={category.id}
              onMouseEnter={() => handleCategoryHover(category.id)}
              onMouseLeave={handleCategoryHoverNull}
            >
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                variants={fadeIn("up", 0.3)}
                className="hover:bg-orange-500 hover:p-1 rounded"
              >
                <Link href={"/category"}>
                  <div>
                    <div className="flex items-center gap-2 md:text-xl">
                      <p>{category.icon}</p>
                      {category.category}
                      <IoIosArrowForward />
                    </div>
                  </div>
                </Link>
              </motion.div>
              {hoverSubAllDept && (
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  onMouseLeave={toggleSubAllDept}
                  className="grid grid-cols-3 items-center gap-2 bg-white w-[550px] absolute top-2 left-60 px-4 rounded text-xl "
                >
                  {activeCategory === category.id &&
                    category.subcategories.map((subCategory) => (
                      <motion.div
                        variants={fadeIn("right", 0.4)}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        key={subCategory}
                      >
                        <Link className="" href={"/category"}>
                          {subCategory}
                        </Link>
                      </motion.div>
                    ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
      <div className="flex justify-between w-5/6">
        <div>
          <ul className="flex gap-3 text-white font-bold">
            <div onMouseEnter={toggleProduct}>
              <div className="relative">
                <Link href={"/all-products"}>Products</Link>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 50 }}
                exit={{ opacity: 0, y: -50 }}
                onMouseEnter={toggleProduct}
                onMouseLeave={leaveProduct}
                className="absolute top-44 left-16 z-10 "
              >
                {hoverProducts && (
                  <div className="grid grid-cols-3 rounded gap-2 w-[500px] bg-white text-black p-4  text-sm ">
                    {products.slice(0, 20).map((product) => (
                      <div key={product._id}>
                        <Link href={"/all-product"}>{product.name}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
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
        <div className="flex items-center gap-1 text-xl text-white font-extrabold ">
          <div className="text-orange-300">
            <LuBadgePercent></LuBadgePercent>
          </div>
          <div>
            <Link href={"/bestOffers"}>Best Offers Here</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubNavbar;
