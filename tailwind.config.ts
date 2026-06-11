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
        brand: {
          bg: "#121212",
          gold: "#c6a265",
          "gold-hover": "#d4b47a",
          "gold-highlight": "#e2c285",
          cream: "#f5f5f5",
          "cream-muted": "#e6e0d7",
          surface: "#1a1a1a",
          light: "#fafaf8",
          text: "#f5f5f5",
          "text-muted": "#a8a29e",
          "text-dark": "#1a1a1a",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-cinzel)", "serif"],
      },
      letterSpacing: {
        brand: "0.2em",
        label: "0.3em",
        wide: "0.15em",
      },
      backgroundImage: {
        "brand-grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.9s ease forwards",
        "fade-in-slow": "fadeIn 1.2s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
