import { BrowserRouter } from "react-router-dom";
import { TopNavigation } from "./components/sections/TopNavigation";
import { Hero } from "./components/sections/Hero/Hero";
import { Article } from "./components/sections/Article";

export const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-white">
        <TopNavigation />

        <Hero />

        <Article />
        <section className="testimonial__section p-40 md:p-66 bg-plum-light">
          <h1>TESTIMONIAL SECTION</h1>
          <h3>This is H3</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            repellat iusto animi unde voluptatum adipisci! Obcaecati laboriosam
            error, vel quos consectetur recusandae nesciunt tempore nostrum
            minus et, illo eligendi accusamus!
          </p>
        </section>
      </main>
    </BrowserRouter>
  );
};
