import PropTypes from 'prop-types';

export const HoverableButton = ({ text, customStyle }) => {
  return (
    <button
      className={`h-10 w-40 rounded-[100px] bg-accent-orange text-[16px] font-extrabold text-neutral-white hover:bg-accent-blue ${customStyle}`}
    >
      {text}
    </button>
  );
};

HoverableButton.propTypes = {
  text: PropTypes.string.isRequired,
  customStyle: PropTypes.string,
};
