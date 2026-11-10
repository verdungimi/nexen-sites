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
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        // Legacy (admin, Zöldház Energy)
        archivo: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      colors: {
        // Nexen Sites palette: dark blue, light blue, white. Values are fixed hex on purpose (no theming).
        navy: {
          DEFAULT: "#0B1E3F", // text, dark sections, footer
          raised: "#132B55", // cards and frames on dark blue
          line: "#2C4A80", // 1px lines on dark blue
        },
        sky: {
          DEFAULT: "#5EC2FF", // accent, primary buttons (always with navy text)
          hover: "#8AD3FF",
        },
        mid: "#1B4C8C", // links and small accents on white
        mist: "#EEF6FD", // pale blue section background
        line: {
          DEFAULT: "#D5E3F2", // 1px lines on white
          strong: "#C4D9EE", // input and card borders
        },
        muted: "#5A6F8F", // secondary text on white (5.2:1)
        cloud: "#C7D8EE", // secondary text on dark blue
        danger: "#B3261E",
        success: "#17694B",

        // Legacy tokens, still used by the admin panel's shared UI components (app/(legacy))
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
        zoldhaz: {
          dark: "#435936",
          light: "#86FD22",
        },
      },
      maxWidth: {
        site: "77.5rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
