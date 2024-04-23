import PropTypes from "prop-types"

export const Button = ({ buttonText }) => {
  return (
    <div>
      <button>{buttonText}</button>
    </div>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
}
