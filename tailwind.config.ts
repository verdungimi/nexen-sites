import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#1E40AF",
          600: "#1e3a8a",
          700: "#1e3a8a",
          800: "#1e40af",
          900: "#1e3a8a",
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
        zoldhaz: {
          dark: "#435936",
          light: "#86FD22",
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
