/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0F3057",
        aqua: "#008891",
      },
      fontSize: {
        "42": "42px",
      }
    },

    fontFamily: {
      "rock-salt": ['"Rock Salt"', "cursive"],
      "roboto-mono": ["Roboto Mono", "monospace"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};