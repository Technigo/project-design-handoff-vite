import "../components/navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BurgerButton } from "./BurgerButton";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="./src/assets/logo/logo_phone.svg"
          alt="logo"
          className="logo"
        />
      </Link>

      <BurgerButton />
      <div className="navbar-links">
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
