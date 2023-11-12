import useProducts from "@/Hooks/useProducts";
import ProductDisplay from "./ProductDisplay";
import Button from "@mui/material/Button";
import { useState } from "react";

const Products = () => {
  const { products } = useProducts();
  // console.log(products.length);
  const [showAll, setShowAll] = useState(false);

  const buttonClassName = showAll
    ? "bg-blue-600 w-30 h-10 absolute bottom-0 top-[635rem] left-[40rem]"
    : "bg-blue-600 w-30 h-10 absolute bottom-0 top-[122rem] left-[40rem]";

  return (
    <div className="bg-white">
      <div className=" grid grid-cols-4 px-4 relative">
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
          className={buttonClassName}
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};

export default Products;
