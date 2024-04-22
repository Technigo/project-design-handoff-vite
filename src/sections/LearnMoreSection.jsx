import PropTypes from "prop-types";

export const LearnMoreSection = ({ data }) => {
  return (
    <div className="bg-background-lavender text-text-dark p-5 text-center">
      <h2 className="text-2x1 md:text-4x1 font-bold mb-3">{data.heading}</h2>
      <p className="mb-4">{data.subheading}</p>
      <button>{data.cta}</button>
    </div>
  );
};

LearnMoreSection.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
  }).isRequired,
};
