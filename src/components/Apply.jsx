import { StyledBody } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { Button } from "../ui/Button";

import applySectionImage from "../../public/assets/dog-images/apply-section.webp";

import styled from "styled-components";
// Container for the image background
const ApplySectionImage = styled.div`
  background-image: url(${applySectionImage});
  background-size: cover;
  background-position: center;
  max-width: 100%;
  width: 24.375rem;
  /* height: 13.75rem; */
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

  button {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
`;
export const Apply = () => {
  return (
    <Layout $top="70%" $left="50%" $rotation="-20deg">
      <ApplySectionImage></ApplySectionImage>
      <ContentWrapper>
        <Divider />
        <StyledBody>
          Hos oss får ni inte bara en hund. Ni blir en del av Thorondors familj,
          där vi finns till hands med stöd och råd. Stolta över att följa er
          gemensamma resa.
        </StyledBody>
        <Divider $variant="rotate" />
        <Button>Ansök om din valp</Button>
      </ContentWrapper>
    </Layout>
  );
};
