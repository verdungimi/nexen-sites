import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f5fd",
          100: "#cceafb",
          200: "#99d5f7",
          300: "#66c0f3",
          400: "#33abef",
          500: "#50AEDF",
          600: "#4098cc",
          700: "#308299",
          800: "#206c66",
          900: "#105633",
        },
        accent: {
          50: "#fce7f3",
          100: "#f9cfe7",
          200: "#f39fcf",
          300: "#ed6fb7",
          400: "#e73f9f",
          500: "#ED5096",
          600: "#be4078",
          700: "#8f305a",
          800: "#60203c",
          900: "#31101e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #7C5CFF 0%, #50AEDF 100%)",
        "gradient-primary-vertical": "linear-gradient(180deg, #7C5CFF 0%, #50AEDF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
