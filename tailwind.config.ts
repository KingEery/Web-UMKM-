import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sunshine: {
          orange: "#FF914D",
          cream: "#FFF3E8",
          dark: "#0F0F0F",
          ash: "#AFAFAF"
        }
      },
      boxShadow: {
        glow: "0 0 42px rgba(255, 145, 77, 0.28)",
        card: "0 18px 60px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "sun-gradient":
          "linear-gradient(135deg, rgba(255,145,77,0.95), rgba(255,184,108,0.86))"
      }
    }
  },
  plugins: []
};

export default config;
