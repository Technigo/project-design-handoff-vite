import { createGlobalStyle } from "styled-components";


export const Fonts = () => {
  return (
    <>
    <GlobalFonts/>
    </>
  )
}

const GlobalFonts = createGlobalStyle`
body {
  .mulish-<uniquifier> {
    font-family: "Mulish", sans-serif;
  }
  .philosopher-bold {
    font-family: "Philosopher", sans-serif;
    font-weight: 700;
    font-style: normal;
  }
}`;