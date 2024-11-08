import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
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

main {
  background: linear-gradient(180deg, #360C25 4.67%, #E1C9D8 18%, #E1C9D8 75%, #360C25 100%);
  margin: 0;
  padding: 0;

}

@media (min-width: 650px) {
  main {
    background: linear-gradient(180deg, #360C25 0%, #E1C9D8 6.67%, #E1C9D8 75%, #360C25 94.17%);
  }
}
`;
