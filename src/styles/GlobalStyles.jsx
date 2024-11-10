import { createGlobalStyle } from "styled-components";
import WebFont from 'webfontloader';


WebFont.load({
  google: {
    families: ['Inter:400,700', 'Roboto Serif:400,500,700']
  }
});

export const GlobalStyles = createGlobalStyle`
  /* Global resets */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  body {
    font-family: sans-serif; /* Neutral default font */
  }
`;

export default GlobalStyles;
