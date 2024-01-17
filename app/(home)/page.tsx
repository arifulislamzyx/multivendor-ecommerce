"use client";
import Header from "./Header";
import Products from "./all-products/Products";
import { Category } from "@/Components/HomeComponants/Category";
import { NewProducts } from "@/Components/HomeComponants/Newproducts";
import HotDeals from "../../src/Components/HomeComponants/HotDeals";
import { ReactElement } from "react";
import Showcase from "@/Components/HomeComponants/Showcase";
import OfferBaneer from "@/Components/HomeComponants/OfferBaneer";

export default function Home(): ReactElement {
  return (
    <div>
      <Header />
      <Showcase />
      <Category />
      <NewProducts />
      <HotDeals />
      <OfferBaneer/>
      <Products />
    </div>
  );
}
