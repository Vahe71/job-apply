import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translate(100%, 100%)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
