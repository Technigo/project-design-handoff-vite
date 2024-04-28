import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavLinks = ({ className = "", label }) => {
  return (
    <NavLink className={`font-bebas ${className}`} to="/">
      {label}
    </NavLink>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};
