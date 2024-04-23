/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hover-blue": "#2330c5",
        "main-blue": "#2735db",
        "background-lavender": "#bb9cf0",
        "light-lavender": "#f5f0fd",
        "background-neon-green": "#effc7f",
        "text-light": "#fff",
        "text-dark": "#000",
      },
      fontFamily: {
        orelega: ["Orelega One", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        base: ["16px", "22.4px"],
        sm: ["14px", "19.6px"],
        lg: ["18px", "25.2px"],
        xl: ["20px", "1.5"],
        "2xl": ["24px", "33.6px"],
        "4xl": ["40px", "48px"],
        "5xl": ["48px", "1"],
        "6xl": ["80px", "96px"],
      },
      height: {
        mhero: ["377px"]
      }
    },
  },
  plugins: [],
};
