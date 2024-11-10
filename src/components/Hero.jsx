// src/components/Hero.jsx
import styled from "styled-components";
import heroImage from "/assets/dog-images/hero-image.webp";
import icon from "/assets/logo-images/header-logo.svg";

const HeroSection = styled.section`
  background-image: url(${heroImage});
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 320px;

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Adjust for larger screens */
  @media (min-width: 450px) {
    height: 70vh;
  }

  @media (min-width: 1600px) {
    height: 80vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(238, 223, 202, 0.7);
  border-radius: 51% / 48%;
  width: 99vw;
  height: 54vw;
  flex-shrink: 0;

  /* Adjust for larger screens */
  @media (min-width: 768px) {
    width: 70vw;
    height: 38vw;
  }

  @media (min-width: 1600px) {
    width: 50vw;
    height: 30vw;
  }
`;

const Icon = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

export const Hero = () => {
  return (
    <HeroSection>
      <Overlay>
        <Icon src={icon} alt="Hero Icon" />
      </Overlay>
    </HeroSection>
  );
};
