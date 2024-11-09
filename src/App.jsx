import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Dogs } from "./components/Dogs"
import { Contact } from "./components/Contact";
import { ImageCarousel } from "./components/ImageCarousel";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Header />
        <Hero />
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