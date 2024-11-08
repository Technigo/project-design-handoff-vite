import { Header } from "./Components/Header";
import { Welcome } from "./Components/Welcome";
import { Footer } from "./Components/Footer";

import { GlobalStyles } from "./styles/GlobalStyles";


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Welcome />
      <Footer />
    </>
  );
};
