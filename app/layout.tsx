"use client";
import "./globals.css";
import localFont from "next/font/local";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { AuthProvider } from "@/Providers/AuthProviders";
import Footer from "../src/Components/layouts/Footer";
import Navbar from "../src/Components/layouts/Navbar/Navbar";
import { ReactNode } from "react";

const sf_pro = localFont({ src: "./sf-pro.woff2" });

const metadata = {
  title: "Mitnog- Largest Online Shopping Mall",
  description: "A Multi-Vendor e-Commerce Platform ",
};

interface Layoutprops {
  children: ReactNode;
}

const RootLayout: React.FC<Layoutprops> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${sf_pro.className} antialiased`}>
        <ReactQueryProvider>
          <AuthProvider>
            {/* <Navbar /> */}
            <div className="container mx-auto">{children}</div>
            <Footer />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};
export default RootLayout;
