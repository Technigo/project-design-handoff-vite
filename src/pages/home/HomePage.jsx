import { Hero } from "./scenes/hero/Hero";
import { Quote } from "./scenes/quote/Quote";
import { Offering } from "./scenes/offering/Offering";
import { KundaliniYoga } from "./scenes/kundaliniYoga/KundaliniYoga";
import { Testimonials } from "./scenes/testimonials/Testimonials";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Quote />
      <Offering />
      <KundaliniYoga />
      <Testimonials />
    </>
  );
};
