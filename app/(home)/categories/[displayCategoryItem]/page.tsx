"use client";
import { default as useProducts } from "@/Hooks/useProducts";
import React, { useEffect, useState } from "react";
import SingleProductShow from "../SingleProductShow";
import { Product } from "@/types/product";
// import { ApiResponse } from "@/types/product";
// interface ProductProps {
//   products: Product[];
// }

const DisplayCategoryBaseItem: React.FC = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const FashionFiltered: Product[] = products.filter(
      (product) => product.category === "Mens Sneaker"
    );
    setFilteredProducts(FashionFiltered);
  }, [products]);

  return (
    <div>
      <h1>Mens Sneaker Products</h1>
      <div className="grid grid-cols-4 gap-2 p-4">
        {filteredProducts.map((product: Product) => (
          <SingleProductShow
            key={product._id}
            product={product}
          ></SingleProductShow>
        ))}
      </div>
    </div>
  );
};

export default DisplayCategoryBaseItem;
