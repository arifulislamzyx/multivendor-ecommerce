import useProducts from "@/Hooks/useProducts";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Skeleton } from "@mui/material";
import { Product } from "@/types/product";

const ProductDisplay = dynamic(() => import("./ProductDisplay"));

interface ProductsProps {
  products: Product;
}

const Products: React.FC<ProductsProps> = () => {
  const { products, loading } = useProducts();
  // console.log(products.length);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-white">
      <p className="text-2xl font-bold pt-5 ml-32 lg:ml-35 md:ml-20 sm:ml-2">
        Explore Now
      </p>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 w-full max-w-[1150px] mx-auto mb-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={200}
              height={100}
            />
          ))}
        </div>
      ) : (
        <>
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5
          lg:grid-cols-5 xl:grid-cols-4 md:items-center md:gap-4 md:max-w-[900px] mx-auto "
          >
            {products
              .slice(0, showAll ? products.length : 12)
              .map((product: Product) => (
                <ProductDisplay
                  key={product._id}
                  product={product}
                ></ProductDisplay>
              ))}
          </div>
          {products.length > 12 && (
            <div className="text-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="contained"
                className="bg-blue-600 m-4 sm:ml"
              >
                {showAll ? (
                  "Show Less"
                ) : (
                  <>
                    <Link href="/all-products">Show More..</Link>
                  </>
                )}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
