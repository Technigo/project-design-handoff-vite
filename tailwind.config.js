/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      "rose": "#F1C7BF",
      "white": "#F6F6F6",
      "white-btn": "#E7E7E7",
      "marin-blue": "#252837",
      "grey": "#444444",
      "blue-grey": "#9FACB9",
      "dark": "#120309"
    },
    fontFamily: {
      'raleway': ['raleway', 'sans-serif'],
      'oswald': ['oswald', 'sans-serif'],
      'sourcesans3': ['sourcesans3', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

