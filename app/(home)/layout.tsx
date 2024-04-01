import React, { ReactNode } from "react";
import CentralNav from "@/Components/layouts/Navbar/CentralNav";

const metadata = {
  title: "Mitnog- Largest Online Shopping Mall",
  description: "A Multi-Vendor e-Commerce Platform ",
};

interface HomeLayout {
  children: ReactNode;
}

const layout: React.FC<HomeLayout> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <CentralNav />
      {children}
    </div>
  );
};

export default layout;
