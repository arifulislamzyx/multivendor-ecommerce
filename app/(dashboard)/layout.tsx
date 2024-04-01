"use client";
import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import Sidebar from "@/Components/Dashboard/Sidebar";
import { ReactNode, useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";
import MinimizedSideBar from "@/Components/Dashboard/MinimizedSideBar";

interface layoutProps {
  children: ReactNode;
}
const Layout: React.FC<layoutProps> = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className="container mx-auto">
      <div className="flex ml-10">
        <button
          onClick={() => setOpenSideBar((openSideBar) => !openSideBar)}
          className="text-3xl"
        >
          {openSideBar ? (
            <RiMenuFoldLine></RiMenuFoldLine>
          ) : (
            <RiMenuUnfoldLine></RiMenuUnfoldLine>
          )}
        </button>
        <DashBoardNav></DashBoardNav>
      </div>

      <div className="flex h-screen flex-col md:flex-row  md:overflow-hidden">
        <div className={` flex-none md:${openSideBar ? "w-72" : "w-24"}`}>
          {openSideBar ? <Sidebar /> : <MinimizedSideBar></MinimizedSideBar>}
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 w-full h-auto mt-5 mb-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
