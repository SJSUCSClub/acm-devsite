import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#F3C954",
        "primary-highight": "#FDD976",
        "secondary": "#196096",
        "secondary-highlight": "#318BCF",
        "accent": "#FDD976",
        "background": "#FFFFFF",
        "text": "#161616",
        "neutral": "#A4A4A4",
        "border": "#E5E5E5",
        "border-hovered": "#FFFFFF",
      },
    },
  },

  
  plugins: [],
};
export default config;
