import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
 * {    
  margin: 0;
  padding: 0;
  }
body {
max-width: 100%;
  margin: 0 auto;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;
  font-weight: 400;
  letter-spacing: 1px;
}


p {
letter-spacing: 0.2px;
}

 img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

`;