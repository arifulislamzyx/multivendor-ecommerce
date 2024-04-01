"use client";
import Image from "next/image";
import React, { useState } from "react";
import mitnog from "../../../../public/mitnog.png";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav: React.FC = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);

  const menuStatus = () => {
    setMobileMenu(!openMobileMenu);
  };
  return (
    <div className="md:hidden lg:hidden ">
      <div className="flex justify-between items-center px-6">
        <Image src={mitnog} width="100" height="7" alt="profile"></Image>
        <button onClick={menuStatus}>
          {openMobileMenu ? (
            <RxCross1 className="text-xl"></RxCross1>
          ) : (
            <GiHamburgerMenu className="text-xl"></GiHamburgerMenu>
          )}
        </button>
      </div>
      {openMobileMenu && (
        <div className="grid ">
          <Link
            href="/login"
            className="p-2 font-bold text-lg hover:bg-slate-100 hover:rounded-xl justify-self-center"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="p-2 font-bold text-lg hover:bg-slate-100 hover:rounded-xl justify-self-center"
          >
            SignUp
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
