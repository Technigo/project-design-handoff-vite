import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerImg from "../assets/Burger.svg"

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
      <img
      src={BurgerImg}
      alt="Burger-menu"
      onClick={toggleMenu}
      style={{ cursor: "pointer"}}
    />

      {/* Sidebar Menu */}
      <Menu isOpen={isOpen}>
        <a href="/">Play Parkour</a>
        <a href="/classes">Classes</a>
        <a href="/prices">Prices</a>
      </Menu>
    </div>
  );
};