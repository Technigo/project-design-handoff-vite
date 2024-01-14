import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="MAGNB.png" alt="Company Logo" />

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

            <button className="sign-in-button">Sign in</button>
            <button>Swedish/English</button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
