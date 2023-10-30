/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        primary: "#F7F7F6",
        "moss-green": "#4F6F0E",
        "lime-green": "#D8F59D",
        "persian-blue": "#3232CD",
        "half-yellow": "#EBE7CD",
      },
    },
  },
  plugins: [],
};
