"use client"
import React, { useContext, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Rating, Skeleton, } from "@mui/material";
import Link from "next/link";
import { AuthContext } from "@/Providers/AuthProviders";
import UseCart from "@/Hooks/useCart";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompressIcon from '@mui/icons-material/Compress';
import ShareIcon from '@mui/icons-material/Share';



const ProductDisplay = ({ product }) => {
  const { _id, name, img, price, rating } = product || [];
  const navigate = useRouter();
  const { user } = useContext(AuthContext);
  const [, refetch] = UseCart();
  const [hovered, setHovered] = useState(false);
  const textMaxLength = 13;

const truncateText =(text, maxLength)=>{
  if(text.length <= maxLength){
    return text;
  }

  return `${text.slice(0,maxLength)}...`
}

  const toggleHover = () => {
    setHovered(!hovered);
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
  return (
   
    <Box className="w-70 gap-5 mt-5 rounded shadow-xl">
    <Card sx={{ maxWidth: 345 }}>
      <Box
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{ position: 'relative' }}
      >
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={img}
          className="transition duration-700 ease-in-out transform hover:scale-105"
        />
        {hovered && (
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: '85%',
              transform: 'translate(-50%, -50%)',
                            
            }}
          >
            <Button className="bg-white text-black border-red-100 m-1 ">
              <FavoriteBorderIcon/>
            </Button>
            <Button className="bg-white text-black m-1 " >
              <CompressIcon/>
            </Button>
            <Button className="bg-white text-black m-1">
              <ShareIcon/>
            </Button>
          </Box>
        )}
      </Box>
      <CardContent>
        <Link href={`/all-products/${_id}`}>
          <Typography  gutterBottom variant="h6" component="div" className="sm:text-sm">
            {truncateText(name, textMaxLength)}
          </Typography>
        </Link>
        <Rating></Rating>
        <p className="ml-2">${price}</p>
      </CardContent>
      <CardActions className="flex justify-center">
            <Button
              onClick={() => handleAddToCart(product)}
              variant="outlined"
              className=" rounded-2xl hover:bg-orange-500 hover:text-white "
            >
              <span className="transition duration-700 ease-in-out transform hover:scale-105">Add To Cart</span>
            </Button>
          </CardActions>
    </Card>
  </Box>
 

  );
};

export default ProductDisplay;
