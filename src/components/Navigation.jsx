import React, { useState } from "react";
import styled from "styled-components";
import HeaderLogo from "../assets/HeaderLogo.png";
import MenuIcon from "../assets/MenuIcon.svg";

// Container for navigation bar
const NavContainer = styled.div`
  display: flex;
  width: 412px;
  height: 53px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
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

const StyledMenuIcon = styled.img`
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  padding-right: 16px;
  cursor: pointer;
`;

const StyledMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  width: 60px;
  height: auto;
  top: 53px;
  right: 0;
  background-color: #FDF8F5;
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
    <NavContainer>
      <StyledHeaderLogo src={HeaderLogo} alt="Räddningsmissionen logo in orange and grey colors" />
      <StyledMenuIcon src={MenuIcon} alt="Hamburger menu" onClick={handleMenuClick} />
      {/* Pass $isOpen instead of isOpen */}
      <StyledMenu $isOpen={isMenuOpen}>
        <StyledMenuItem>Home</StyledMenuItem>
        <StyledMenuItem>About</StyledMenuItem>
        <StyledMenuItem>Contact</StyledMenuItem>
      </StyledMenu>
    </NavContainer>
  );
};
