"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import mitnog from "../../../../public/mitnog.png";
import Link from "next/link";
import { AuthContext } from "@/Providers/AuthProviders";
import UseCart from "@/Hooks/useCart";
import { useRouter } from "next/navigation";
import { Avatar } from "@mui/material";
import { NotificationAddOutlined } from "@mui/icons-material";
import { deleteCookie } from "cookies-next";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CiSearch } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { AiTwotoneShopping } from "react-icons/ai";
import ecommerceCategories from "@/data/categoryList";
import { CiShoppingCart } from "react-icons/ci";

const Navbar: React.FC = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart, refetch } = UseCart();
  const navigate = useRouter();
  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        deleteCookie("token");
        navigate.push("/");
      })
      .catch((error) => console.log("here is an error=>", error));
  };

  const handleMenue = () => {
    setShowSettings(!showSettings);
  };

  return (
    <nav className="bg-white">
      {user ? (
        <>
          <div>
            <div className="flex items-center justify-between px-4 ">
              <Link href="/">
                <Image
                  src={mitnog}
                  width="100"
                  height="7"
                  alt="profile"
                ></Image>
              </Link>
              <div className=" bg-white rounded-lg hidden md:flex items-center focus:border-blue-500 border-2 ">
                <input
                  className=" min-w-[400px] p-2 rounded-xl text-black border border-white focus:outline-none "
                  type="search"
                  name="search"
                  id=""
                  placeholder="Search Items"
                />
                <div>
                  <button className="flex items-center p-1 border-x-blue">
                    <select>
                      <option>
                        All Categories <IoIosArrowDown></IoIosArrowDown>
                      </option>
                      <option>Fashion</option>
                      <option>Gadgets</option>
                    </select>
                  </button>
                </div>
                <button className="mr-4 text-xl">
                  <CiSearch></CiSearch>
                </button>
              </div>
              <div className="relative flex items-center">
                <FavoriteBorderIcon className=" mr-4 w-10 text-white"></FavoriteBorderIcon>
                <Link href="/dashboard/addtocart">
                  <AddShoppingCartIcon className=" mr-4 w-10 text-black  "></AddShoppingCartIcon>
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
                    className="cursor-pointer"
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
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex  justify-between items-center">
              <Link href="/">
                <Image
                  src={mitnog}
                  width="105"
                  height="14"
                  alt="profile"
                ></Image>
              </Link>
              <div className=" bg-white rounded-lg hidden md:flex items-center focus:border-blue-500 border-2 ">
                <input
                  className=" min-w-[400px] p-2 rounded-xl text-black border border-white focus:outline-none "
                  type="search"
                  name="search"
                  id=""
                  placeholder="Search Items"
                />
                <div>
                  <button className="flex items-center p-1 border-x-blue">
                    <select>
                      <option>
                        All Categories <IoIosArrowDown></IoIosArrowDown>
                      </option>
                      {ecommerceCategories.map((category) => (
                        <option key={category.id}> {category.category}</option>
                      ))}
                    </select>
                  </button>
                </div>
                <button className="mr-4 ml-3 text-xl ">
                  <CiSearch></CiSearch>
                </button>
              </div>

              <div className="flex gap-1 font-bold items-center h-10">
                <div className="text-black text-3xl">
                  <IoPersonAddOutline></IoPersonAddOutline>
                </div>
                <div>
                  <h3 className="font-medium">Welcome</h3>
                  <div className="flex gap-2">
                    <Link href="/login">Login</Link>/
                    <Link href="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-4xl">
                  <AiTwotoneShopping></AiTwotoneShopping>
                </div>
                <div>
                  <p>Shopping Cart</p>
                  <h4 className="text-blue-700 font-extrabold">$0.00</h4>
                </div>
                {/* here is set to shopping cart hover menu  */}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
