import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import UseCart from "@/Hooks/useCart";
import Checkout from "./checkout";

// const products = [
//   {
//     name: "Product 1",
//     desc: "A nice thing",
//     price: "$9.99",
//   },
//   {
//     name: "Product 2",
//     desc: "Another thing",
//     price: "$3.45",
//   },
//   {
//     name: "Product 3",
//     desc: "Something else",
//     price: "$6.51",
//   },
//   {
//     name: "Product 4",
//     desc: "Best thing of all",
//     price: "$14.11",
//   },
//   { name: "Shipping", desc: "", price: "Free" },
// ];

// const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
// const payments = [
//   { name: "Card type", detail: "Visa" },
//   { name: "Card holder", detail: "Mr John Smith" },
//   { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
//   { name: "Expiry date", detail: "04/2024" },
// ];

export default function Review({ formData }) {
  const {
    firstName,
    lastName,
    address1,
    address2,
    zip,
    city,
    country,
    cardName,
    cardNumber,
    cardExp,
    cvv,
  } = formData;
  console.log(formData);

  const [cart, refetch] = UseCart();
  const total = cart.reduce((accumulator, item) => item.price + accumulator, 0);

  const maskCardNumber = (cardNumber) => {
    const maskedPart = "X".repeat(cardNumber.length - 4);
    const visiblePart = cardNumber.slice(-4);
    return maskedPart + visiblePart;
  };
  const maskCardCvv = (cardCvv) => {
    const maskedPart = "X".repeat(cardCvv.length);
    return maskedPart;
  };

  <Checkout total={total}></Checkout>;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product._id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            {/* secondary={product.desc} */}
            <Typography variant="body2">$ {product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{firstName + " " + lastName}</Typography>
          <Typography gutterBottom>
            {address1 + " " + address2 + " " + zip + " " + city + " " + country}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {/* {payments.map((payment) => ( */}
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {maskCardNumber(cardNumber)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardExp}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{maskCardCvv(cvv)}</Typography>
              </Grid>
            </React.Fragment>
            {/* ))} */}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
