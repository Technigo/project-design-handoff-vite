import { Link } from "react-router-dom";
import LogoBeige from "/assets/Logovectorbeige.png";
import styled from "styled-components";

const StyledLightLogo = styled.div`
  /* display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px; */

  img {
    width: 76px;
    height: 83px;
    flex-shrink: 0;
  }
  p:first-child {
    color: #fff6e9;
    font-size: 24px;
    //font-style: normal;
    font-weight: 700;
    //line-height: normal;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  p:last-child {
    color: #fff6e9;
    font-size: 18px;
    //font-style: normal;
    font-weight: 400;
    //line-height: normal;
    letter-spacing: 0.9px;
    text-transform: uppercase;
  }
`;

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
      <ButtonLink
        to="/"
        ariaLabel="Back to the startpage"
        label="Go back to the startpage"
      >
        <img src={LogoBeige} alt="Logo of a horse head made with beige lines" />
        <div className="logoText">
          <p>saddle up</p>
          <p>Yoga studio</p>
        </div>
      </ButtonLink>
    </StyledLightLogo>
  );
};
