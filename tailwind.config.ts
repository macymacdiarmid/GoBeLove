import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold:   "#EF7B45",
        coral:  "#D84727",
        teal:   "#5EB1BF",
        deep:   "#042A2B",
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
