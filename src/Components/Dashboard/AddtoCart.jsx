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

export default function BasicTable() {
  const [cart, refetch] = UseCart();
  const [axiosSecure] = UserAxiosSecure();
  console.log(cart);

  const total = cart.reduce((accumulator, item) => item.price + accumulator, 0);

  const handleDeleteItems = (item) => {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((product, index) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">
                <Image
                  src={product?.Image}
                  height={50}
                  width={50}
                  alt="addtocartimg"
                ></Image>
              </TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">$ {product.price}</TableCell>
              <Button onClick={() => handleDeleteItems(product)}>
                <DeleteIcon></DeleteIcon>
              </Button>
            </TableRow>
          ))}
          <Box className="flex items-center ml-96">
            <Typography>Total Amount</Typography>
            <TableCell className="ml-50">$ {total}</TableCell>
            <Button>Pay Now</Button>
          </Box>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
