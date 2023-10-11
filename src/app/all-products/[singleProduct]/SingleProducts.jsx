import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProducts = ({ products }) => {
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
  return (
    <div>
      <Image width={400} height={200} src={img} alt="product-img"></Image>
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
  );
};

export default SingleProducts;
