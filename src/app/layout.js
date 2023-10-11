import { AuthProvider } from "@/Providers/AuthProviders";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mitnog- Largest Online Shopping Mall",
  description: "A Multi-Vendor e-Commerce Platform ",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ReactQueryProvider>
    </AuthProvider>
  );
}
