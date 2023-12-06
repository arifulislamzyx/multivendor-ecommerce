"use client";
import Header from "./Header";
import Products from "../all-products/Products";

import { Category } from "@/Components/HomeComponants/Category";
import { NewProducts } from "@/Components/HomeComponants/Newproducts";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <NewProducts></NewProducts>
      <Category></Category>
      <Products></Products>
    </div>
  );
}
