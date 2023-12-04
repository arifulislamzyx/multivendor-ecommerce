"use client"

import useProducts from "@/Hooks/useProducts";
import React from "react";
import ProductDisplay from "./ProductDisplay";

export default function Products ()  {
  const { products } = useProducts() || [];
  

  return (
    <div className=" grid grid-cols-4 px-4">
      {products.map((product) => (
        <ProductDisplay key={product._id} product={product}></ProductDisplay>
      ))}
    </div>
  );
};
