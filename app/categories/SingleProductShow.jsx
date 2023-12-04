import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating, ThemeProvider, createTheme } from "@mui/material";
import Link from "next/link";
import { AuthContext } from "@/Providers/AuthProviders";
import UseCart from "@/Hooks/useCart";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const textMaxLength = 13;

const truncateText =(text, maxLength)=>{
  if(text.length <= maxLength){
    return text;
  }

  return `${text.slice(0,maxLength)}...`
}
const SingleProductShow = ({ product }) => {
  const { _id, name, img, price, rating } = product || [];
  // console.log(product);
  const navigate = useRouter();
  const { user } = useContext(AuthContext);
  const [, refetch] = UseCart();

  const handleAddToCart = (product) => {
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
    <div className="w-70 gap-5 mt-5 rounded shadow-xl">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <CardContent>
          <Link href={`/all-products/${_id}`}>
            <Typography gutterBottom variant="h6" component="div">
              {truncateText(name, textMaxLength)}
            </Typography>
          </Link>
          <Rating></Rating>
        </CardContent>
        <p className="ml-4">${price}</p>
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
    </div>
  );
};

export default SingleProductShow;