import PropTypes from "prop-types";

export const LearnMoreButton = ({ cta }) => {
  return (
    <button className="bg-main-blue text-text-light rounded-lg hover:bg-hover-blue transition hover:duration-300 active:duration-75 font-montserrat font-light text-sm drop-shadow-button active:drop-shadow-none active:translate-y-1 px-12 py-4 my-12 md:px-20 lg:text-2xl lg:px-22 lg:py-6">
      {cta}
    </button>
  );
};

LearnMoreButton.propTypes = {
  cta: PropTypes.string.isRequired,
};
