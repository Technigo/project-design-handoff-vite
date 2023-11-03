//import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
//import BurgerMenuIcon from "/icons/BurgerMenuIcon.png";
//import Search from "/icons/Search.png";
//import Exit from "/icons/Multiply.png";

//import styled from "styled-components";

// const MenuButton = styled.button`
//   background: transparent;
// `;

const customStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#202537",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "42px",
    width: "42px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3",
  },
};

export const BurgerMenu = () => {
  // State to control whether the menu is open or closed
  // const [isOpen, setIsOpen] = useState(false);

  // <// Function to toggle the menu
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };>

  return (
    <div>
      {/*Button to toggle the sidebar menu*/}
      {/* <MenuButton onClick={toggleMenu}>
        <img src={BurgerMenuIcon} alt="Toggle Menu" />
      </MenuButton> */}
      {/* isOpen={isOpen} */}
      {/* Sidebar Menu */}
      <Menu styles={customStyles}>
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
