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
 padding: 64px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 544px;
  background-image: url("/images/hero.img.jpeg");
  background-size: cover;
  background-position: center;
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 64px;
    height: 544px;
  }


  @media (min-width: ${breakpoints.desktop}) {
    padding: 98px 128px;
  }

`;
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
 /*  align-items: flex-end;
  justify-content: flex-end; */
  gap: 32px;

  @media (min-width: ${breakpoints.tablet}) {
 
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 48px;
  }
`;

const Headline = styled.h1`
  color: var(--yellow);
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  font-family: var(--header);
/*   text-align: left; */
  margin-top: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 56px;
    line-height: 56px;
  }
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
