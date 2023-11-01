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
      {/* <ImagesContainer>
        <SquareImage imgUrl="./image-1.png" imgAlt="" isTwoImages={true} />
        <SquareImage imgUrl="./image-4.png" imgAlt="" isTwoImages={true} />
      </ImagesContainer> */}
      <Offering />
      {/* <ImagesContainer>
        <SquareImage imgUrl="./image-2.png" imgAlt="" isTwoImages={false} />
      </ImagesContainer> */}
      <KundaliniYoga />
      <Testimonials />
    </>
  );
};
