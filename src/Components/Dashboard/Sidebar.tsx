import Link from "next/link";
import React from "react";

const DashboardSidebar:React.FC = () => {
  const sidebarOptions = [
    { id: 1, title: "Home", link: "/dashboard" },
    { id: 2, title: "Add To Cart", link: "/dashboard/addtocart" },
    { id: 3, title: "Add Product", link: "/dashboard/addProduct" },
    { id: 4, title: "Messages", link: "/dashboard/messages" },
    { id: 5, title: "Payment", link: "/dashboard/payment" },
    { id: 6, title: "Settings", link: "/dashboard/settings" },
  ];

  return (
    <div className="bg-slate-200 text-black h-full py-6 px-4">
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
    </div>
  );
};

export default DashboardSidebar;
