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
      borderRadius: {
        custom: "3.5rem",
        button: "1.7rem",
      },
      boxShadow: {
        darker: "inset 0 7px 5px -5px rgba(0, 0, 0, 0.3)",
      },
      height: {
        workCardSmall: "455px",
        workCardMed: "600px",
        workCardLarge: "350px",
      },
      fontSize: {
        largeNumber: "56px",
        font28: "28px",
        font26: "26px",
      },
      lineHeight: {
        lh48: "48px",
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
