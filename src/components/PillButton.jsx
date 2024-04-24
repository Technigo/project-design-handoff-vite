import { useState } from 'react';

const commonStyle =
  'h-10 w-20 border-[1px] text-[14px] font-black border-[#79747E]';
const activeStyle = ' bg-accent-blue text-neutral-white';
const inactiveStyle = 'bg-none text-accent-blue';

export const PillButton = () => {
  const [monthlyActive, setMonthlyActive] = useState(true);

  return (
    <>
      <button
        className={`rounded-l-[100px] border-r-0 ${commonStyle} ${monthlyActive ? activeStyle : inactiveStyle}`}
        onClick={() => setMonthlyActive(true)}
      >
        Monthly
      </button>
      <button
        className={`rounded-r-[100px] ${commonStyle} ${monthlyActive ? inactiveStyle : activeStyle}`}
        onClick={() => setMonthlyActive(false)}
      >
        Yearly
      </button>
    </>
  );
};
