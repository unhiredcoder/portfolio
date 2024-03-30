import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";
import AnimatedCursor from "react-animated-cursor"


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
        <meta name="theme-color" content="#1b1b1b" />
      </head>
      <body className={`${mont.className} font-mont}`}>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'gray'
          }}
          outerStyle={{
            border: '3px solid gray'
          }}
        />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
