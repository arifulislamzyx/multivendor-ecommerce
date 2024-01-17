import Sidebar from "@/Components/Dashboard/Sidebar";
import { ReactNode } from "react";

interface layoutProps{
  children: ReactNode
}
const Layout:React.FC<layoutProps>=({ children }) =>{
  return (
    <div>
      <h3>Here Will Show Dashboard Navbar </h3>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <Sidebar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 w-full h-auto mt-5 mb-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout
