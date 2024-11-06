import { StyledH2 } from "../ui/Typography";
import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { Button } from "../ui/Button";

import aboutSectionImage from "../../public/assets/dog-images/about-section-image.webp";

import styled from "styled-components";

const AboutContent = styled.div`
  background-image: url(${aboutSectionImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  /* height: 400px;  */
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  position: relative;
`;

export const About = () => {
  return (
    <Layout $top="60%" $left="27%" $rotation="8deg">
      <AboutContent></AboutContent>
      <Button>Om oss</Button>
      <Divider />
      <StyledH2>
        Vi erbjuder livslång kontakt och stöd till våra valköpare.
      </StyledH2>
      <Divider reversed />
    </Layout>
  );
};
