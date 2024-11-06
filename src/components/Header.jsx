import styled from "styled-components";
import HeaderImg from "../assets/HeaderImage.svg"


// Styled-components for the Header
const HeaderContainer = styled.div`
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  position: relative;
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`;

const HeaderText = styled.p`
  color: #ffffff;
 font-family: "Cabin", sans-serif;
font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.96px;
  line-height: 48px;
  position: relative;
  width: 321px;
  text-align: left; 
  padding-left: 24px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage src={HeaderImg} alt="Header background" />
      <HeaderText>
        Tomten kommer inte <br />
        till alla barn
      </HeaderText>
    </HeaderContainer>
  );
};
