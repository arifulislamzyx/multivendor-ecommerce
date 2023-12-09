"use client";
import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mitnog-server-dgugxhu66-ariful-islams-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.log("Product Fatching Faild for", error));
  }, []);
  return { products, loading };
};

export default useProducts;
