/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowLight: "#FAF3DA",
        yellowMedium: "#E9CD69",
        yellow: "#E4C144",
        blueLight: "#F3F6F7",
        blue: "#083D56",
        blueDeep: "#063145",
        navbar: "#083D57",
      },
    },
    fontFamily: {
      heading: ["Fira Sans", "sans-serif"],
      normal: ["Montserrat", "sans-serif"],
    },
    backgroundImage: {
      "header-image": "url('/header_image.svg')",
    },
  },
  plugins: [],
};
