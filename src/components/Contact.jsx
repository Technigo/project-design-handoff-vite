import styled from "styled-components";
import { StyledBody } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import contactSectionImage from "../../public/assets/dog-images/contact-section.webp";
import { media } from "../styles/media";

const ContactSectionImage = styled.div`
  background-image: url(${contactSectionImage});
  background-size: cover;
  background-position: center;
  max-width: 100%;
  height: 13.75rem;
  width: 24.375rem;
  display: flex;
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  justify-content: center;

  @media ${media.tablet} {
    width: 44.0625rem;
    height: 24.75rem;
  }

  @media ${media.desktop} {
    width: 55rem;
  }
`;

// Style for Content Wrapper
const ContentWrapper = styled.div`
  padding: 1.2rem;
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

export const Contact = () => {
  return (
    //Layout component with customizable position and rotation using transient props
    // Set $top and $left to adjust the paw's position within its container
    // Use $rotation to rotate the paw
    <Layout $top="60%" $left="27%" $rotation="28deg">
      <ContactSectionImage alt="dog" />
      <ContentWrapper>
        <Divider $variant="rotateX" />
        <StyledBody>
          Följ oss på våra sociala medier för att få en inblick i vardagen på
          Thorondors kennel! Där delar vi bilder, uppdateringar och tips kring
          våra hundar och valpkullar. Genom att följa oss kan du lära känna våra
          raser bättre, se hur valparna utvecklas och få inspiration till livet
          med hund.
        </StyledBody>
        <Divider $variant="rotate" />
      </ContentWrapper>
    </Layout>
  );
};
