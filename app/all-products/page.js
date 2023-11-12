import useProducts from "@/Hooks/useProducts";
import React from "react";
import ProductDisplay from "./ProductDisplay";

const Products = () => {
  const { products } = useProducts() || [];
  console.log(products);
  // const [_id, img, name, price, brand, category, seller, ratingsCount, stock] =
  //   products || [];

  return (
    <div className=" grid grid-cols-4 px-4">
      {products.map((product) => (
        <ProductDisplay key={product._id} product={product}></ProductDisplay>
      ))}
    </div>
  );
};

export default Products;
