"use client";

import useProducts from "@/Hooks/useProducts";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleProducts = () => {
  const router = useRouter();
  const { singleproduct } = router.query || [];

  return (
    <p>Name: {name}</p>
    // <div className="flex mt-5">
    //   <Image
    //     width={500}
    //     height={400}
    //     decoding="async"
    //     src={img}
    //     alt="product-img"
    //   ></Image>
    //   <div>
    //     <h2 className="text-2xl">{name}</h2>
    //     <h3 className="text-xl">Item: {category}</h3>
    //     <p>Seller: {seller}</p>
    //     <p>Brand: {brand}</p>
    //     <h2 className="text-xl">Price: $ {price}</h2>
    //     <p>
    //       Ratings: {ratingsCount}
    //       {rating}
    //     </p>
    //     <p>Stock: {stock}</p>
    //   </div>
    // </div>
  );
};

export default SingleProducts;
