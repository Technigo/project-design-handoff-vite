import React from "react";
import styled from "styled-components";

const StyledTextContainer = styled.div`
    width: 371px;
    height: 143px;
    flex-shrink: 0;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
    margin: 0 auto;

  // Small phone
  @media (min-width: 320px) and (max-width: 411px) {
    width: 80%;
    height: auto;
    padding-top: 12px
    padding-bottom: 32px;
  }

  // Tablets
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 485px;
    height: 160px;
  }

  // Desktop
  @media (min-width: 1024px) and (max-width: 1600px) {
    width: 571px;;
    height: 200px;
  }

  /* Large Desktop (above 1600px) */
  @media (min-width: 1600px) {
    width: 571px;;
    height: 200px;
  }
`;

const StyledParagraph = styled.p`
    color: #545F71;
    font-feature-settings: 'calt' off;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
    letter-spacing: -0.16px;
    margin: 0;

  // Tablets
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
    line-height: 42px;
    letter-spacing: -0.2px;
  }

  // Desktop
  @media (min-width: 1024px) and (max-width: 1600px) {
    font-size: 24px;
    line-height: 42px; 
    letter-spacing: -0.2px;
  }

  /* Large Desktop (above 1600px) */
  @media (min-width: 1600px) {
    font-size: 24px;
    line-height: 42px; 
    letter-spacing: -0.2px;
  }
`;

export const BodyParagraph = () => {
  return (
        <StyledTextContainer>
            <StyledParagraph>Många barnfamiljer kämpar ekonomiskt under vintern – stötta dem och bidra till en glädjefylld jul. Din gåva kan vara skillnaden mellan en tuff tid och en magisk högtid. </StyledParagraph>
        </StyledTextContainer>
  );
};
