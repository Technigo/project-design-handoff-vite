import { Button } from "../../styles/button/Button";
import HeroImage from "/assets/images/crossfit-baby.jpg";

export const Hero = () => {
  return (
    <section
      className="p-40 md:p-66 bg-cover text-white"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <h1 className="mt-11 md:text-h1-desktop font-bold">
        fun, fabulous & fearless: crossfit for mums
      </h1>
      <h2 className="mb-6 text-lime-400">
        Ready for crossfit and cuddles? Join our small groups for amazing mums
        just like you.
      </h2>

      <Button
        className={
          "join-btn text-join-btn md:text-join-btn-tablet lg:text-join-btn-desktop bg-crimson-light active:bg-plum-light hover:bg-terracotta text-button"
        }
        label={"Join us!"}
      />
    </section>
  );
};
