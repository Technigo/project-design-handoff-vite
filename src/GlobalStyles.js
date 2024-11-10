import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
  outline: 1px solid red;
}

:root {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* COLORS */
  --color-primary: rgba(239, 223, 197, 1);
  --color-secondary: rgba(58, 69, 55, 1);
  --color-neutral: rgba(249, 244, 237, 1);
  --color-accent: rgba(153, 71, 29, 1);
  --color-font: rgba(51, 23, 9, 1);
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
`;
