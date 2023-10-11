import useProducts from "@/Hooks/useProducts";

import ProductDisplay from "./ProductDisplay";

const Products = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <div className=" grid grid-cols-4 px-4">
      {products.map((product) => (
        <ProductDisplay key={product._id} product={product}></ProductDisplay>
      ))}
    </div>
  );
};

export default Products;
