import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold:   "#F7C842",
        coral:  "#E84855",
        teal:   "#1A936F",
        deep:   "#0D2B1F",
        cream:  "#F5F0E4",
        black:  "#0A0A0A",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "Impact", "'Arial Narrow'", "sans-serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
} satisfies Config;
