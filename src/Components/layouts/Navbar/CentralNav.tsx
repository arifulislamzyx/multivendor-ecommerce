"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import NavHelmet from "./NavHelmet";
import MobileNav from "./MobileNav";

const CentralNav: React.FC = () => {
  return (
    <div>
      <div className="hidden md:block lg:block">
        <NavHelmet></NavHelmet>
        <Navbar></Navbar>
        <SubNavbar></SubNavbar>
      </div>
      <MobileNav></MobileNav>
    </div>
  );
};

export default CentralNav;
