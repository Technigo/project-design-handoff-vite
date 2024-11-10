import styled from "styled-components";
import { StyledH2 } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { Button } from "../ui/Button";
import aboutSectionImage from "../../public/assets/dog-images/about-section-image.webp";
import { media } from "../styles/media";

// Container for the image background
const AboutSectionImage = styled.div`
  background-image: url(${aboutSectionImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 100%;
  width: 24.375rem;
  height: 13.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media ${media.tablet} {
    width: 44.0625rem;
    height: 24.75rem;
  }

  @media ${media.desktop} {
    width: 55rem;
  }
`;

// Wrapper for the text and dividers below the image
const ContentWrapper = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 24.375rem;
  max-width: 100%;
  z-index: 1;

  button {
    margin-top: 2rem;
    width: auto;
  }

  @media ${media.tablet} {
    width: 35rem;
  }

  @media ${media.desktop} {
    width: 45rem;
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
