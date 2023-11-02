import LogoBlue from "/assets/Logovectorblue.png";
import styled from "styled-components";

const StyledDarkLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;

  img {
    width: 76px;
    height: 83px;
    //flex-shrink: 0;
  }
  p:first-child {
    color: #081957;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

export const LogoDark = () => {
  return (
    <StyledDarkLogo>
      <img src={LogoBlue} alt="Logo of a horse head made with blue lines" />
      <div className="logoText">
        <p>saddle up</p>
        <p>Yoga studio</p>
      </div>
    </StyledDarkLogo>
  );
};
