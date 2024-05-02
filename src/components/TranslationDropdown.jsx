import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";

export const TranslationDropdown = ({ onLanguageChange, currentLocale }) => {
  return (
    <div className="relative bg-main-blue w-[312px] h-max-content md:mt-0 lg:mt-0 ">
      <label htmlFor="translate" className="sr-only">
        Select language:{" "}
      </label>
      <select
        id="translate"
        onChange={onLanguageChange}
        value={currentLocale}
        className="appearance-none bg-transparent text-white py-2 pl-3 pr-10 border border-white leading-tight focus:outline-none w-full"
      >
        <option value="en">English</option>
        <option value="jp">日本語</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

TranslationDropdown.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
};
