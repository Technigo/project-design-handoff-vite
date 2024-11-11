import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

:root {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


body {
  background: linear-gradient(180deg, #360C25 4.67%, #E1C9D8 18%, #E1C9D8 75%, #360C25 100%);
  background: -webkit-linear-gradient(180deg, #360C25 0%, #E1C9D8 50%, #360C25 100%);
  background: -moz-linear-gradient(180deg, #360C25 0%, #E1C9D8 50%, #360C25 100%);
  background: linear-gradient(180deg, #360C25 0%, #E1C9D8 50%, #360C25 100%);
  width: 100%;
  height: 2300px;

  @media (min-width: 768px) {
    height: 1980px;
    background: linear-gradient(180deg, #360C25 0%, #E1C9D8 6.67%, #E1C9D8 75%, #360C25 94.17%);
  }
}

html, body {
  margin: 0;
  padding: 0;
}

  
`