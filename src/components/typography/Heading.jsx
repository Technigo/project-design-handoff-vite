import PropTypes from "prop-types";

export const Heading = ({ heading, text, className = "" }) => {
  let HeadingTag = "";

  switch (heading) {
    case "h1":
      HeadingTag = heading;
      break;
    case "h2":
      HeadingTag = heading;
      break;
    default:
  }

  return (
    <>
      <HeadingTag
        className={`text-${heading}-tab-mob lg:text-${heading}-desktop ${className}`}
      >
        {text}
      </HeadingTag>
    </>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
