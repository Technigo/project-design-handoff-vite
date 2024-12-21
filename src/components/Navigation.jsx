import { useState } from "react";
import styled from "styled-components";
import HeaderLogo from "../assets/HeaderLogo.png";
import MenuIcon from "../assets/MenuIcon.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;  
  width: 100%;
`;

// Container for navigation bar
const NavContainer = styled.div`
  display: flex;
  width: 100vw; 
  height: 53px;
  justify-content: space-between;
  align-items: center;
  background: #FDF8F5;
  position: relative;
`;

// Header logo styling
const StyledHeaderLogo = styled.img`
  width: 171px;
  height: 23px;
  flex-shrink: 0;
  padding-left: 16px;
`;

// Menu icon styling
const StyledMenuIcon = styled.img`
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  cursor: pointer;
  padding-right: 16px;
`;

// Menu styling for dropdown
const StyledMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  width: 60px;
  height: auto;
  top: 53px;
  right: 16px; // Align menu to the right edge with 
  background-color: #fdf8f5;
  padding: 16px;
  z-index: 1;
  border-radius: 0 0 4px 4px;
`;

const StyledMenuItem = styled.a`
  color: #333;
  text-decoration: none;
  padding: 4px 0;
  display: flex;
  justify-content: left;
  font-size: 14px;
  font-family: cabin;
`;

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <NavContainer>
        <StyledHeaderLogo
          src={HeaderLogo}
          alt="Räddningsmissionen logo in orange and grey colors"
        />
        <StyledMenuIcon
          src={MenuIcon}
          alt="Hamburger menu"
          onClick={handleMenuClick}
        />
        <StyledMenu $isOpen={isMenuOpen}>
          <StyledMenuItem>Home</StyledMenuItem>
          <StyledMenuItem>About</StyledMenuItem>
          <StyledMenuItem>Contact</StyledMenuItem>
        </StyledMenu>
      </NavContainer>
    </Wrapper>
  );
};
