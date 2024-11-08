import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";
import { About } from "./components/About";
// import { Header } from "./components/Header";
import { Dogs } from "./components/Dogs"
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
        <Contact />
        <ImageCarousel />
      </main>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}