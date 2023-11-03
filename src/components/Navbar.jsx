import "../components/navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BurgerButton } from "./BurgerButton";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="/public/assets/logo/logo_phone.svg"
          alt="logo"
          className="logo"
        />
      </Link>
      <BurgerButton onClick={toggleMenu} isOpen={menuOpen} />
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Courses for kids</li>
          <li>Info for adults</li>
          <li>
            <NavLink to="/contact" className="navLink" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
