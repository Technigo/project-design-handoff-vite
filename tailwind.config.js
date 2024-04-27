/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'custom': '30px', 
        "custom-two": "40px",
        "custom-three": "1000px",
      },
      width: {
        "custom-width": '92px',
        "width-two": "361px",
        "width-three": "620px",
        "width-four": "575px",
        "width-five": "1187px",
        "width-six": "1052px",


      },
      height: {
        "custom-height": '87px', 
        "height-two": "376px",
        "height-three": "315px",
        "height-four": "494px",
        "height-five": "165px",
        "height-six": "223px",
        "height-seven": "408px",
        "height-eight": "282px",

      },
      colors: {
        blue: "#0F3057",
        aqua: "#008891",
        cream: "#e7e7de",
        white: "#D9D9D9 "
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
        35: "35px",
        38: "38px",
        62: "62px",
        28: "28px",
        18: "18px",
        69: "69px",
        117: "117px"
      },
      boxShadow: {
        "custom-btn-p": "0 2px 0px 0px rgb(0 0 0)",
      },
      screens: {
        sm: '320px',
      },
    },
    fontFamily: {
      "rock-salt": ['"Rock Salt"', "cursive"],
      "roboto-mono": ["Roboto Mono", "monospace"],
      "inter": ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
