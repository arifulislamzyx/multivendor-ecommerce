"use client";
import { Button, CardActions, Rating } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import SingleProductCarusel from "@/Components/singleProductCarusel/SingleProductCarusel";
// import { Product } from "@/types/product";
import UseCart from "@/Hooks/useCart";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ApiResponse } from "@/types/product";

interface Product {
  _id?: string;
  name?: string;
  category?: string;
  img?: string;
  seller?: string;
  price?: number;
  stock?: number;
  rating?: number;
  ratingsCount?: number;
  shipping?: number;
  quantity?: number;
}

interface ProductProps {
  products: Product[];
}

const SingleProducts: React.FC<{
  params: { singleProduct: String };
}> = ({ params }) => {
  const [user, setUser] = useState<{ email: String | null }>(null);
  const { singleProduct } = params;
  const [products, setProducts] = useState<Product[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const router: any = useRouter();

  const { cart, refetch } = UseCart();

  useEffect(() => {
    axios
      .get<Product[]>(
        `https://mitnog-server.vercel.app/products/${singleProduct}`
      )
      .then((response) => {
        const data: any = response.data;
        setProducts(data.data);

        if (data && data.category) {
          fetchRelatedProduct(data.category);
        }
        // fetchRelatedProduct(data.category);
      })

      .catch((err) => {
        setProducts([]);
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

  const handleAddToCart = (product: Product) => {
    if (user && user.email) {
      const cartItem = {
        productId: product._id,
        name: product.name,
        img: product.img,
        price: product.price,
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
                router.push({
                  pathname: "login",
                  query: { from: router.pathname },
                });
              }
            });
          }
        });
    }
  };

  return (
    <div className="container mx-auto my-10 ">
      <div className="flex gap-8">
        <div className="">
          <Image
            width={500}
            height={450}
            src={products[0]?.img}
            alt={products[0]?.name}
            className="hover:transform: scaleY(.9)"
          ></Image>
        </div>

        <div className="bg-white shadow-xl w-1/2 p-6">
          <h2 className="text-2xl mt-5">{products[0]?.name}</h2>
          <h3 className="text-sm mt-10">Item: {products[0]?.category}</h3>
          <p className="font-bold text-lg">
            <span className="text-orange-500 text-base">Brand:</span>{" "}
            {products[0]?.seller}
          </p>
          <p>
            Ratings:<Rating></Rating>({products[0]?.ratingsCount})
          </p>
          <p>Stock: {products[0]?.stock}</p>
          <h2 className="text-lg mt-8">Price: ${products[0]?.price}</h2>
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
                onClick={() => handleAddToCart(products[0])}
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
      </div>
      <div>
        <p className="mt-5 text-xl">Description: </p>
        <p className="w-2/3 my-4">
          Introducing our {products[0]?.name}, crafted from premium [Fabric
          Type] for a soft and luxurious feel. The [Design Element], whether
          elegant embroidery or chic prints, adds sophistication to this piece.
          Its flattering [Fit Description] ensures a comfortable yet stylish
          wear, perfect for [Occasion or Use]. Elevate your wardrobe with this
          versatile fashion staple
        </p>
      </div>

      <div className="mt-5 mb-10">
        {/* <SingleProductCarusel products={relatedProducts}></SingleProductCarusel> */}
      </div>
    </div>
  );
};

export default SingleProducts;
