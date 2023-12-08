import React from "react";
import { Container, Grid, Link, TableFooter, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Container className="mt-20 bg-slate-300 padding-20 pb-8 rounder-xl ">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          {/* Your logo or image component */}
          {/* <img src="your-logo.png" alt="Company Logo" /> */}
          <h2>Mitnog Logo</h2>
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
