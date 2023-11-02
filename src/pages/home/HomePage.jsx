import { Hero } from "./sections/hero/Hero";
import { Quote } from "./sections/quote/Quote";
import { Offering } from "./sections/offering/Offering";
import { KundaliniYoga } from "./sections/kundaliniYoga/KundaliniYoga";
import { Testimonials } from "./sections/testimonials/Testimonials";

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
