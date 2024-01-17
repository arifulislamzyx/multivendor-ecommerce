import React from "react";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import NavHelmet from "./NavHelmet";

const CentralNav:React.FC = () => {
  return (
    <div>
      <NavHelmet></NavHelmet>
      <Navbar></Navbar>
      <SubNavbar></SubNavbar>
    </div>
  );
};

export default CentralNav;
