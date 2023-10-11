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

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});
const ProductDisplay = ({ product }) => {
  const { _id, name, img, price, rating } = product || [];
  console.log(product);
  const { user } = useContext(AuthContext);
  const { refetch } = UseCart();

  const handleAddToCart = (product) => {
    console.log(product);
    if (user && user.email) {
      const cartItem = {
        productId: _id,
        name,
        img,
        price,
        email: user.email,
      };

      fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insetedId) {
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
    <div className="w-80 gap-2 mt-2 px-5 rounded-xl">
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img}
          />
          <CardContent>
            <Link href={`/all-products/${_id}`}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </Link>
            <Rating></Rating>
          </CardContent>
          <p className="ml-4">$ {price}</p>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default ProductDisplay;
