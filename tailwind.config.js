/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
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
        's-33': '33px',
        's-32': '32px',
        's-31': '31px',
        's-28': '28px',
        's-25': '25px',
        's-22':'22px',
        's-20': '20px',
        's-12': '12px',
      },
      fontSize: {
        "logo-h1-dt": "8.375rem",
        "title-h1-dt": "4.375rem",
        "title-h2-dt": "3.063rem",
        "title-h3-dt": "2.25rem",
        "paragraph-large-dt": "2rem",
        "paragraph-small-dt": "1.563rem",
        "title-h1-tab": "2.25rem",
        "title-h2-tab": "1.563rem",
        "title-h3-tab": "1.563rem",
        "paragraph-large-tab": "1.563rem",
        "paragraph-small-tab": "1.25rem",
        "title-h1-mob": "1.875rem",
        "title-h2-mob": "1.313rem",
        "title-h3-mob": "1.125rem",
        "paragraph-large-mob": "1rem",
        "paragraph-small-mob": "1rem",
        "70": "4.375rem",
        "49": "3.063rem",
        "36": "2.25rem",
        "32": "2rem",
        "30": "1.875rem",
        "25": "1.563rem",
        "21": "1.313rem",
        "20": "1.25rem",
        "18": "1.125rem",
        "16": "1rem",
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
        "lightgray": "#042d43",
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
