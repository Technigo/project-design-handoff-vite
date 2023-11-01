import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="src/Images/Logo.png" alt="Company Logo" />

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
          <div className="sign-in-button">
            <button>Sign in</button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
