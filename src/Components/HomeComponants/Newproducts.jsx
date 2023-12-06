"use client"
import useProducts from "@/Hooks/useProducts";
import { useContext,  useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import UseCart from "@/Hooks/useCart";
import { AuthContext } from "@/Providers/AuthProviders";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompressIcon from '@mui/icons-material/Compress';
import ShareIcon from '@mui/icons-material/Share';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import Link from "next/link";

const textMaxLength = 10;

const truncateText =(text, maxLength)=>{
  if(text.length <= maxLength){
    return text;
  }

  return `${text.slice(0,maxLength)}...`
}


export const NewProducts =()=>{
  const navigate = useRouter();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [, refetch] = UseCart();
  const {products} = useProducts()
  const [hovered, setHovered] = useState(false)
  
  const toggleHover =()=>{
    setHovered(!hovered)
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
  
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        }
      }
    ]
  };

  return (
   <div className="bg-white">
    <p className="text-2xl ml-32 pt-5 md:ml-4 sm:ml-2">New Products</p>
    <div className="bg-white rounded w-full max-w-[1050px] mx-auto relative 
    md:w-[750px] sm:m-auto ">
    <Slider {...settings}>
    {
      products.map(product =>(
        <Box component="div" key={product._id} className="max-w-[450px] p-5 bg-white rounded-xl ">
        <Card sx={{ maxWidth: 345 }}>
          <Box
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={{ position: 'relative' }}
          >
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={product.img}
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
            <Link href={`/all-products/${product._id}`}>
              <Typography gutterBottom variant="h6" component="div">
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
              <span className="transition duration-700 ease-in-out transform hover:scale-105">Add To Cart</span>
            </Button>
          </CardActions>
        </Card>
      </Box>
      ))
    }
</Slider>
   </div>
   </div>
  );
}

    
// export default NewProducts;

// <div key={product._id} className="w-[450px] p-5 bg-white rounded-xl ">
      //   <div onMouseEnter={toggleHover} 
      //   onMouseLeave={toggleHover} className="relative">
      //      <img src={product.img} alt="product_image" className="rounded transition duration-700 ease-in-out transform hover:scale-105" />
      //      {hovered && (
      //     <Box
      //       style={{
      //         position: 'absolute',
      //         top: '50%',
      //         left: '85%',
      //         transform: 'translate(-50%, -50%)',
                            
      //       }}
      //     >
      //       <Button className="bg-white text-black border-red-100 m-1 ">
      //         <FavoriteBorderIcon/>
      //       </Button>
      //       <Button className="bg-white text-black m-1 " >
      //         <CompressIcon/>
      //       </Button>
      //       <Button className="bg-white text-black m-1">
      //         <ShareIcon/>
      //       </Button>
      //     </Box>
      //   )}
      //   </div>
      //   <div>
      //     <p>$ {product.price}</p>
      //     <p>{truncateText(product.name, textMaxLength)}</p>
      //     <p className="items-center"><Rating></Rating>{product.ratings}</p>
      //     <button className="bg-blue-600 p-2 rounded text-white">Add to Cart</button>
      //   </div>
      // </div>
 
