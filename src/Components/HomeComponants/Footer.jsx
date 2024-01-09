import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mitnog from "../../../public/mitnog.png";
import Link from "next/link";

const Footer = () => {
  return (
    <Box className="bg-orange-400 p-5 text-center">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          className="flex justify-center items-center"
        >
          <Image
            src={mitnog}
            width={150}
            height={8}
            alt="footerProfile"
          ></Image>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          className="grid grid-cols-1 gap-1 mb-4"
        >
          <Typography variant="h5" fontSize={30}>
            Mitnog
          </Typography>
          <Typography variant="inherit">
            <Link href={"/about"}>About Mitnog</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/blog/digial-Payment"}>Digital Payment</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/blog"}>Mitnog Blogs</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/blog/career"}>Mitnog Careers</Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          className="grid grid-cols-1 gap-1 mb-4"
        >
          <Typography variant="h5">
            <Link href={"/customer-care"}>Customer Care</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/help-center"}>Help Center</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/contact"}>Contact US</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/hoe-to-buy"}>How to Buy</Link>
          </Typography>
          <Typography variant="bodinherity2">
            <Link href={"/refund-policy"}>Return and Refund</Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          className="grid grid-cols-1 gap-1 mb-4"
        >
          <Typography variant="h5">
            <Link href={"/earn-from-mitnog"}>Earn with Mitnog</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/mitnog-university"}>Mitnog University</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/sell-mitnog"}>Sell on Mitnog</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/join-affiliate"}>Join Mitnog Affiliate</Link>
          </Typography>
          <Typography variant="inherit">
            <Link href={"/business-with-us"}>Why Business with US</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
