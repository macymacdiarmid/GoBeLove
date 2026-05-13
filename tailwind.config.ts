import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        clay:   "#C4622D",
        forest: "#2D5E3F",
        cream:  "#F5EDD8",
        ink:    "#232220",
        amber:  "#D4963A",
        coral:  "#E8836A",
        mid:    "#D9CEB5",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
