import PropTypes from "prop-types"

export const LearnMoreButton = ({ cta }) => {
  return (
     <button className="bg-main-blue text-text-light rounded-lg hover:bg-hover-blue transition duration-300 font-montserrat font-light	text-sm drop-shadow-md mb-4 px-12 py-4">
      {cta}
    </button>
   )
 }

 LearnMoreButton.propTypes = {
  cta: PropTypes.string.isRequired
};