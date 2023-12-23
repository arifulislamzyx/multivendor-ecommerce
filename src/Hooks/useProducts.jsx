"use client";
import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://mitnog-server.vercel.app/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log("Product Fatching Faild for", error));
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mitnog-server.vercel.app/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Product Fetching Failed:", error);
      }
    };

    fetchData();
  }, []);

  return { products, loading };
};

export default useProducts;
