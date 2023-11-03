import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerMenuIcon from "/icons/BurgerMenuIcon.png";
import styled from "styled-components";

const MenuButton = styled.button`
  background: transparent;
`;

export const BurgerMenu = () => {
  // State to control whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle the sidebar menu */}
      <MenuButton onClick={toggleMenu}>
        <img src={BurgerMenuIcon} alt="Toggle Menu" />
      </MenuButton>

      {/* Sidebar Menu */}
      <Menu isOpen={isOpen}>
        <a href="#">Search</a>
        <a href="/">Home</a>
        <a href="/aboutus-page">About us</a>
        <a href="#">Our courses</a>
        <a href="#">Resources</a>
        <a href="#">Shop</a>
      </Menu>
    </div>
  );
};
