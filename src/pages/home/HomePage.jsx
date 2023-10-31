import { FourtyDays } from "./scenes/FourtyDays";
import { Hero } from "./scenes/Hero";
import { Kundalini } from "./scenes/Kundalini";
import { Love } from "./scenes/Love";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Kundalini />
      <FourtyDays />
      <Love />
    </>
  );
};
