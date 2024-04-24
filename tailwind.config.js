/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        peach: "#F8DCB0",
        amber: "#F1BF66",
        coral: "#EA6973",
        darkBlue: "#0B032D",
        hoverBlue: "#4C495E",
        hoverCoral: "#FEA1A9",
        whiteText: "#FEFEFE",
        neutralDark: "#090329",
      },
      fontFamily: {
        // Configure your font family here
        inter: ["Inter", "sans-serif"],
        zilla: ["Zilla Slab", "serif"],
      },
    },
  },
  plugins: [],
};

/* <div class="font-inter">This text uses Inter font.</div>
<div class="font-zilla">This text uses Zilla Slab font.</div> 

npm run build*/
