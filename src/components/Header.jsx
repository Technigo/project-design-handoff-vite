import styled from "styled-components";
import HeaderImg from "../assets/HeaderImage.jpeg";

const HeaderContainer = styled.div`
  align-items: flex-end;
  background-size: cover;
  display: flex;
  height: 100vh; 
  position: relative; 
  z-index: 1; 
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  object-fit: cover;
  z-index: -1; 
  
   @media (min-width: 768px) {
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%; 
    object-fit: cover;
    z-index: -1; 
`;

const HeaderText = styled.h1`
  color: #ffffff;
  font-family: "Cabin", sans-serif;
  font-size: 42px;
  font-weight: 500;
  text-align: left;
  position: absolute;
  margin: 0;
  bottom: 65px;
  left: 24px;

  @media (min-width: 768px) {
    font-size: 62px;
    padding-left: 16px;
    bottom: 250px;
  }

  @media (min-width: 1024px) {
    font-size: 80px;
    padding-left: 24px;
    bottom: 250px;
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
