import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";

export const FooterSection = ({ data, onLanguageChange }) => {
  const { links, info } = data;

  return (
    <footer className="bg-main-blue text-text-light font-montserrat text-sm font-extralight text-left">
      <div className="p-6">
        <div className="relative bg-main-blue" style={{ width: "312px" }}>
          <select
            onChange={onLanguageChange}
            value={data.locale}
            className="appearance-none bg-transparent text-white py-2 pl-3 pr-10 border border-white rounded leading-tight focus:outline-none w-full"
            style={{ WebkitAppearance: "none", MozAppearance: "none" }}
          >
            <option value="en">English</option>
            <option value="jp">日本語</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
            <IoIosArrowDown />
          </div>
        </div>
        <div className="mb-4 w-full md:w-auto">
          <a
            href="/"
            className="flex items-center justify-center md:justify-start "
          ></a>
        </div>
        <div className="flex flex-col justify-start">
          {links.map((link, index) => (
            <a key={index} href={link.link} className="my-3 ml-2 underline">
              {link.text}
            </a>
          ))}
        </div>
        <div className="my-3 ml-2">
          <div className="mt-12">
            <p>{info.email}</p>
            <p>{info.phone}</p>
          </div>
          <div className="mt-6">
            <p>{info.address.company}</p>
            <p>{info.address["street-number"]}</p>
            <p>
              {info.address.zipcode} {info.address.city}
            </p>
          </div>
          <div className="mt-12">
            <p>
              {info.attribution.illustrations}{" "}
              <a
                href={`https://${info.attribution.link}`}
                className="underline"
              >
                {info.attribution.link}
              </a>
            </p>
          </div>
          <div className="mt-6">
            <p>
              {info.attribution.copyright} {info.attribution.company}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterSection.propTypes = {
  data: PropTypes.object.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
