import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B14",
        midnight: "#0E1424",
        neon: "#7E5BFF",
        cyan: "#00D4FF",
        rose: "#FF4D8D",
        text: "#E6E8EF"
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(126,91,255,0.2), transparent 48%), radial-gradient(circle at bottom right, rgba(0,212,255,0.12), transparent 42%)"
      },
      boxShadow: {
        soft: "0 8px 35px rgba(0, 0, 0, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
