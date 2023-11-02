
import "./header.css";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/icons/LogoDesktop.svg";
import InfoIcon from "../assets/icons/Lines.svg";

export const Header = () => {

  return (
    <header>
      <div className="header-wrapper">
        <Link to="/" className="icon-home-link">
          <img src={HomeIcon} alt="Home Icon" className="icon home-icon" />
        </Link>
        <Link to="/about" className="icon-about-link">
          <div className="icon-container">
            <img
              src={InfoIcon}
              alt="Info Icon"
              className="icon info-icon"
            />
            <p id="menu-text">Menu</p>
          </div>
        </Link>
      </div>
    </header>
  );
};


