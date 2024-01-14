import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="MAGNB.png" alt="Company Logo" />
        <div className="navbar-buttons">
          <Link to="/about">
            <button>About us</button>
          </Link>
          <Link to="/membership">
            <button>Membership</button>
          </Link>
          <Link to="/facilities">
            <button>Facilities</button>
          </Link>
          <Link to="/opening-hours">
            <button>Opening Hours</button>
          </Link>
          <button className="sign-in-button">Sign in</button>
          <button>Swedish/English</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
