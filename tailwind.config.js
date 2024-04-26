/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '744px',
      xl: '1440px',
    },
    fontFamily: {
      avenir: ['Avenir', 'Gill Sans'],
      futura: ['Futura', 'Gill Sans'],
    },

    extend: {
      colors: {
        'primary-black': '#444446',
        'secondary-ivory': '#FFF5EB',
        'neutral-milk': '#F8F7F3',
        'neutral-white': '#FFFFFF',
        'accent-orange': '#D18B42',
        'accent-blue': '#3C97D1',
        'other-gray': '#ECECEC',
      },
      backgroundImage: {
        cobra: 'url("/cobra.jpeg")',
      },
    },
  },
  plugins: [],
};
