import PropTypes from 'prop-types';

const commonStyle =
  'h-10 w-20 border-[1px] text-[14px] font-black border-[#79747E] xl:text-base xl:h-12 xl:w-28';
const activeStyle = ' bg-accent-blue text-neutral-white';
const inactiveStyle = 'bg-none text-accent-blue';

export const PillButton = ({ monthlyActive, onClick }) => {
  return (
    <>
      <button
        className={`rounded-l-[100px] border-r-0 ${commonStyle} ${monthlyActive ? activeStyle : inactiveStyle}`}
        onClick={() => onClick(true)}
      >
        Monthly
      </button>
      <button
        className={`rounded-r-[100px] ${commonStyle} ${monthlyActive ? inactiveStyle : activeStyle}`}
        onClick={() => onClick(false)}
      >
        Yearly
      </button>
    </>
  );
};

PillButton.propTypes = {
  monthlyActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
