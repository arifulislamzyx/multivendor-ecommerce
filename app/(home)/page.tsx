"use client";
import Header from "./Header";
import Products from "./all-products/Products";
import { Category } from "@/Components/HomeComponants/Category";
import { NewProducts } from "@/Components/HomeComponants/Newproducts";
import HotDeals from "../../src/Components/HomeComponants/HotDeals";
import { ReactElement } from "react";
import Showcase from "@/Components/HomeComponants/Showcase";
import OfferBaneer from "@/Components/HomeComponants/OfferBaneer";
import Partner from "@/Components/HomeComponants/Partner";
import BigSale from "@/Components/HomeComponants/BigSale";
import BlogPost from "@/Components/HomeComponants/blogPost/BlogPost";

export default function Home(): ReactElement {
  return (
    <div>
      <Header />
      <Showcase />
      <Category />
      <NewProducts />
      <OfferBaneer />
      <Products products={undefined} />
      <HotDeals />
      <Partner />
      <BigSale product={undefined} />
      <BlogPost blogpost={[]} />
    </div>
  );
}
