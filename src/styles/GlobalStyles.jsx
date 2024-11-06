import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html, body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
    font-family: 'Roboto Serif', serif;
}

/* Colors */
--color-primary: #EA96DF;
--color-secondary1: #82E1DF;
--color-secondary2: #F0EC92;
`