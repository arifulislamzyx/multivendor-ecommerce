
import useProducts from "@/Hooks/useProducts";
import { Box, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Button from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UseCart from "@/Hooks/useCart";
import { AuthContext } from "@/Providers/AuthProviders";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompressIcon from '@mui/icons-material/Compress';
import ShareIcon from '@mui/icons-material/Share';

const textMaxLength = 16;

const truncateText =(text, maxLength)=>{
  if(text.length <= maxLength){
    return text;
  }

  return `${text.slice(0,maxLength)}...`
}


const NewProducts =()=>{
  // const navigate = useRouter();
  // const { user } = useContext(AuthContext);
  // const [, refetch] = UseCart();
  const {products} = useProducts()
  const [hovered, setHovered] = useState(false)
  
  const toggleHover =()=>{
    setHovered(!hovered)
  }

  // const handleAddToCart = (product) => {
  //   if (user && user.email) {
  //     const cartItem = {
  //       productId: _id,
  //       name,
  //       img,
  //       price,
  //       email: user.email,
  //     };

  //     fetch("http://localhost:5000/carts", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(cartItem),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.insertedId) {
  //           refetch();
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Your cart has been saved",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         } else {
  //           Swal.fire({
  //             title: "Please Login to Order Products",
  //             text: "You won't be able to revert this!",
  //             icon: "warning",
  //             showCancelButton: true,
  //             confirmButtonColor: "#3085d6",
  //             cancelButtonColor: "#d33",
  //             confirmButtonText: "Login Now",
  //           }).then((result) => {
  //             if (result.isConfirmed) {
  //               navigate("/login", { state: { from: location } });
  //             }
  //           });
  //         }
  //       });
  //   }
  // };
  
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
   <div className="bg-white">
    <p className="text-2xl ml-32 pt-5">New Products</p>
    <div className="w-[1050px] m-auto bg-white rounded ">
    <Slider {...settings}>
    {products.map(product =>(
    //   <Box key={product._id} className="w-[450px] p-5 bg-white rounded-xl">
    //   <Card sx={{ maxWidth: 345 }}>
    //     <CardMedia
    //       component="img"
    //       alt={name}
    //       height="140"
    //       image={product.img}
    //     />
    //     <CardContent>
    //       <Link href={`/all-products/${product._id}`}>
    //         <Typography gutterBottom variant="h6" component="div">
    //           {truncateText(product.name, textMaxLength)}
    //         </Typography>
    //       </Link>
    //       <Rating></Rating>
    //     </CardContent>
    //     <p className="ml-4">${product.price}</p>
    //     <CardActions>
    //       <Button
    //         onClick={() => handleAddToCart(product)}
    //         variant="contained"
    //         className="bg-blue-600 "
    //       >
    //         Add To Cart
    //       </Button>
    //     </CardActions>
    //   </Card>
    // </Box>
      <div key={product._id} className="w-[450px] p-5 bg-white rounded-xl ">
        <div onMouseEnter={toggleHover} 
        onMouseLeave={toggleHover} className="relative">
           <img src={product.img} alt="product_image" className="rounded transition duration-700 ease-in-out transform hover:scale-105" />
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
        </div>
        <div>
          <p>$ {product.price}</p>
          <p>{truncateText(product.name, textMaxLength)}</p>
          <p className="items-center"><Rating></Rating>{product.ratings}</p>
          <button className="bg-blue-600 p-2 rounded text-white">Add to Cart</button>
        </div>
      </div>
    
    ))}
</Slider>
   </div>
   </div>
  );
}

export default NewProducts;
 