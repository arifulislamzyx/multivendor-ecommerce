"use client";
import { Button, CardActions, Rating } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import SingleProductCarusel from "@/Components/singleProductCarusel/SingleProductCarusel";
import Link from "next/link";

const SingleProducts = ({ params }) => {
  const { singleProduct } = params;
  const [products, setProducts] = useState("fatching");
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://mitnog-server.vercel.app/products/${singleProduct}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        if (data && data.category) {
          fetchRelatedProduct(data.category);
        }
        // fetchRelatedProduct(data.category);
      })

      .catch((err) => {
        setProducts("faild");
        console.log("faild to product id fatching=>", err);
      });
  }, [singleProduct]);

  const fetchRelatedProduct = (category) => {
    fetch(
      `https://mitnog-server.vercel.app/products?category=${category}&limit=5`
    )
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data))
      .catch((err) => {
        console.log("faild to fetch related product=>", err);
      });
  };

  const handleAddToCart = (product) => {
    if (user && user.email) {
      const cartItem = {
        productId: product._id,
        name,
        img,
        price,
        email: user.email,
      };

      fetch("https://mitnog-server.vercel.app/carts", {
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

  return products === "fatching" ? (
    "Loading..."
  ) : products === "faild" ? (
    "Unable to load data"
  ) : (
    <div className="p-10 ">
      <div className="flex gap-5 sm:flex-wrap">
        <div className="p-10 w-full md:w-1/2 lg:w-1/2 rounded-xl bg-white shadow-xl">
          <Image
            width={500}
            height={450}
            src={products.img}
            alt={products.name}
            className="hover:transform: scaleY(.9)"
          ></Image>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="text-2xl mt-5">{products.name}</h2>
          <h3 className="text-sm mt-10">Item: {products.category}</h3>
          <p>
            <span className="text-orange-500">Brand:</span> {products.seller}
          </p>
          <p>
            Ratings:<Rating></Rating>({products.ratingsCount})
          </p>
          <p>Stock: {products.stock}</p>
          <h2 className="text-lg mt-8">Price: ${products.price}</h2>
          <div className="mt-5 mb-2">
            <p className="text-sm font-bold">Product Specification:</p>
            <ul>
              <li>•Crafted from exquisite fabrics,</li>
              <li>•our garment exudes elegance,</li>
              <li>•Its intricate details and tailored silhouette,</li>
              <li>•Easy care adds convenience to its allure</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-10 sm:justify-center">
            <CardActions className="flex justify-center ">
              <Link href="payment">
                <Button
                  variant="outlined"
                  className="items-center rounded-2xl hover:bg-blue-700 hover:text-white "
                >
                  <span className="transition duration-700 ease-in-out transform hover:scale-105">
                    Buy Now
                  </span>
                </Button>
              </Link>
            </CardActions>
            <CardActions className="flex justify-center">
              <Button
                onClick={() => handleAddToCart(product)}
                variant="outlined"
                className="items-center rounded-2xl hover:bg-orange-500 hover:text-white "
              >
                <span className="transition duration-700 ease-in-out transform hover:scale-105">
                  Add To Cart
                </span>
              </Button>
            </CardActions>
          </div>
        </div>
        <p className="mt-5">Description: </p>
        <p className="mt-2 text w-full md:w1/2 lg:1/2">
          Introducing our {products.name}, crafted from premium [Fabric Type]
          for a soft and luxurious feel. The [Design Element], whether elegant
          embroidery or chic prints, adds sophistication to this piece. Its
          flattering [Fit Description] ensures a comfortable yet stylish wear,
          perfect for [Occasion or Use]. Elevate your wardrobe with this
          versatile fashion staple
        </p>
      </div>

      <div className="mt-5 mb-10">
        <SingleProductCarusel products={relatedProducts}></SingleProductCarusel>
      </div>
    </div>
  );
};

export default SingleProducts;
