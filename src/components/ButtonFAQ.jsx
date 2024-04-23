import PropTypes from "prop-types";

export const ButtonFAQ = ({ text }) => {
  return <button>{text}</button>;
};

ButtonFAQ.propTypes = {
  text: PropTypes.string.isRequiered,
};
