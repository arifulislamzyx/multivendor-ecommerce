
import "./globals.css";
import { Inter } from "next/font/google";
import MyLayout from "@/layout";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { AuthProvider } from "@/Providers/AuthProviders";
// import Navbar from "./(home)/Navbar";
import Footer from "./../src/Components/HomeComponants/Footer";
import NavbarMaked from "../app/(home)/NavbarMaked"



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mitnog- Largest Online Shopping Mall",
  description: "A Multi-Vendor e-Commerce Platform ",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className} >
        {/* <MyLayout> */}
        <ReactQueryProvider>
       <AuthProvider>
          {/* <Navbar /> */}
          <NavbarMaked/>
          {children}
          <Footer />
      </AuthProvider>
      </ReactQueryProvider>
        {/* </MyLayout> */}
        </body>

    </html>
  );
}
