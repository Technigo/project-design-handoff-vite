import PropTypes from "prop-types";

export const Paragraph = ({ className = "", text }) => {
  return (
    <p className={`text-pl-tab-mob lg:text-pl-desktop ${className}`}>{text}</p>
  );
};

Paragraph.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
