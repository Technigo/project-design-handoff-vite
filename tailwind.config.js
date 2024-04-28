/** @type {import('tailwindcss').Config} */
<<<<<<<<< Temporary merge branch 1
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
=========
module.exports = {
  content: [
    './src/components/**/*.{html,jsx}',
    '.index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'left-center': 'left center',
        'right-center': 'right center',
      },
      spacing: {
        's-325': '325px',
        's-150': '150px',
        's-105': '105px',
        's-65': '65px',
        's-45': '45px',
        's-40': '40px',
        's-33': '33px',
        's-32': '32px',
        's-31': '31px',
        's-28': '28px',
        's-25': '25px',
        's-22': '22px',
        's-20': '20px',
        's-12': '12px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'mobile': '320px',
        'tablet': '680px',
        'desktop': '1280px',
      },
      // screens: {
      //   'tablet': {'min': '744px', 'max': '1439px'},
      //   // => @media (min-width: 640px) { ... }

      //   'desktop': '1440px',
      //   // => @media (min-width: 1280px) { ... }
      // },
      backgroundSize: {
        'max': 'cover',

      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        "beige": "#DECEC6",
        "lightblue": "#CADCFF",
        "steelblue": "#A1B5D8",
        "darkblue": "#042d43",
        "yogawhite": "#F8F7F7",
        "activegray":"909394",
      },
      images: {
        "mobw": "194px",
        "mobh": "137px",
        "tabh": "167px",
        "tabw": "234px",
        "deskh": "310px",
        "deskw": "417px",
      },
      lineHeight:{
        "12": "6.4rem"
      },
    },
  },

  plugins: [],
};


