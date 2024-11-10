import styled from 'styled-components';
import { HeaderBig, BodyTextWithBackground } from '../ui/Typography';
import Button from '../ui/Button';
import heroImage from '../../src/assets/Hero.png';

const StyledHeroSection = styled.section`
  width: 100%;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  max-width: 500px;
`;

export const HeaderHeroSection = () => {
  return (
    <StyledHeroSection>
      <HeroContent>
        <HeaderBig>Sprid en god gärning för en vänligare värld</HeaderBig>
        <BodyTextWithBackground>Vi skapar mötesplatser för äkta samtal och goda handlingar</BodyTextWithBackground>
        <Button>Läs mer om oss</Button>
      </HeroContent>
    </StyledHeroSection>
  );
};
