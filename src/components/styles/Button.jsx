import PropTypes from "prop-types";

export const Button = ({ label, className = "" }) => {
  return <button className={`${className || ""}`}>{label}</button>;
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};
