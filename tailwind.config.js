/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        peach: "#F8DCB0",
        amber: "#F1BF66",
        coral: "#EA6973",
        darkBlue: "#0B032D",
        hoverBlue: "#4C495E",
        hoverCoral: "#FEA1A9",
        whiteText: "#FEFEFE",
        neutralDark: "#090329",
        whiteBackground: "#FFFAFA",
      },

      fontFamily: {
        // Configure your font family here
        zilla: ["Zilla Slab", "serif"],
        inter: ["Inter", "sans-serif"],
      },

      fontSize: {
        16: "16px",
        24: "24px",
        28: "28px",
        36: "36px",
        44: "44px",
        60: "60px",
      },

      backgroundImage: {
        heroMobile: "url('/image-hero-mobile.png')",
        heroTablets: "url('/image-hero-tablet.png')",
        heroDesktop: "url('/image-hero-desktop.png')",
      },

      lineHeight: {
        leading20: "20px",
        leading24: "24px",
        leading28: "28px",
        leading32: "32px",
        leading36: "36px",
        48: "48px",
      },

      height: {
        h250: "250px",
        h550: "550px",
        h400: "400px",
        h960: "960px",
      },
      width: {
        210: "210px",
        310: "310px",
        350: "350px",
        380: "380px",
        500: "500px",  
      },
      maxWidth: {
        w850: "850px",
        w750: "750px",  
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: {
              inter: ["Inter", "sans-serif"],
              zilla: ["Zilla Slab", "serif"],
            },
            p: {
              lineHeight: "none",
            },
          },
        },
      },
    },
  },
  plugins: [],
};

/* <div class="font-inter">This text uses Inter font.</div>
<div class="font-zilla">This text uses Zilla Slab font.</div> 

npm run build*/
