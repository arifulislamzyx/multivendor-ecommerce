import React from "react";
import { Container, Grid, Link, TableFooter, Typography } from "@mui/material";
import Image from "next/image";
import mitnog from "../../public/mitnog.png" 

const Footer = () => {
  return (
    <Container className=" bg-slate-300 p-5 rounded-xl sm:text-center">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Image className="items-center" src={mitnog} width={90} height={8} alt="footerProfile"></Image>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5">Mitnog</Typography>
          <Typography variant="body2">About Mitnog</Typography>
          <Typography variant="body2">Digital Payment</Typography>
          <Typography variant="body2">Mitnog Blogs</Typography>
          <Typography variant="body2">Mitnog Careers</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5">Customer Care</Typography>
          <Typography variant="body2">Help Center</Typography>
          <Typography variant="body2">Contact US</Typography>
          <Typography variant="body2">How to Buy</Typography>
          <Typography variant="body2">Return and Refund</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5">Earn with Mitnog</Typography>
          <Typography variant="body2">Mitnog University</Typography>
          <Typography variant="body2">Sell on Mitnog</Typography>
          <Typography variant="body2">Join Mitnog Affiliate</Typography>
          <Typography variant="body2">Why Business with US</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
