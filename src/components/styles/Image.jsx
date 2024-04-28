import PropTypes from "prop-types";

export const Image = ({ src, alt, className = "" }) => {
  return <img src={src} alt={alt} className={className} />;
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
