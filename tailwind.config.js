/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,jsx}',
    '.index.html',
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '680px',
      'desktop': '1280px',
    },
    extend: {
      backgroundImage: {
        'left-center': 'left center',
        'right-center': 'right center',
      },
spacing:{
  325: '325px',
  
},

      backgroundSize: {
        'max': 'cover',
      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      fontSize: {
        "title-h1-dt": "4.375rem",
        "title-h2-dt": "3.063rem",
        "paragraph-large-dt": "2rem",
        "title-h1-tablet-and-title-h3-dt": "2.25rem",
        "title-h2-h3-paragraph-large-tablet-and-paragraph-small-dt": "1.563rem",
        "paragraph-small-tab": "1.25rem",
        "title-h1-mob": "1.875rem",
        "title-h2-mob": "1.313rem",
        "title-h3-mob": "1.125rem",
        "paragraph-mob": "1rem",
      },
      colors: {
        "beige": "#DECEC6",
        "lightblue": "#CADCFF",
        "steelblue": "#A1B5D8",
        "darkblue": "#042d43",
        "yogawhite": "#F8F7F7",
      },
    },
  },
  plugins: [],
};


