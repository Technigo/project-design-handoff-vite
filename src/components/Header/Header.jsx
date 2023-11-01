import styled from 'styled-components';
import { Heading } from '../../reusableComponents/Heading.jsx';
import { Description } from '../../reusableComponents/Description.jsx';

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-width: 100%;
  padding: 48px 25px;
`;

const HeroHeading = styled(Heading)`
  text-transform: uppercase !important;
  color: #000;
  text-align: center;
  font-family: var(--heading-font-family);
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
`;

const HeroImage = styled.img`
  max-width: 100%;
`;

const HeroDescription = styled(Description)`
  text-align: center;
  font-family: Arsenal;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 2px soli red;
`;

const BlueLineHero = styled.div`
  width: 100%;
  height: 20px;
  background-color: var(--blue-color);
`;

export const Header = () => {
  const HeroTextOne = "Find and sharpen your competitive edge.";
  const HeroTextTwo = "We are the gym that builds champions.";


  return (
    <HeroWrapper className="hero-wrapper">
      <BlueLineHero className="blue-line-hero" />
      <HeroHeading text="Edge Performance" />
      <HeroImage src="./heroImage.png" alt="Hero Image" />
      <HeroDescription text={HeroTextOne} />
      <HeroDescription text={HeroTextTwo}/ >
    </HeroWrapper>
  );
};
