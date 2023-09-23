import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary: "linear-gradient(to right, #FE34B9, #903AFF)",
        "primary-100": "linear-gradient(to right, #903AFF, #FE34B9)",
        "primary-200": "linear-gradient(to right, #FE34B9 1%, #903AFF)",
      },
      colors: {
        secondary: {
          DEFAULT: "#150E28",
          100: "#100B20",
        },
        tertiary: {
          50: "#903AFF",
          100: "#D434FE",
          200: "#FF26B9",
        },
        "white/3": "rgb(255 255 255 / 0.03)"
      },
      screens: {
        xss: "320px",
        xs: "425px",
        ...defaultTheme.screens,
        "4k": "2050px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
