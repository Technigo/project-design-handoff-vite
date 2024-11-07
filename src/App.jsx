import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";
import { About } from "./components/About";
import { Header } from "./components/Header";
import {Contact} from "./components/Contact";


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Header />
        <Intro />
        <About />
        <Contact />
      </main>
      <GlobalStyles />
    </ThemeProvider>
  );
}