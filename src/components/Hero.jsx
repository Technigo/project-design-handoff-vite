// src/components/Hero.jsx
import React from 'react';
import styled from 'styled-components';
import heroImage from '/assets/dog-images/hero-image.webp';
import icon from '/assets/logo-images/header-logo.svg';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 320px;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: rgba(238, 223, 202, 0.70);
   border-radius: 51% / 48%;
  width: 99vw;
  height: 54vw;
  flex-shrink: 0;
  
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
