import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/Heroimage.jpeg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

// Container for the hero image and h1 text
const HeroContainer = styled.div`
  display: flex;
  position: relative;
  // width: 412px;
  max-width: 500px;
  height: 402.374px;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;
  margin: 0;

  // Small phone
  @media (min-width: 320px) and (max-width: 412px) {
    width: 100vw;
    height: auto;
    max-width: 411px;
  }

  // Medium phones
  @media (min-width: 413px) and (max-width: 767px) {
    width: 100vw;
    height: auto;
    max-width: 767px;
  }

  // Tablets
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 512px;;
    height: 500px;
  }

  // Desktop
  @media (min-width: 1024px) and (max-width: 1600px) {
    width: 512px;;
    height: 500px;
  }

  /* Large Desktop (above 1600px) */
  @media (min-width: 1600px) {
    width: 512px;;
    height: 500px;
  }
`;

// Hero image styling
const StyledHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Container for H1 text overlay styling
const StyledTextContainer = styled.div`
    width: 321px;
    height: auto;
    position: absolute;
    padding-left: 24px;
`;

// H1 text styling 
const StyledHeaderText = styled.h1`
  color: #FFF;
  font-family: Cabin;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 100% */
  letter-spacing: -0.96px;
  padding-bottom: 18px;
  margin: 0;

  // Small phone
  @media (min-width: 320px) and (max-width: 412px) {
  font-size: 36px;
  line-height: 36px;
  }
`;

// Styling to separate the H1 text in three lines
const StyledSpan = styled.span`
  display: block;  
`;

export const Header = () => {
  return (
    <Wrapper>
      <HeroContainer>
        <StyledHeroImage src={HeroImage} alt="Two children looking out the window" />
        <StyledTextContainer>
          <StyledHeaderText>
            <StyledSpan>Tomten</StyledSpan> 
            <StyledSpan>kommer inte</StyledSpan> 
            <StyledSpan>till alla barn</StyledSpan>
          </StyledHeaderText>
        </StyledTextContainer>
      </HeroContainer>
    </Wrapper>
  );
};
