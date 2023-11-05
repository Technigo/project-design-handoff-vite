import { Link } from "react-router-dom";
import LogoBlue from "/assets/Logovectorblue.png";
import styled from "styled-components";

const StyledDarkLogo = styled.div`
  img {
    width: 76px;
    height: 83px;
    flex-shrink: 0;
  }
  p:first-child {
    color: #081957;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  p:last-child {
    color: #081957;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

export const LogoDark = () => {
  return (
    <StyledDarkLogo>
      <ButtonLink to="/" aria-label="Back to the startpage">
        <img src={LogoBlue} alt="Logo of a horse head made with blue lines" />
        <div className="logoText">
          <p>saddle up</p>
          <p>Yoga studio</p>
        </div>
      </ButtonLink>
    </StyledDarkLogo>
  );
};
