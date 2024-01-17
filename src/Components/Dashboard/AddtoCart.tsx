"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UseCart from "@/Hooks/useCart";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import UserAxiosSecure from "@/Hooks/useAxiosSecure";
import Link from "next/link";
import axios from "axios";
import { AddToCart } from "@/types/addToCart";

interface AddToCartProps{
  addtocart: AddToCart;
}

const BasicTable:React.FC<AddToCartProps> = ({addtocart})=> {
  const {cart, refetch} = UseCart();
  const [axiosSecure] = UserAxiosSecure();
  console.log(cart);

  const total = cart.reduce((accumulator, item) => item.price + accumulator, 0);

  const handleDeleteItems = (item:AddToCart) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete ${item.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${item._id}`).then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <Box className="max-w-[1050px]">
      <TableContainer component={Paper}>
        <TableContainer sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product, index) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="items-center"
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">
                  <Image
                    src={product.img}
                    height={70}
                    width={70}
                    alt="addtocartimg"
                  ></Image>
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>$ {product.price}</TableCell>
                <Button
                  className="w-10 h-10 mt-6"
                  onClick={() => handleDeleteItems(product)}
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </TableContainer>
      <Box className="flex items-center justify-between max-w-full ">
        <Typography className="inline-block">Total Amount</Typography>
        <TableCell>$ {total}</TableCell>
        <Link href="/dashboard/payment">
          <Button>Pay Now</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default BasicTable;