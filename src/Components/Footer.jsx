import React from 'react';
import Logo from '../assets/Images/Logotype.png';
import './Footer.css';

const Footer = () => {
    return (
      <div>
        <footer className="footer">
        <div className="footer-left">
          <p>CONTACT</p>
          <p>TERMS</p>
          <p>FAQ</p>
        </div>
        <img src={Logo} alt="Logotype" />
        <div className="footer-right">
          <div>
            <p><strong>Serenity Yoga Mariatorget</strong></p>
            <p>Address: Wollmar Yxtullsgatan 4, Stockholm</p>
          </div>
          <div>
            <p><strong>Serenity Yoga Hornstull</strong></p>
            <p>Address: Hornstulls Strand 6, Stockholm</p>
          </div>
        </div>
      </footer>
        </div>
    );
};
  
  export default Footer;