"use client";

import { Button, CardActions } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import SingleProductCarusel from "@/Components/singleProductCarusel/SingleProductCarusel"
import Link from "next/link";

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

  const handleAddToCart = (product) => {
    if (user && user.email) {
      const cartItem = {
        productId: product._id,
        name,
        img,
        price,
        email: user.email,
      };

        fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data.insertedId);
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your cart has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              title: "Please Login to Order Products",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login Now",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/login", { state: { from: location } });
              }
            });
          }
        });
      
    }
  };

  return products === "fatching" ? "Loading..." : products === "faild" ? "Unable to load data" :(
    
    <div>
    <div className="flex gap-5 items-center sm:flex-wrap">
    <div className="p-10 rounded-xl bg-white shadow-xl ">
    <Image
        width={500}
        height={450}
        src={products.img}
        alt={products.name}
      ></Image>
      </div>
      
      <div className="my-5 sm:p-3 sm:text-center">
        <h2 className="text-2xl mb-10">{products.name}</h2>
        <h3 className="text-xl">Item: {products.category}</h3>
        <p>Seller: {products.seller}</p>
        <p>Brand: {products.brand}</p>
        <h2 className="text-xl">Price: $ {products.price}</h2>
        <p>
          Ratings: {products.ratingsCount}
          {products.rating}
        </p>
        <p>Stock: {products.stock}</p>
        <div className="flex gap-4 mt-10 sm:justify-center">
        <CardActions className="flex justify-center">
            <Link href="payment">
            <Button
              variant="outlined"
              className="items-center rounded-2xl hover:bg-red-600 hover:text-white "
            >
              <span className="transition duration-700 ease-in-out transform hover:scale-105">Buy Now</span>
            </Button>
            </Link>
          </CardActions>
           <CardActions className="flex justify-center">
            <Button
              onClick={() => handleAddToCart(product)}
              variant="outlined"
              className="items-center rounded-2xl hover:bg-orange-500 hover:text-white "
            >
              <span className="transition duration-700 ease-in-out transform hover:scale-105">Add To Cart</span>
            </Button>
          </CardActions>
         </div>
      </div>
    </div>
    
    <div className="mt-5 mb-10">
    <SingleProductCarusel products={relatedProducts}></SingleProductCarusel>
    </div>
    </div>
  )
}

export default SingleProducts;
