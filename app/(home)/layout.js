import React from "react";
import CentralNav from "@/Components/HomeComponants/Navbar/CentralNav";

const layout = ({ children }) => {
  return (
    <div>
      <CentralNav />
      {children}
    </div>
  );
};

export default layout;
