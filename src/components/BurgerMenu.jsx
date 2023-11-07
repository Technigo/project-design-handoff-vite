import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './css/burgermenu.css';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Menu isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
        <div className="menu-content">
          <a className="menu-item" href="/">Login</a>
          <Link to="/about" className="menu-item">About Us</Link>
          <a className="menu-item" href="/membership">Membership Plans</a>
          <Link to="/contact" className="menu-item">Contact Us</Link>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
