/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      current: "currentColor",
      white: "#fff",
      black: "#000",
      "crimson-light": "#EC6342",
      "royal-purple": "#762aa7",
      "plum-light": "#9e3e82",
      "deep-violet": "#542A8B",
      terracotta: "#C5515F",
      grey: "lightgrey",
    },
    padding: {
      10: "10px",
      15: "15px",
      20: "20px",
      40: "40px",
      66: "66px",
    },
    screens: {
      sm: "430px",
      md: "834px",
      lg: "1440px",
    },
    fontSize: {
      "h1-desktop": "36px",
      "h2-desktop": "25px",
      "pl-desktop": "18px",
      "ps-desktop": "16px",
      "join-btn-desktop": "18px",
      "join-btn-tablet": "16px",
      "learn-btn-desktop": "18px",
    },
    extend: {
      maxWidth: {
        1440: "1440px",
      },
    },
    // extend: {
    //   button: {
    //     base: {
    //       fontFamily: ["Bebas Neue", "Roboto"],
    //       fontSize: "14px",
    //       cursor: "pointer",
    //       textTransform: "uppercase",
    //       borderRadius: "50px",
    //       fontWeight: "700",
    //     },
    //   },
    // },
  },
  plugins: [],
};
