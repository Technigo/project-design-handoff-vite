import { createGlobalStyle } from "styled-components";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Inter:400,700'] // Add additional font weights or families as needed
  }
});


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
`;
