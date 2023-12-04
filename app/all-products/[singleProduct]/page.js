"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import SingleProductCarusel from "@/Components/singleProductCarusel/SingleProductCarusel"

const SingleProducts = ({params}) => {
  const {singleProduct} = params
  const [products, setProducts] = useState("fatching")
  const [relatedProducts, setRelatedProducts] = useState([])
  
  useEffect(()=>{

  fetch(`http://localhost:5000/products/${singleProduct}`)
  .then((res)=>res.json())
  .then((data) => {
    setProducts(data);

    if(data && data.category){
      fetchRelatedProduct(data.category);
    }
    // fetchRelatedProduct(data.category);
  })

  .catch(err=>{
    setProducts("faild")
    console.log("faild to product id fatching=>",err)
  })
  },[])


  const fetchRelatedProduct =(category)=>{

    fetch(`http://localhost:5000/products?category=${category}&limit=5`)
    .then(res=>res.json())
    .then(data=> setRelatedProducts(data))
    .catch(err=> {
      console.log("faild to fetch related product=>", err);
    })
  }

  return products === "fatching" ? "Loading..." : products === "faild" ? "Unable to load data" :(
    
    <div>
    <div className="flex gap-5 ">
    <div className="p-10 rounded bg-white">
      <img  className="w-[500px] h-[450px]" src={products.img} alt="product-image"/>
      </div>
      {/* <Image
        width={500}
        height={400}
        src={products.img}
        alt="product-img"
      ></Image> */}
      <div className="my-5">
        <h2 className="text-2xl">{products.name}</h2>
        <h3 className="text-xl">Item: {products.category}</h3>
        <p>Seller: {products.seller}</p>
        <p>Brand: {products.brand}</p>
        <h2 className="text-xl">Price: $ {products.price}</h2>
        <p>
          Ratings: {products.ratingsCount}
          {products.rating}
        </p>
        <p>Stock: {products.stock}</p>
        <div className="flex gap-4 mt-10">
        <Button variant="contained" color="warning">Buy Now </Button>
        <Button variant="contained">Add to Cart</Button>
        </div>
      </div>
    </div>
    
    <div className="mt-5 ">
    <SingleProductCarusel products={relatedProducts}></SingleProductCarusel>
    </div>
    </div>
  )
}

export default SingleProducts;
