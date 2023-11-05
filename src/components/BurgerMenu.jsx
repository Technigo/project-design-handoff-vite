import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/burgermenu.css';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <img
        src="/menu.png" // Replace with the actual path to your menu.png image
        alt="Menu"
        className="menu-button"
        onClick={handleMenuToggle}
      />
      <Menu isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
        <div className="menu-content">
          <a className="menu-item" href="/">Login</a>
          <a className="menu-item" href="/about">About Us</a>
          <a className="menu-item" href="/membership">Membership Plans</a>
          <a className="menu-item" href="/contact">Contact Us</a>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
