import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold:   "#F07820",
        coral:  "#E83568",
        teal:   "#1ABFCC",
        deep:   "#0A1A2E",
        cream:  "#FFF5EC",
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
