import { Header } from "./Components/Header";
import { Welcome } from "./Components/Welcome";
import { Footer } from "./Components/Footer";
import { Cards } from "./Components/Cards";
import { QuoteCards } from "./Components/QuoteCards";
import { ActivityCards } from "./Components/ActivityCards";
import { AchievementsCards } from "./Components/AchievementsCards";

import { GlobalStyles } from "./styles/GlobalStyles";


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Welcome />
      <Cards />
      <QuoteCards />
      <ActivityCards />
      <AchievementsCards />
      <Footer />

    </>
  );
};
