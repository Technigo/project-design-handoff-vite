import { Link } from 'react-router-dom';
import { HeroWrapper, HeroImage, HeroImageText, HeroHeader, HeroText, HeroBookButton, HeroBookButtonWrapper } from './StyledComponents';

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
          <span>Your destination for yoga</span>
          <span>The way you choose to practice</span>
        </HeroHeader>
        <HeroText>
          <div>
            Take a break from the stress of daily life and embark on a journey towards self-discovery and healing.
          </div>
          <div>
            Join our community of like-minded individuals, and together, let's explore the path to well-being, balance, and tranquility.
          </div>
        </HeroText>
        <HeroBookButtonWrapper>
        <HeroBookButton><Link to="/book">Book your free class!</Link></HeroBookButton>
        </HeroBookButtonWrapper>
      </HeroWrapper>
    </>
  );
};

