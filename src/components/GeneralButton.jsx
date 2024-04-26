import PropTypes from 'prop-types';

export const GeneralButton = ({ text, customStyle }) => {
  return (
    <button
      className={`h-10 w-40 rounded-[100px] bg-accent-orange text-[16px] font-extrabold text-neutral-white hover:bg-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue ${customStyle}`}
    >
      {text}
    </button>
  );
};

GeneralButton.propTypes = {
  text: PropTypes.string.isRequired,
  customStyle: PropTypes.string,
};
