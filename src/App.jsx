import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";
import { About } from "./components/About";
import { Button } from "./ui/Button";

export const App = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Intro />
        <About />
        <Button />
        <GlobalStyles />
      </ThemeProvider>
    </main>
  );
};
