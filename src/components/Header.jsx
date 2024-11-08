import styled from "styled-components";
import HeaderImg from "../assets/header-img.svg";

const HeaderContainer = styled.div`
  align-items: flex-end;
  background-size: cover;
  display: flex;
  height: 100vh; /* Hela höjden på skärmen */
  position: relative; /* Behåller bilden och texten i samma lager */
  z-index: 1; /* Placeras ovanför andra komponenter */
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Anpassar sig efter hela HeaderContainer */
  object-fit: cover;
  z-index: -1; /* Bilden hamnar bakom texten */
`;

const HeaderText = styled.h1`
  color: #ffffff;
  font-family: "Cabin", sans-serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.96px;
  line-height: 28px;
  text-align: left;
  position: absolute;
  margin: 0;
  bottom: 18px;
  left: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    padding-left: 16px;
    bottom: 16px;
    left: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 48px;
    padding-left: 24px;
    bottom: 24px;
    left: 24px;
  }
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
