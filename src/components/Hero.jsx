import { Link } from 'react-router-dom';
import { HeroWrapper, HeroImage, HeroImageText, HeroHeader, HeroText, HeroBookButton } from './StyledComponents';

export const Hero = () => {
  return (
    <>
    <HeroWrapper>
    <HeroImage>
    <HeroImageText>
    <span>Your practice</span>
    <span>YOGA YOU</span>
  </HeroImageText>
    </HeroImage>
    <HeroHeader>
    Your destination for yoga he way you choose to practise
    </HeroHeader>
    <HeroText>
    Take a break from the stress of daily life and embark on a journey towards self-discovery and healing.
    Join our community of like-minded individuals, and together, lets explore the path to well-being, balance, and tranquility.
    </HeroText>
    <HeroBookButton><Link to="/book">Book your free class!</Link></HeroBookButton>
    </HeroWrapper>
      </>
  );
};
