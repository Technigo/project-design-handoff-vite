import PropTypes from "prop-types";

export const Button = ({ buttonText }) => {
  return (
    <div>
      <button className="font-montserrat bg-purple rounded-full w-28 h-10">{buttonText}</button>
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
