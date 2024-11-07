import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";
import { About } from "./components/About";
import { Button } from "./ui/Button";
import { Header } from "./components/Header";


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Header />
        <Intro />

        <About />
        <Button />
      </main>
      <GlobalStyles />
    </ThemeProvider>
  );
}