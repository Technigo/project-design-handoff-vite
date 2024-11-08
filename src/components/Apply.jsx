import { StyledBody } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";

import applySectionImage from "../../public/assets/dog-images/apply-section.webp";

import styled from "styled-components";
// Container for the image background
const AboutContent = styled.div`
  background-image: url(${applySectionImage});
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
export const Apply = () => {
  return (
    <Layout $top="70%" $left="50%" $rotation="-20deg">
      <AboutContent />
      <ContentWrapper>
        <Divider />
        <StyledBody>
          Hos oss får ni inte bara en hund. Ni blir en del av Thorondors familj,
          där vi finns till hands med stöd och råd. Stolta över att följa er
          gemensamma resa.
        </StyledBody>
        <Divider $variant="rotate" />
      </ContentWrapper>
    </Layout>
  );
};
