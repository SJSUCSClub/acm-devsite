import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbars from "./components/Navbar";
import FAQ from "./components/FAQ";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACM@SJSU",
  description: "MacQuarrie Hall 227. Empowering SJSU'S Computer Science community. By students, for students",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbars/>
       {children}
       
          <div className="">
            <FAQ/>
          </div>
          <Footer />
        
        </body>
    </html>
  );
}
