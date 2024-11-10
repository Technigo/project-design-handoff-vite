import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { Button } from "../ui/Button";
import { media } from "../styles/media";
import dogSectionImage from "../../public/assets/dog-images/dogs-section-image.webp";
import styled from "styled-components";

const DogSectionImage = styled.div`
  background-image: url(${dogSectionImage});
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 24.375rem;
  max-width: 100%;
  z-index: 1;

  @media ${media.tablet} {
    width: 35rem;
  }

  @media ${media.desktop} {
    width: 45rem;
  }
`;

export const Dogs = () => {
  return (
    <Layout $top="80%" $left="80%" $rotation="28deg">
      <DogSectionImage />
      <ContentWrapper>
        <Divider $variant="rotateX" />
        <Button>Våra hundar</Button>
        <Divider $variant="rotate" />
      </ContentWrapper>
    </Layout>
  );
};
