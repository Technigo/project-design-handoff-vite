import styled from "styled-components";

import { breakpoints } from "../utility/breakpoints";
import Button from "../utility/Button";

export function HeroSection() {
  return (
    <Hero>
      <HeroContent>
        <Headline>
          Be with yourself at <Highlight>Oasis Welness Center</Highlight>
        </Headline>
        <ButtonWrapper>
          <Button>Check Availability</Button>
        </ButtonWrapper>
      </HeroContent>
    </Hero>
  );
}

const Hero = styled.section`
  padding: var(--padding-mobile);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 544px;
  background-image: url("/images/hero.img.jpeg");
  background-size: cover;

  @media (min-width: ${breakpoints.tablet}) {
    padding: var(--padding-tablet);
    background-position: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: var(--padding-desktop);
  }
`;
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${breakpoints.desktop}) {
    gap: 48px;
  }
`;

const Headline = styled.h1`
  color: var(--yellow);
`;

const Highlight = styled.span`
  color: var(--yellow-light);
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  height: var(--Spacing-5, 40px);
  gap: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: flex-start;
    font-size: 32px;
    line-height: 40px;
  }
`;
