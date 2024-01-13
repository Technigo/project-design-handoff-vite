import React from 'react';
import Logo from '../assets/Images/Logotype.png';
import Social from '../assets/Images/Social media.png';
import Flag from '../assets/Images/Frame 87.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>CONTACT</p>
        <p>TERMS</p>
        <p>FAQ</p>
        <img src={Social} alt="Socialmedia" className="Social-media" />
        <img src={Flag} alt="Flag" className="Flag" />
      </div>
      <div className="footer-center">
        <img src={Logo} alt="Logotype" className="footer-logo" />
      </div>
      <div className="footer-right">
        <div>
          <p><strong>Serenity Yoga Mariatorget</strong></p>
          <p>Address: Wollmar Yxtullsgatan 4,</p>
          <p>Stockholm</p>
        </div>
        <div>
          <p><strong>Serenity Yoga Hornstull</strong></p>
          <p>Address: Hornstulls Strand 6,</p>
          <p>Stockholm</p>
        </div>
      </div>
    </footer>
  );
};
  
export default Footer;
