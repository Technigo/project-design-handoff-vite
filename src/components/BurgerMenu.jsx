import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './css/burgermenu.css';

const BurgerMenu = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="bm-menu">
      <Menu isOpen={menuOpen} onStateChange={({ isOpen }) => toggleMenu(isOpen)}>
        <div className="menu-content">
          <a className="menu-item" href="#">Login</a>
          <Link to="/about" className="menu-item">About Us</Link>
          <a className="menu-item" href="#">Membership Plans</a>
          <Link to="/contact" className="menu-item">Contact Us</Link>
        </div>
      </Menu>
    </div >
  );
};

export default BurgerMenu;
