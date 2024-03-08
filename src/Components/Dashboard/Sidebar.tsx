import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/varient";

const DashboardSidebar: React.FC = () => {
  const sidebarOptions = [
    { id: 1, title: "Home", link: "/dashboard" },
    { id: 2, title: "Add To Cart", link: "/dashboard/addtocart" },
    { id: 3, title: "Add Product", link: "/dashboard/addProduct" },
    { id: 4, title: "Messages", link: "/dashboard/messages" },
    { id: 5, title: "Payment", link: "/dashboard/payment" },
    { id: 6, title: "Settings", link: "/dashboard/settings" },
  ];

  return (
    <motion.div
      className="bg-slate-200 text-black h-full py-6 px-4"
      variants={fadeIn("left", 0.3)}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        {sidebarOptions.map((option) => (
          <li key={option.id} className="mb-2">
            <Link
              href={option.link}
              className="block px-2 py-1 rounded-md hover:bg-orange-600"
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default DashboardSidebar;
