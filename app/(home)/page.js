// import Image from "next/image";
"use client";
import Navbar from "./Navbar";
import Header from "./Header";
// import OfferSlider from "@/Components/HomeComponants/OfferSlider/OfferSlider";
import Products from "../all-products/Products";
import Footer from "@/Components/HomeComponants/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      {/* <OfferSlider></OfferSlider> */}
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}
