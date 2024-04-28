/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "390px",
      md: "668px",
      lg: "1024px",
    },
    extend: {
      padding: {
        180: "720px",
      },
      inset: {
        220: "880px",
      },
      borderWidth: {
        half: "0.5px",
      },
      boxShadow: {
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
      colors: {
        primary: {
          lightblue: "#4C5CED",
          darkblue: "#232E90",
          violetblue: "#99A2FB",
          mediumpink: "#F3B6AB",
          mediumred: "#EC7361",
          valupropsviolet: "#B5BCF9",
          greyblue: "#E3E6FF",
        },
      },
      fontFamily: {
        avengeance: ["Avengeance"],
        urbanistitalic: ["Urbanist-Italic"],
        urbanist: ["Urbanist"],
      },
    },
  },
  plugins: [],
};
