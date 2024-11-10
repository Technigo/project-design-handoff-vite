import styled from "styled-components";
import heroImage from "/assets/dog-images/hero-image.webp";
import icon from "/assets/logo-images/hero-logo.svg";

const HeroSection = styled.section`
  background-image: url(${heroImage});
  position: relative;
  width: 100%;
  height: 36.625rem;
  min-height: 320px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Adjust for larger screens */
  @media (min-width: 450px) {
    height: 100vh;
  }

  @media (min-width: 1600px) {
    height: 80vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 2.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Icon = styled.img`
  width: 99%;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 60vw;
    height: 30vw;
  }

  @media (min-width: 1600px) {
    width: 50vw;
    height: 30vw;
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <Overlay>
        <Icon src={icon} alt="Thorondor's kennel logo" />
      </Overlay>
    </HeroSection>
  );
};
