/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightblue: "#4C5CED",
          darkblue: "#232E90",
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
