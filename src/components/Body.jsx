import styled from "styled-components";

import { CTA } from "./CTA";
import { Description } from "./Description";
import { Download } from "./Download";
import { Instructors } from "./Instructors";
import { Intro } from "./Intro";
import { Slider } from "./Slider";

export const Body = () => {
  return (
    <StyledBody>
      <Intro />
      <Slider />
      <Description />
      <Download />
      <Instructors />
      <CTA />
    </StyledBody>
  );
};

//Styled Components

const StyledBody = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 80px 0;

  @media screen and (min-width: 834px) {
    gap: 104px;
    margin: 104px 0;
  }

  @media screen and (min-width: 1440px) {
    gap: 144px;
    margin: 144px 0;
  }

  h3 {
    font-size: 20px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
