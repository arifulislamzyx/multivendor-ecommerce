import useProducts from "@/Hooks/useProducts";
import ProductDisplay from "./ProductDisplay";
import Button from "@mui/material/Button";
import { useState } from "react";

const Products = () => {
  const { products } = useProducts();
  // console.log(products.length);
  const [showAll, setShowAll] = useState(false);

  // const buttonClassName = showAll
  //   ? "bg-blue-600 w-30 h-10 absolute bottom-0 top-[300rem] left-[35rem] mb-1"
  //   : "bg-blue-600 w-30 h-10 absolute bottom-0 top-[50rem] left-[35rem]";

  return (
    <div className="bg-white">
      <p className="text-2xl pt-5 ml-32">Explore Now</p>
      <div className=" grid grid-cols-4 gap-3 px-4 w-[1050px] m-auto relative">
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
          className="bg-blue-600 ml-[36rem] mt-2"
        >
          {showAll ? "Show Less" : "Show More.."}
        </Button>
      )}
    </div>
  );
};

export default Products;
