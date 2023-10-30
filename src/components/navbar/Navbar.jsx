import { Link } from "react-router-dom";
import burgerMenu from "../../assets/burger-menu.svg";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav>
      <img src={logo} alt="company-logo" className="nav-logo" />
      <button
        className="hamburger-menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          console.log(isNavExpanded);
        }}
      >
        <img src={burgerMenu} alt="hamburger-icon" />
      </button>
      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul>
          <li>
            <a>Classes</a>
          </li>
          <li>
            <a>Yoga types</a>
          </li>
          <li>
            <a>Benefits of yoga</a>
          </li>
          <li>
            <a>Teachers</a>
          </li>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <li>
            <button>Sign up</button>
            <button>Sign in</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
