import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
// import { Typography } from "./ui/Typography";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Header />
        <Intro />
      </main>
    </ThemeProvider>
  );
}