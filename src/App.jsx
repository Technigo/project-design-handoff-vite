import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
// import { Typography } from "./ui/Typography";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";

export const App = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Intro />
        <GlobalStyles />
      </ThemeProvider>
    </main>
  );
};
