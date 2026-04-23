/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        primary: "#00ADB5",
        background: "#0f172a"
      },
      animation: {
        "blob": "blob 7s infinite",
        "fade-in-out": "fadeInOut 1s ease-in-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
      textShadow: {
        glow: "0 0 10px rgba(6, 182, 212, 0.7), 0 0 20px rgba(6, 182, 212, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-glow": {
          textShadow: "0 0 10px rgba(6, 182, 212, 0.7), 0 0 20px rgba(6, 182, 212, 0.5)",
        },
        ".glass-panel": {
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        },
        ".neon-border": {
          boxShadow: "0 0 5px theme('colors.cyan.400'), inset 0 0 5px theme('colors.cyan.400')",
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
