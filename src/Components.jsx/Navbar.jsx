import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="./Images/Logo.png" alt="Company Logo" />

        <ul>
          <div className="navbar-buttons">
            <button onClick={() => (window.location.href = "/about")}>
              About us
            </button>
            <button onClick={() => (window.location.href = "/membership")}>
              Membership
            </button>
            <button onClick={() => (window.location.href = "/facilities")}>
              Facilities
            </button>
            <button onClick={() => (window.location.href = "/opening-hours")}>
              Opening Hours
            </button>
          </div>

          <button className="sign-in-button">Sign in</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
