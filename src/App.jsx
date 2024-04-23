import { BrowserRouter } from "react-router-dom";
import { TopNavigation } from "./components/sections/TopNavigation/TopNavigation";
import { Hero } from "./components/sections/Hero/Hero";

export const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-white">
        <TopNavigation />

        <Hero />

        <section className="article__section p-40 md:p-66">
          <h1>ARTICLE SECTION</h1>
          <h2>This is H2</h2>
          <button className="learn_more-btn md:join-btn-desktop bg-plum-light active:bg-deep-violet hover:bg-royal-purple  text-white buttonSize-base">
            learn more
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            repellat iusto animi unde voluptatum adipisci! Obcaecati laboriosam
            error, vel quos consectetur recusandae nesciunt tempore nostrum
            minus et, illo eligendi accusamus!
          </p>
        </section>

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
