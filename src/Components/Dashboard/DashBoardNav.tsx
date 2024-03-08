"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import mitnog from "../../../public/mitnog.png";
import { AuthContext } from "@/Providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";

const DashBoardNav: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [dashBoardProfile, setDashboardProfile] = useState(false);

  const handleDashboardProfile = () => {
    setDashboardProfile(true);
  };
  return (
    <div className="flex items-center justify-evenly">
      <Link href="/">
        <Image src={mitnog} width="70" height="4" alt="profile"></Image>
      </Link>
      <div
        onClick={handleDashboardProfile}
        className="cursor-pointer text-3xl relative"
      >
        <FaUserCircle></FaUserCircle>
      </div>
      {dashBoardProfile && (
        <div className="absolute top-16 right-5">
          <p>Profile</p>
          <p>Setting</p>
          <p>Logout</p>
        </div>
      )}
    </div>
  );
};

export default DashBoardNav;
