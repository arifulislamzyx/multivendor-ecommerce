import "./globals.css";
import localFont from "next/font/local";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { AuthProvider } from "@/Providers/AuthProviders";
import Footer from "../src/Components/HomeComponants/Footer";
import Navbar from "../src/Components/HomeComponants/Navbar/Navbar";

const sf_pro = localFont({ src: "./sf-pro.woff2" });

export const metadata = {
  title: "Mitnog- Largest Online Shopping Mall",
  description: "A Multi-Vendor e-Commerce Platform ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sf_pro.className} antialiased`}>
        <ReactQueryProvider>
          <AuthProvider>
            {/* <Navbar /> */}
            {children}
            <Footer />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
