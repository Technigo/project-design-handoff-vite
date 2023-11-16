import styled from 'styled-components';
import { Heading } from '../../reusableComponents/Heading.jsx';
import { Description } from '../../reusableComponents/Description.jsx';

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-width: 100%;


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
  display: block;
  margin: 0 auto;
  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }
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

const HeroDescriptionWrapper = styled.div`
  display: flex;
flex-direction: column;
@media (min-width:1024px){
flex-direction: row;
justify-content: center;
}

`

const BlueLineHero = styled.div`
  width: 100%;
  height: 20px;
  background-color: var(--blue-color);
`;
export const Header = ({ heading, textOne, textTwo, image }) => {

  return (
    <HeroWrapper className="hero-wrapper">
      <BlueLineHero className="blue-line-hero" />
      <HeroHeading text={heading} />
      <HeroImage src={image} alt="Hero Image" />
      <HeroDescriptionWrapper>
        <HeroDescription text={textOne} />
        <HeroDescription text={textTwo} />
      </HeroDescriptionWrapper>
    </HeroWrapper>
  );
};


