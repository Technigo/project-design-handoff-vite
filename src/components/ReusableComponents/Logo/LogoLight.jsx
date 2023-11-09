import { Link } from "react-router-dom";
import LogoBeige from "/assets/Logovectorbeige.png";
import styled from "styled-components";

// Create a styled component for the container of the light-themed logo
const StyledLightLogo = styled.div`
  img {
    width: 152px;
    height: 165px;
    flex-shrink: 0;
  }
  p:first-child {
    color: #fff6e9;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  p:last-child {
    color: #fff6e9;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.9px;
    text-transform: uppercase;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    p:first-child {
      font-size: 32px;
    }

    p:last-child {
      font-size: 24px;
    }
  }
`;

// Create a styled component for the Link component (ButtonLink)
const ButtonLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const LogoLight = () => {
  return (
    <StyledLightLogo>
      <ButtonLink to="/" aria-label="Back to the startpage">
        <img src={LogoBeige} alt="Logo of a horse head made with beige lines" />
        <div className="logoText">
          <p>saddle up</p>
          <p>Yoga studio</p>
        </div>
      </ButtonLink>
    </StyledLightLogo>
  );
};
