import { Article } from "./components/article";
import { Cards } from "./components/cards";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { List } from "./components/list";
import { Navbar } from "./components/navbar";
import { Testimonials } from "./components/testimonials";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <Cards />
      <List />
      <Article />
      <Footer />
    </>
  );
};
