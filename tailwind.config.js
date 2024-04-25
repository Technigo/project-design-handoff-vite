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
      80: "80px",
    },
    screens: {
      sm: "430px",
      md: "834px",
      lg: "1440px",
    },
    fontSize: {
      "h1-desktop": "36px",
      "h2-desktop": "25px",
      "h3-desktop": "20px",
      "pl-desktop": "18px",
      "ps-desktop": "16px",
      "h1-tab-mob": "30px",
      "h2-tab-mob": "21px",
      "h3-tab-mob": "18px",
      "pl-tab-mob": "16px",
      "ps-tab-mob": "14px",
      "join-btn-desktop": "18px",
      "join-btn-tablet": "16px",
      "learn-btn-desktop": "18px",
      "value-props-btn-mob": "14px",
      "value-props-btn": "18px",
      "nav-desktop": "25px",
      "nav-tab-mob": "21px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      maxWidth: {
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
