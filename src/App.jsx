import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { ValueProps } from "./components/ValueProps";
import { Benefits } from "./components/Benefits";

export const App = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-14 lg:gap-20">
      <Navbar />
      <Hero />
      <ValueProps />
      <Benefits />
      <Article />
      <Footer />
    </div>
  );
};
