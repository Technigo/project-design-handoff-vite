import { StyledH2 } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { Button } from "../ui/Button";

import aboutSectionImage from "../../public/assets/dog-images/about-section-image.webp";

import styled from "styled-components";

// Container for the image background
const AboutSectionImage = styled.div`
  background-image: url(${aboutSectionImage});
  background-size: cover;
  background-position: center;
  /* width: 100%; */
  width: 24.375rem;
  height: 13.75rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 1;
`;

// Wrapper for the text and dividers below the image
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 24.375rem;
  max-width: 100%;
  z-index: 1;

  /* Space above the button */
  button {
    margin-top: 2rem;
    /* margin-bottom: 1rem; */
  }
`;
export const About = () => {
  return (
    <Layout $top="80%" $left="80%" $rotation="28deg">
      <AboutSectionImage />
      <ContentWrapper>
        <Button>Om oss</Button>
        <Divider $variant="rotateX" />
        <StyledH2>
          Vi erbjuder livslång kontakt och stöd till våra valköpare.
        </StyledH2>
        <Divider $variant="rotate" />
      </ContentWrapper>
    </Layout>
  );
};
