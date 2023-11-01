import { FourtyDays } from "./scenes/FourtyDays";
import { Hero } from "./scenes/Hero";
import { KundaliniYoga } from "./scenes/KundaliniYoga";
import { Testimonials } from "./scenes/Testimonials";
import { SquareImage } from "../../components/reusable/SquareImage";
import { Quote } from "./scenes/Quote";
import styled from "styled-components";

const ImagesContainer = styled.div`
  display: flex;
`;

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Quote />
      <ImagesContainer>
        <SquareImage imgUrl="./image-1.png" imgAlt="" isTwoImages={true} />
        <SquareImage imgUrl="./image-4.png" imgAlt="" isTwoImages={true} />
      </ImagesContainer>
      <FourtyDays />
      <ImagesContainer>
        <SquareImage imgUrl="./image-2.png" imgAlt="" isTwoImages={false} />
      </ImagesContainer>
      <KundaliniYoga />
      <Testimonials />
    </>
  );
};
