import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { FaCartArrowDown } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa6";
import { TbMessages } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

const DashboardSidebar: React.FC = () => {
  const sidebarOptions = [
    { id: 1, Icon: <GoHome />, link: "/dashboard" },
    {
      id: 2,
      Icon: <FaCartArrowDown></FaCartArrowDown>,
      link: "/dashboard/addtocart",
    },
    {
      id: 3,
      Icon: <FaFolderPlus></FaFolderPlus>,
      link: "/dashboard/addProduct",
    },
    { id: 4, Icon: <TbMessages></TbMessages>, link: "/dashboard/messages" },
    {
      id: 5,
      Icon: <RiSecurePaymentLine></RiSecurePaymentLine>,
      link: "/dashboard/payment",
    },
    { id: 6, Icon: <CiSettings></CiSettings>, link: "/dashboard/settings" },
  ];

  return (
    <div className="bg-slate-200 text-black h-full py-6 px-4">
      {/* <h2 className="text-2xl font-bold mb-4">Dashboard</h2> */}
      <ul>
        {sidebarOptions.map((option) => (
          <li key={option.id} className="mb-2">
            <Link
              href={option.link}
              className="block px-2 py-3 text-2xl font-bold rounded-md hover:bg-orange-600"
            >
              {option.Icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
