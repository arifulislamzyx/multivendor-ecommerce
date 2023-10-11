// import Image from "next/image";

import Navbar from "@/app/(home)/Navbar";
import Header from "./Header";
import OfferSlider from "@/Components/HomeComponants/OfferSlide/OfferSlider";
import ProductDisplay from "@/app/all-products/ProductDisplay";
import Products from "../all-products/Products";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      {/* <OfferSlider></OfferSlider> */}
      <Products></Products>
    </>
  );
}
