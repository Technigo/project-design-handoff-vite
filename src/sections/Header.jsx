import { useState } from "react";
import { Hamburger } from "../components/HeaderFolder/Hamburger";
import "./Header.css";
import logo from "../assets/logo.svg";
import { Buttons } from "../components/Buttons/Buttons";
import button from "../assets/Button.svg";
import buttonHover from "../assets/ButtonHover.svg";
import logout from "../assets/icons/logout.svg";
import logoutHover from "../assets/icons/logoutHover.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="Family Fitness Logo" />
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <Hamburger showMenu={showMenu} />
      </div>

      <ul className={`menu ${showMenu ? "show-menu" : ""}`}>
        <Link to="/membership" className="menu-link">
          MemberShip
        </Link>
        <Link to="/minifit" className="menu-link">
          MiniFit
        </Link>
        <Link to="/about" className="menu-link">
          AboutUs
        </Link>
      </ul>

      <div className="header-button">
        <Buttons
          buttonText=""
          url="https://example.com"
          icon={logout}
          hoverIcon={logoutHover}
          alt="Button Icon"
          tabletHidden={true}
        />

        <Buttons
          buttonText=""
          url="https://example.com"
          icon={button}
          hoverIcon={buttonHover}
          alt="LogIn"
        />
      </div>
    </div>
  );
};
