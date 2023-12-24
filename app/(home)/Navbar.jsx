"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import mitnog from "../../public/mitnog.png";
import Link from "next/link";
import { AuthContext } from "@/Providers/AuthProviders";
import UseCart from "@/Hooks/useCart";
import { useRouter } from "next/navigation";
import { Avatar } from "@mui/material";
import { Dashboard, NotificationAddOutlined } from "@mui/icons-material";
import { deleteCookie } from "cookies-next";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CiSearch } from "react-icons/ci";

const NavbarMaked = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart, refetch] = UseCart();
  const navigate = useRouter();
  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        deleteCookie("token");
        navigate.push("/");
      })
      .error((error) => console.log(error));
  };

  const handleMenue = () => {
    setShowSettings(!showSettings);
  };

  return (
    <nav className="bg-orange-500">
      {user ? (
        <>
          <div className="flex items-center justify-between px-4 ">
            <Link href="/">
              <Image src={mitnog} width="100" height="7" alt="profile"></Image>
            </Link>
            <div className="hidden md:flex items-center">
              <input
                className="min-w-[700px] p-2 rounded-xl text-black border border-gray-300 focus:outline-none focus:border-blue-500 sm:w-60"
                type="search"
                name="search"
                id=""
                placeholder="Search Items"
              />
            </div>
            <div className="relative flex items-center">
              <FavoriteBorderIcon className=" mr-4 w-10 text-white"></FavoriteBorderIcon>
              <Link href="/dashboard/addtocart">
                <AddShoppingCartIcon className=" mr-4 w-10 text-white  "></AddShoppingCartIcon>
              </Link>
              <div className="absolute badge badge-secondary text-black left-20 top-1">
                +{cart?.length || 0}
              </div>

              <NotificationAddOutlined className="mr-7 w-10 text-white"></NotificationAddOutlined>

              <div>
                <Avatar
                  onClick={handleMenue}
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
                {showSettings && (
                  <div className="bg-white p-2 rounded-lg absolute grid top-16 right-0 ml-2 sm:z-10">
                    <Link href="/dashboard/profile">Profile</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/deshboard/settings">Settings</Link>
                    <Link href="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="flex items-center justify-between px-4 max-w-[1200px] ">
            <Link href="/">
              <Image src={mitnog} width="90" height="7" alt="profile"></Image>
            </Link>
            <div className="relative hidden md:flex items-center ">
              <input
                className=" min-w-[700px] p-2 rounded-xl text-black border border-gray-300 focus:outline-none focus:border-blue-500"
                type="search"
                name="search"
                id=""
                placeholder="Search Items"
              />
            </div>
            <div className="absolute right-[355px] font-bold ">
              <CiSearch></CiSearch>
            </div>
            <div className="flex gap-3">
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavbarMaked;
