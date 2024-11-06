import styled from "styled-components";
import HeaderImg from "../assets/HeaderImage.svg";

const HeaderContainer = styled.div`
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  position: relative;
  height: 100vh; /* Ensure the container takes the full height */
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

const HeaderText = styled.h1`
  color: #ffffff;
  font-family: "Cabin", sans-serif;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.96px;
  line-height: 48px;
  text-align: left;
  padding-left: 24px;
  position: absolute;
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
