/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "off-black": "#0F0F0F",
      white: "#FDFDFD",
      lightgrey: "#F7F7F7",
      green: "#BAFB9A",
      "green-hover": "#DBFFC8",
      "green-click": "#97CB7D",
      purple: "#DDC5FB",
      "purple-hover": "#F0E4FF",
      "purple-click": "#B376FF",
      "grey-dot1": "#949494",
      "grey-dot2": "#D8D8D8",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      height: {
        136: "34rem", // Hero image height
      }
    },
  },
  plugins: [],
};
