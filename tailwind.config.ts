import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        "text-primary": "hsl(var(--text-primary))",
        muted: "hsl(var(--text-muted))",
        accent: "hsl(var(--accent))",
      },
    },
  },
  plugins: [],
} satisfies Config;
