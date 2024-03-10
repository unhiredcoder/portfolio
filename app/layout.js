// 'use client'
import { Montserrat } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Head from "next/head";
// import Transition from "./components/Transition";
// import { AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import PreLoader from "./components/PreLoader";
import Provider from "./components/Provider";




export const metadata = {
  title: "Unhired Coder",
  description: "Unhired coder portfolio",
  icons: {
    icon: '/UCLOGOB.png'
  }
};
const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${mont.className} font-mont}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
