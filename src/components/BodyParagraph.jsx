import React from "react";
import styled from "styled-components";

const StyledTextContainer = styled.div`
    width: 371px;
    height: 143px;
    flex-shrink: 0;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
    padding-top: 32px;
      margin: 0 auto;
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
`;

export const BodyParagraph = () => {
  return (
        <StyledTextContainer>
            <StyledParagraph>Många barnfamiljer kämpar ekonomiskt under vintern – stötta dem och bidra till en glädjefylld jul. Din gåva kan vara skillnaden mellan en tuff tid och en magisk högtid. </StyledParagraph>
        </StyledTextContainer>
  );
};
