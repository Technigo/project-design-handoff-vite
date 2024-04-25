/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"],
        "Inter": ["Inter", "sans-serif"],
      },
      fontSize: {
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

      },
      colors:{
        "beige": "#DECEC6",
        "lightblue": "#CADCFF",
        "steelblue": "#A1B5D8",
        "darkblue": "#042d43",
        "lightgray": "#042d43",
      }

      },
    },

  plugins: [],
}

