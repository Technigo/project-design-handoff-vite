import PropTypes from "prop-types";

export const Button = ({ buttonText }) => {
  return (
    <div className="flex justify-center">
      <button className="font-montserrat bg-purple hover:bg-purple-hover active:bg-purple-click rounded-full w-28 h-10">
        {buttonText}
      </button>
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
