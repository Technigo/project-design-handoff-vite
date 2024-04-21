/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "744px",
      lg: "1024px",
    },
    colors: {
      yellow: "#F6E53C",
      pink: "#DE20F9",
      purple: "#4B189E",
      "dark-purple": "#F6E53C",
      white: "#FFFFFF",
      black: "#08031D",
    },
    spacing: {
      1: "16px",
      2: "32px",
      3: "40px",
      4: "44px",
      5: "48px",
      6: "80px",
      7: "144px",
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
}
