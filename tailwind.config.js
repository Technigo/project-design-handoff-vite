/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'rock-salt': ['"Rock Salt"', 'cursive'],
      'roboto-mono': ['Roboto Mono', 'monospace'],
      'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

