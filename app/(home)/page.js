"use client";
import Header from "./Header";
import Products from "../all-products/Products";
import NewProducts from "../../src/Components/HomeComponants/Newproducts"
import { Category } from "@/Components/HomeComponants/Category";


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
