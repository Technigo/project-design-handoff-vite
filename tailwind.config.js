/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      current: "currentColor",
      white: "#fff",
      black: "000",
      "crimson-light": "#ec3642",
      "royal-purple": "#762aa7",
      "plum-light": "#9e3e82",
      "deep-violet": "#542A8B",
      terracotta: "#C5515F",
    },
    padding: {
      66: "66px",
    },
    screens: {
      sm: "430px",
      md: "834px",
      lg: "1440px",
    },
  },
  plugins: [],
};
