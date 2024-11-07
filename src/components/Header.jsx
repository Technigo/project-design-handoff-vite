import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/Heroimage.jpeg";

// Container for the hero image and h1 text
const HeroContainer = styled.div`
  display: flex;
  position: relative;
  width: 412px;
  height: 402.374px;
  // padding: 18px 24px;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;
  margin: 0;
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

// H1 text styling (Maybe create a Tyopgraphy component and move this styling)
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
`;

// Styling to separate the H1 text in three lines
const StyledSpan = styled.span`
  display: block;  
`;

export const Header = () => {
  return (
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
  );
};
