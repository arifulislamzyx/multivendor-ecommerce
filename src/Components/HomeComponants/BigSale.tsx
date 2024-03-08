import useProducts from "@/Hooks/useProducts";
import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";
import ProductDisplay from "../../../app/(home)/all-products/ProductDisplay";

interface ProductProps {
  product: Product;
}

const BigSale: React.FC<ProductProps> = () => {
  const { products, loading } = useProducts();
  console.log("bigsale Product", products);

  return (
    <div className="bg-blue-700">
      <section className="container grid md:flex py-8">
        <div className="w-1/2 ">
          <div className="w-80 text-white md:ml-40 my-5 gap-5">
            <h3 className="text-base md:text-3xl font-bold">
              Essential Tools To Renew With Porto Products
            </h3>
            <p className="text-base">Big Sale, ends soon!</p>
            <p>Viewing essential tools available</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {products.slice(0, 3).map((product) => (
            <ProductDisplay
              key={product._id}
              product={product}
            ></ProductDisplay>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BigSale;
