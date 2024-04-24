import { BrowserRouter } from "react-router-dom";
import { TopNavigation } from "./components/sections/TopNavigation";
import { Hero } from "./components/sections/Hero/Hero";
import { Article } from "./components/sections/Article";
import { Banner } from "./components/sections/Banner";
import { Footer } from "./components/sections/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-white">
        <TopNavigation />
        <Hero />
        <Article />
        <Banner />
      </main>
      <Footer />
    </BrowserRouter>
  );
};
