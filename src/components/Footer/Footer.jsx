import './Footer.css';
import FooterLogo from '../../assets/LogoIcon.svg';
import { Link } from 'react-router-dom';
import EnglishFlag from '../../../public/images/Eng.png';
import SwedishFlag from '../../../public/images/Swe.png';

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Link to="/">
      <img src={FooterLogo} alt="Logo Icon" className="footer-logo" />
      </Link>
      <div className="logo-container">
      <div className="footer-links">
      <Link to="/about">
        <a href="#">About us</a>
      </Link>
      <Link to="/about">
        <a href="#">Play Parkour</a>
      </Link>
      <Link to="/about">
        <a href="#">FAQ</a>
        </Link>
        <Link to="/about">
        <a href="#">Contact information</a>
        </Link>
      </div>
        <div className="flags-container">
          <img src={EnglishFlag} alt="English Flag" className="flag-icon" />
          <img src={SwedishFlag} alt="Swedish Flag" className="flag-icon" />
        </div>
      </div>
    </div>
  )
}
