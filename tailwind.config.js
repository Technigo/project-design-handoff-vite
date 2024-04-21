/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#F6E53C",
      pink: "#DE20F9",
      purple: "#4B189E",
      darkPurple: "#F6E53C",
      white: "#FFFFFF",
      black: "#08031D",
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
}
