"use client";
import UseCart from "@/Hooks/useCart";
import { AuthContext } from "@/Providers/AuthProviders";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompressIcon from "@mui/icons-material/Compress";
import ShareIcon from "@mui/icons-material/Share";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const NewProductCard = ({ product }) => {
  const { _id, name, img, price, rating } = product || [];

  const [hovered, setHovered] = useState(false);
  const navigate = useRouter();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [, refetch] = UseCart();

  const toggleHover = () => {
    setHovered(!hovered);
  };

  const textMaxLength = 10;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }

    return `${text.slice(0, maxLength)}...`;
  };

  const handleAddToCart = (product) => {
    if (user && user.email) {
      const cartItem = {
        productId: _id,
        name,
        img,
        price,
        email: user.email,
      };

      console.log("acrtitems", cartItem);

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
          }
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
  };

  return (
    <div>
      <Box
        component="div"
        key={product._id}
        className="max-w-[450px] p-5 bg-white rounded-xl transition-all"
      >
        <Card sx={{ maxWidth: 600 }}>
          <Box
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={{ position: "relative" }}
          >
            <Image
              component="img"
              alt={product.name}
              height={150}
              width={300}
              src={product.img}
              className="transition duration-700 ease-in-out transform hover:scale-105"
            />
            {hovered && (
              <Box
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "85%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Button className="bg-white text-black border-red-100 m-1 ">
                  <FavoriteBorderIcon />
                </Button>
                <Button className="bg-white text-black m-1 ">
                  <CompressIcon />
                </Button>
                <Button className="bg-white text-black m-1">
                  <ShareIcon />
                </Button>
              </Box>
            )}
          </Box>
          <CardContent>
            <Link href={`/all-products/${product._id}`}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="text-sm md:text-base"
              >
                {truncateText(product.name, textMaxLength)}
              </Typography>
            </Link>
            <Rating></Rating>
            <p className="ml-1">$ {product.price}</p>
          </CardContent>
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
        </Card>
      </Box>
    </div>
  );
};

export default NewProductCard;
