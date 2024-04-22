import { TopNavigation } from "./components/TopNavigation/TopNavigation";

export const App = () => {
  return (
    <main>
      <TopNavigation />

      <section className="hero__section p-66 bg-royal-purple">
        <h1 className="text-3xl font-bold underline">HERO SECTION</h1>
        <h2>This is H2</h2>

        <button className="join-btn bg-crimson-light active:bg-plum-light hover:bg-terracotta text-lg">
          join today
        </button>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          iusto animi unde voluptatum adipisci! Obcaecati laboriosam error, vel
          quos consectetur recusandae nesciunt tempore nostrum minus et, illo
          eligendi accusamus!
        </p>
      </section>

      <section className="article__section p-66">
        <h1>ARTICLE SECTION</h1>
        <h2>This is H2</h2>
        <button className="learn_more-btn bg-plum-light text-lg active:bg-deep-violet hover:bg-royal-purple  text-white">
          learn more
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          iusto animi unde voluptatum adipisci! Obcaecati laboriosam error, vel
          quos consectetur recusandae nesciunt tempore nostrum minus et, illo
          eligendi accusamus!
        </p>
      </section>

      <section className="testimonial__section p-66 bg-plum-light">
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
