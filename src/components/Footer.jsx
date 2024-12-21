import styled from "styled-components";
import SwishIcon from "../assets/SwishIcon.jpeg";
import InsamlingIcon from "../assets/InsamlingIcon.svg";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const StyledSwishImage = styled.img`
  width: 141px;
  height: 43px;
  flex-shrink: 0;
  padding-top: 58px;
  padding-bottom: 32px;
`;

const StyledInsamlingImage = styled.img`
  width: 219px;
  height: 54px;
  flex-shrink: 0;
  padding-bottom: 46px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledSwishImage src={SwishIcon} alt="Swish logo, colorful circular icon indicating support for Swish mobile payments." />
      <StyledInsamlingImage src={InsamlingIcon} alt="Svensk Insamlingskontroll logo, indicating certification for trusted fundraising through a 90 accountn" />
    </StyledFooter>
  );
};
