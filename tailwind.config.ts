import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FDFAF5",
          100: "#FDFAF5",
          200: "#F5EDE0",
        },
        beige: {
          DEFAULT: "#EDE8DF",
          100: "#EDE8DF",
          200: "#E2DDD4",
          300: "#D4CEC4",
        },
        champagne: {
          DEFAULT: "#F0E6D6",
          100: "#F7F0E6",
          200: "#F0E6D6",
          300: "#E0CDB6",
        },
        nude: {
          DEFAULT: "#E8D8C4",
          100: "#F2EAE0",
          200: "#E8D8C4",
        },
        gold: {
          DEFAULT: "#B8956A",
          light: "#D4B896",
          lighter: "#E8D8C4",
          dark: "#9A7A52",
          deeper: "#7A5E3A",
        },
        sage: {
          DEFAULT: "#7A9E8A",
          light: "#A4C0B0",
          lighter: "#C8DDD4",
          dark: "#5A7E6A",
        },
        warm: {
          DEFAULT: "#4A6B5A",
          light: "#6A8B7A",
          dark: "#2E5040",
          deeper: "#1C3428",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.4em",
      },
      animation: {
        "fade-up": "fadeUp 1s ease forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "scale-in": "scaleIn 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ivory":
          "linear-gradient(135deg, #F8FAF7 0%, #E4EDE6 50%, #D8E6EC 100%)",
        "gradient-warm":
          "linear-gradient(135deg, #E4EDE6 0%, #C8DDD0 50%, #8AAEBE 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #1C3428 0%, #2E5040 50%, #4A6B5A 100%)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
