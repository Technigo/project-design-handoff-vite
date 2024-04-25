import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { BgBlob } from "./components/BgBlob";
import { ValueProps } from "./components/ValueProps";
import { Benefits } from "./components/Benefits";

export const App = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-14 lg:gap-20">
      <Navbar />
      <Hero />
      <Testimonials />
      <ValueProps />
      <Benefits />
      <Article />
      <BgBlob />
      <Footer />
    </div>
  );
};
