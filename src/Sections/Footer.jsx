import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>Privacy & Cookie Settings</li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>Language</li>
      </ul>
    </footer>
  )
}
