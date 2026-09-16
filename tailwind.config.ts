import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      // Nexen Sites design tokens ("Grafit & sárgaréz"); values live in app/(site)/site.css
      colors: {
        graphite: {
          DEFAULT: "rgb(var(--graphite) / <alpha-value>)",
          raised: "rgb(var(--graphite-raised) / <alpha-value>)",
          strong: "rgb(var(--graphite-strong) / <alpha-value>)",
        },
        rule: "rgb(var(--rule) / <alpha-value>)",
        bone: "rgb(var(--bone) / <alpha-value>)",
        fog: "rgb(var(--fog) / <alpha-value>)",
        brass: {
          DEFAULT: "rgb(var(--brass) / <alpha-value>)",
          hover: "rgb(var(--brass-hover) / <alpha-value>)",
        },
        moss: "rgb(var(--moss) / <alpha-value>)",
        rust: "rgb(var(--rust) / <alpha-value>)",
        // Zöldház Energy client pages (app/(legacy))
        zoldhaz: {
          dark: "#435936",
          light: "#86FD22",
        },
      },
      maxWidth: {
        site: "75rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
