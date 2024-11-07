import { StyledH2 } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { Button } from "../ui/Button";

import aboutSectionImage from "../../public/assets/dog-images/about-section-image.webp";

import styled from "styled-components";
// Container for the image background
const AboutContent = styled.div`
  background-image: url(${aboutSectionImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 15.75rem;
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
  padding: 1.5rem;
  text-align: center;
  border-radius: 0 0 8px 8px;
  /* max-width: 24.375rem; */
  margin-top: -1rem; /* Optional: To slightly overlap the button over the image */
  z-index: 0;
  position: relative;

  /* Center the button */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Space above the button */
  button {
    margin-top: 1rem;
  }
`;
export const About = () => {
  return (
    <Layout $top="80%" $left="80%" $rotation="28deg">
      <AboutContent />
      <ContentWrapper>
        <Button>Om oss</Button>
        <Divider $variant="rotateY"/>
        <StyledH2>
          Vi erbjuder livslång kontakt och stöd till våra valköpare.
        </StyledH2>
        <Divider $variant="rotate" />
      </ContentWrapper>
    </Layout>
  );
};
