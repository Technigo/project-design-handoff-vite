/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'custom': '30px', 
      },
      width: {
        'custom-width': '114px',
      },
      height: {
        'custom-height': '109px', 
      },
      colors: {
        blue: "#0F3057",
        aqua: "#008891",
        cream: "#e7e7de",
      },
      fontSize: {
        20: "20px",
        32: "32px",
        42: "42px",
        60: "60px",
      },
      spacing: {
        10: "10",
        25: "25px",
        21: "21px",
        28: "28px",
        62: "62px",
        28: "28px",
        18: "18px",
        69: "69px",
      },
      boxShadow: {
        "custom-btn-p": "0 2px 0px 0px rgb(0 0 0)",
      },
    },

    fontFamily: {
      "rock-salt": ['"Rock Salt"', "cursive"],
      "roboto-mono": ["Roboto Mono", "monospace"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
