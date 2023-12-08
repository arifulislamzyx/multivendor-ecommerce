import useProducts from "@/Hooks/useProducts";
import ProductDisplay from "./ProductDisplay";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "next/link";


const Products = () => {
  const { products } = useProducts();
  // console.log(products.length);
  const [showAll, setShowAll] = useState(false);

  // const buttonClassName = showAll
  //   ? "bg-blue-600 w-30 h-10 absolute bottom-0 top-[300rem] left-[35rem] mb-1"
  //   : "bg-blue-600 w-30 h-10 absolute bottom-0 top-[50rem] left-[35rem]";

  return (
    <div className="bg-white">
      <p className="text-2xl pt-5 ml-32 lg:ml-35 md:ml-32 sm:ml-2">Explore Now</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 px-4 w-full max-w-[1050px] mx-auto ">

        {products
          .slice(0, showAll ? products.length : 12)
          .map((product, index) => (
            <ProductDisplay
              key={product._id}
              product={product}
            ></ProductDisplay>
          ))}
      </div>
      {products.length > 12 && (
        <Button
          onClick={() => setShowAll(!showAll)}
          variant="contained"

          className="bg-blue-600 ml-[36rem] sm:ml-20 sm:mt-2 md:ml-2 md:mb-8"
        >
          {showAll ? "Show Less" : <> <Link href="/allproducts">Show More..</Link></>}

        </Button>
      )}
    </div>
  );
};

export default Products;
