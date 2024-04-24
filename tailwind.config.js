/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
      colors: {
        primary: {
          lightblue: "#4C5CED",
          darkblue: "#232E90",
          violetblue: "#99A2FB",
          mediumpink: "#F3B6AB",
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
