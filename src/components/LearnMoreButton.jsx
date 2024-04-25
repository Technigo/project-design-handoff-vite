import PropTypes from "prop-types"

export const LearnMoreButton = ({ cta }) => {
  return (
     <button className="bg-main-blue text-text-light rounded-lg hover:bg-hover-blue transition duration-300 font-montserrat font-light	text-sm drop-shadow-button  px-12 py-4 my-12">
      {cta}
    </button>
   )
 }

 LearnMoreButton.propTypes = {
  cta: PropTypes.string.isRequired
};