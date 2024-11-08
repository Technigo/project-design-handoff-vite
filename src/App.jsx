import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";
import { About } from "./components/About";

import { Apply } from "./components/Apply";
// import { Header } from "./components/Header";
import { Dogs } from "./components/Dogs";
import { Contact } from "./components/Contact";
import { ImageCarousel } from "./components/ImageCarousel";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        {/* <Header /> */}
        <Intro />
        <About />
        <Dogs />
        <Apply />
        <Contact />
        <ImageCarousel />
      </main>
      <GlobalStyles />
    </ThemeProvider>
  );
};
