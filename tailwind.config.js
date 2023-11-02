/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "mobile": "393px",
      // => @media (min-width: 393px) { ... }
      "tablet": "834px",
      // => @media (min-width: 834px) { ... }
      "desktop": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        "primary": "#F2ECE4",
        "secondary": "#F3AD98",
        "hover": "#525B64",
        "review": "#C0AB9B",
        "text": "#3C3C3C"
      },
    },
  },
  plugins: [],
}

