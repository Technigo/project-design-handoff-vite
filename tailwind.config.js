/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      avenir: ['Avenir'],
      futura: ['Futura'],
      sans: ['Futura, Avenir, Gill Sans, sans-serif'],
    },

    extend: {
      colors: {
        'primary-black': '#444446',
        'secondary-ivory': '#FFF5EB',
        'neutral-milk': '#F8F7F3',
        'neutral-white': '#FFFFFF',
        'accent-orange': '#D18B42',
        'accent-blue': '#3C97D1',
      },
      backgroundImage: {
        cobra: "url('yoga-pose-cobra.jpeg')",
      },
    },
  },
  plugins: [],
};
