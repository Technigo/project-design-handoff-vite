import "../components/navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };
  return (
    <nav className="nav">
      <Link to="/">
        <img src="./src/assets/logo/logo_phone.svg" alt="logo" />
      </Link>
      {/* <div className={`burger-menu ${menuOpen ? "open" : ""}`}>
        <div className="burger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div> */}
      <ul className="navbar">
        <li>Courses for kids</li>
        <li>Info for adults</li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {/* </div> */}
    </nav>
  );
};
