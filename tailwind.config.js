/** @type {import('tailwindcss').Config} */
import { defaultTheme } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "./app/utils/flat.js";
// import {  } from "./app/utils/flat.js";




// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      dropShadow: {
        'lg': '0 15px 35px #88fc03',
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px , #f5f5f5 5px,#f5f5f5 100px);"
      },
      screens: {
        "2xl": { max: "1535px" }, // @media (max-width: 1535px)
        "xl": { max: "1279px" },  // @media (max-width: 1279px)
        "lg": { max: "1023px" },  // @media (max-width: 1023px)
        "md": { max: "767px" },   // @media (max-width: 767px)
        "sm": { max: "639px" },   // @media (max-width: 639px)
        "xs": { max: "479px" },   // @media (max-width: 479px)
      },
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
};


 
