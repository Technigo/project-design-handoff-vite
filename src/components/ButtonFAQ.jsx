import PropTypes from "prop-types";

export const ButtonFAQ = ({ text }) => {
  return <button className="font-montserrat bg-green rounded-full w-32 h-10">{text}</button>;
};

ButtonFAQ.propTypes = {
  text: PropTypes.string.isRequired,
};
