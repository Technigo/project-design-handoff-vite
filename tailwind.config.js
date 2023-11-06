/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'footer-color': '#312D2E',
      },
      textColor: {
        'yellow-color': '#FFC700',
      },
      borderColor: {
        'yellow-color': '#FFC700',
      }, boxShadow: {
        'yellow-box': '0 3px 3px 2px rgba(255, 199, 0)',
        'black-shadow': '0 3px 3px 10px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
