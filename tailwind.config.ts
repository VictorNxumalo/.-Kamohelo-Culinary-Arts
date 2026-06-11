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
      boxShadow: {
        gold: "0 0 40px rgba(198, 162, 101, 0.22)",
        "gold-sm": "0 0 20px rgba(198, 162, 101, 0.15)",
        "card-lift": "0 24px 48px rgba(0, 0, 0, 0.35)",
        "card-lift-light": "0 20px 40px rgba(26, 26, 26, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.9s ease forwards",
        "fade-in-slow": "fadeIn 1.2s ease forwards",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "scroll-cue": "scrollCue 2s ease-in-out infinite",
        "rule-expand": "ruleExpand 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.05)" },
        },
        scrollCue: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        ruleExpand: {
          "0%": { width: "0", opacity: "0.4" },
          "100%": { width: "4rem", opacity: "1" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
