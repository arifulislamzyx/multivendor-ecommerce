import React, { ReactNode } from "react";
import CentralNav from "@/Components/HomeComponants/Navbar/CentralNav";

interface HomeLayout {
  children: ReactNode;
}

const layout: React.FC<HomeLayout> = ({ children }) => {
  return (
    <div>
      <CentralNav />
      {children}
    </div>
  );
};

export default layout;
