import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";
import AnimatedCursor from "react-animated-cursor"


export const metadata = {
  title: "Unhired Coder | Home",
  title: "Unhired Coder | Portfolio",
  description: "Explore the Unhired Coder's portfolio, showcasing modern web development projects including e-commerce platforms, social media apps, and collaborative coding tools. Built using cutting-edge technologies like React, Next.js, and Prisma.",
  keywords: "Unhired Coder, Web Development, Portfolio, React, Next.js, Tailwind CSS, Prisma, Full-Stack Development, JavaScript, Projects, MERN Stack",
  icons: {
    icon: '/UCLOGOB.png',
  },
  openGraph: {
    title: "Unhired Coder | Portfolio",
    description: "Showcasing full-stack development projects including e-commerce platforms, social media applications, and coding collaboration tools. Built with React, Next.js, and Prisma.",
    url: "https://unhiredcoder.vercel.app",
    images: [
      {
        url: '/UCLOGOB.png',
        width: 800,
        height: 600,
        alt: "Unhired Coder Logo",
      },
    ],
  },
};

const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1b1b1b" />
      </head>
      <body className={`${mont.className} font-mont}`}>
        <span className="sm:hidden">
          <AnimatedCursor
             innerSize={5}
             trailingSpeed={10}
             outerSize={45}
             innerScale={0}
             outerScale={0}
             outerAlpha={0}
             hasBlendMode={true}
             innerStyle={{
               backgroundColor: 'gray',
             }}
             outerStyle={{
               border: '1px solid gray'
             }}
          />

        </span>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
