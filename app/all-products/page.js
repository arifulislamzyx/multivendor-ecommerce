"use client"

import useProducts from "@/Hooks/useProducts";
import React from "react";
import ProductDisplay from "./ProductDisplay";

export default function Products ()  {
  const { products } = useProducts() || [];
  

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 px-4 w-full max-w-[1050px] mx-auto">
      <p className="text-2xl p-2">All Products</p>
      {products.map((product) => (
        <ProductDisplay key={product._id} product={product}></ProductDisplay>
      ))}
    </div>
  );
};
