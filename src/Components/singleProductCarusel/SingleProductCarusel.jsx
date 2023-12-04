import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/Providers/AuthProviders';
import UseCart from '@/Hooks/useCart';


const textMaxLength = 16;

const truncateText =(text, maxLength)=>{
  if(text.length <= maxLength){
    return text;
  }

  return `${text.slice(0,maxLength)}...`
}


export default function SingleProductCarusel({products}) {
  const { _id, name, img, price, rating } = products || [];

  const navigate = useRouter()
  const {user} = useContext(AuthContext)
  const [,refetch] = UseCart()

  const handleAddToCart = (products) => {
    if (user && user.email) {
      const cartItem = {
        productId: _id,
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
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
       <div className='w-[200px] h-[100px] rounded shadow-2xl'>
       {products.map(product =>(
        <SwiperSlide  key={product._id}>
       
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.img}
        />
        <CardContent>
          <Link href={`/all-products/${product._id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {truncateText(product.name, textMaxLength)}
            </Typography>
          </Link>
          <Rating></Rating>
        </CardContent>
        <p className="ml-4">${product.price}</p>
        <CardActions>
          <Button
            onClick={() => handleAddToCart(product)}
            variant="contained"
            className="bg-blue-600"
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
  
    </SwiperSlide>
      ))}
       </div>
      </Swiper>
    </>
  );
}
