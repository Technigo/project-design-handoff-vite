import { BrowserRouter } from "react-router-dom";
import { TopNavigation } from "./components/sections/Navigation/TopNavigation";
import { Hero } from "./components/sections/Hero";
import { Article } from "./components/sections/Article";
import { Banner } from "./components/sections/Banner";
import { Footer } from "./components/sections/Footer";
import { ValueProps } from "./components/sections/ValueProps";
import { StartJourney } from "./components/sections/StartJourney";

export const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-white">
        <TopNavigation />
        <Hero />
        <Article />
        <Banner />
        <ValueProps />
        <StartJourney />
      </main>
      <Footer />
    </BrowserRouter>
  );
};
