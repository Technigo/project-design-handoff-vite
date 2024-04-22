/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "744px",
      lg: "1440px",
    },
    colors: {
      yellow: "#F6E53C",
      pink: "#DE20F9",
      purple: "#4B189E",
      dkpurple: "#120740",
      white: "#FFFFFF",
      black: "#08031D",
    },
    fontSize: {
      sm: ["16px", { letterSpacing: "3%", fontWeight: "400" }],
      base: ["20px", { fontWeight: "400" }],
      lg: ["25px", { fontWeight: "700" }],
      xl: ["30px", { fontWeight: "700" }],
      "2xl": ["35px", { fontWeight: "700" }],
      "3xl": ["40px", { fontWeight: "700" }],
      "4xl": ["55px", { fontWeight: "700" }],
    },
    spacing: {
      1: "16px",
      2: "32px",
      3: "40px",
      4: "44px",
      5: "48px",
      6: "80px",
      7: "144px",
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('src/assets/woman-dancing.jpg')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
