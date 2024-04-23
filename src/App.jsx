import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <Cards />
      <List />
      <Footer />
    </>
  );
};
