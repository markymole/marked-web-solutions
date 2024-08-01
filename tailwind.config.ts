import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./molecules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // main comfortaa
        comfortaa: ["var(--font-comfortaa)"],
        oswald: ["var(--font-oswald)"],
        karla: ["var(--font-karla)"],
        outfit: ["var(--font-outfit)"],
        montserrat: ["var(--font-montserrat)"],
      },
      maxWidth: {
        "8xl": "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
