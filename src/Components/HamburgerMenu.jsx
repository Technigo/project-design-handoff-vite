import { NavLink } from "react-router-dom";

export const HamburgerMenu = () => {
  return (
    <div>
      <nav id="hamburger-menu">
        <ul className="menu-ul">
          {/* Navigation links (hidden by default) */}
          <li className="menu-li">
            <a href="#login">Log in</a>
          </li>
          <li className="menu-li">
            {/* NavLink components for navigation to the About us and Contact us pages. They will have an "active" class when the path matches "/about" or "/contact" */}
            <NavLink to="/about">About Us</NavLink>
          </li>  
          <li className="menu-li">
            <a href="#membership-plans">Membership plans</a>
          </li>
          <li className="menu-li">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
