import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";

export const metadata = {
  title: "Unhired Coder - Home",
  description: "Unhired coder portfolio", 
  icons: {
    icon: '/UCLOGOB.png'
  }
};

const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="#fff"/>
      </head>
      <body className={`${mont.className} font-mont}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
