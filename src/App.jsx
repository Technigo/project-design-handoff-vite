import { TopNavigation } from "./components/TopNavigation/TopNavigation";

export const App = () => {
  return (
    <main>
      <TopNavigation />

      <section className="hero__section p-40 md:p-66 bg-royal-purple">
        <h1 className="md:text-h1-desktop font-bold underline">HERO SECTION</h1>
        <h2>This is H2</h2>

        <button className="join-btn text-join-btn md:text-join-btn-tablet lg:text-join-btn-desktop bg-crimson-light active:bg-plum-light hover:bg-terracotta text-button">
          join today
        </button>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          iusto animi unde voluptatum adipisci! Obcaecati laboriosam error, vel
          quos consectetur recusandae nesciunt tempore nostrum minus et, illo
          eligendi accusamus!
        </p>
      </section>

      <section className="article__section p-40 md:p-66">
        <h1>ARTICLE SECTION</h1>
        <h2>This is H2</h2>
        <button className="learn_more-btn md:join-btn-desktop bg-plum-light active:bg-deep-violet hover:bg-royal-purple  text-white buttonSize-base">
          learn more
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          iusto animi unde voluptatum adipisci! Obcaecati laboriosam error, vel
          quos consectetur recusandae nesciunt tempore nostrum minus et, illo
          eligendi accusamus!
        </p>
      </section>

      <section className="testimonial__section p-40 md:p-66 bg-plum-light">
        <h1>TESTIMONIAL SECTION</h1>
        <h3>This is H3</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          iusto animi unde voluptatum adipisci! Obcaecati laboriosam error, vel
          quos consectetur recusandae nesciunt tempore nostrum minus et, illo
          eligendi accusamus!
        </p>
      </section>
    </main>
  );
};
