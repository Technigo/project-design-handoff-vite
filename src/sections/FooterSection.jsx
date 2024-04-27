import PropTypes from "prop-types";
import { SocialMediaIcons } from "./components/SocialMediaIcons"
import { IoIosArrowDown } from "react-icons/io";

export const FooterSection = ({ data, onLanguageChange, icons }) => {
  const { links, info } = data;
  const firstGroup = links.slice(0, 5);
  const secondGroup = links.slice(5);

  return (
    <footer className="bg-main-blue text-text-light font-montserrat text-sm font-extralight text-left">
      <SocialMediaIcons icons={icons}/>
      <div className="p-6 flex flex-col md:flex-row justify-between">
        <div className="relative bg-main-blue w-[312px]">
          <select
            onChange={onLanguageChange}
            value={data.locale}
            className="appearance-none bg-transparent text-white py-2 pl-3 pr-10 border border-white rounded leading-tight focus:outline-none w-full"
          >
            <option value="en">English</option>
            <option value="jp">日本語</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
            <IoIosArrowDown />
          </div>
        </div>

        <div className="flex flex-row mt-12">
          <div className="flex flex-col mr-12">
            {firstGroup.map((link, index) => (
              <a key={index} href={link.link} className="my-3 underline">
                {link.text}
              </a>
            ))}
          </div>

          <div className="flex flex-col">
            {secondGroup.map((link, index) => (
              <a key={index} href={link.link} className="my-3 underline">
                {link.text}
              </a>
            ))}
          </div>
        </div>
        {/* font size doesnt reflect to 14px */}
        <div className="my-3 ml-2 text-sm">
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
              {/* underline still shows for icons8.com */}
              <a href="#" className="no-underline">
                {info.attribution.copyright}
              </a>
              {info.attribution.company}
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
  icons: PropTypes.arrayOf(PropTypes.string),
};
