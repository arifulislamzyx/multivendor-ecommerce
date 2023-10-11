"use client";

import useProducts from "@/Hooks/useProducts";
import Image from "next/image";

const SingleProducts = () => {
  const { products } = useProducts();
  const {
    name,
    img,
    price,
    brand,
    category,
    seller,
    ratingsCount,
    stock,
    rating,
  } = products || [];
  console.log(products);
  return (
    <div>
      <div className="flex mt-5">
        <Image width={500} height={400} src={img} alt="product-img"></Image>
        <div>
          <h2 className="text-2xl">{name}</h2>
          <h3 className="text-xl">Item: {category}</h3>
          <p>Seller: {seller}</p>
          <p>Brand: {brand}</p>
          <h2 className="text-xl">Price: $ {price}</h2>
          <p>
            Ratings: {ratingsCount}
            {rating}
          </p>
          <p>Stock: {stock}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
