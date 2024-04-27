import PropTypes from "prop-types";
import { SocialMediaIcons } from "../components/SocialMediaIcons";
import { IoIosArrowDown } from "react-icons/io";

export const FooterSection = ({ data, onLanguageChange, icons }) => {
  const { links, info } = data;
  const firstGroup = links.slice(0, 5);
  const secondGroup = links.slice(5);

  return (
    <footer className="bg-main-blue text-text-light font-montserrat text-sm font-extralight text-left">
      <div className="px-6 py-12 flex flex-col justify-between">
        <div className="flex flex-col md:flex-row">
          <SocialMediaIcons icons={icons} />
          <div className="relative bg-main-blue w-[312px] h-max-content mt-12 md:mt-0 lg:mt-0 ">
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

        <div className="md:flex md:flex-row md:justify-between md:my-14 lg:my-14">
          <div className="mt-12 md:mt-0 lg:mt-0">
            <p className="text-sm lg:text-base">{info.email}</p>
            <p className="text-sm lg:text-base">{info.phone}</p>
          </div>
          <div className="mt-6 md:mt-0 lg:mt-0">
            <p className="text-sm lg:text-base">{info.address.company}</p>
            <p className="text-sm lg:text-base">
              {info.address["street-number"]}
            </p>
            <p className="text-sm lg:text-base">
              {info.address.zipcode} {info.address.city}
            </p>
          </div>
          <div>
            <p className="mt-12 md:mt-0 lg:mt-0 text-sm lg:text-base">
              {info.attribution.illustrations}{" "}
              <a
                href={`https://${info.attribution.link}`}
                className="no-underline"
              >
                {info.attribution.link}
              </a>
            </p>
          </div>
          <div>
            <p className="mt-12 md:mt-0 lg:mt-0 text-sm lg:text-base">
              <a href="#">{info.attribution.copyright}</a>{" "}
              {info.attribution.company}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterSection.propTypes = {
  data: PropTypes.shape({
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    info: PropTypes.shape({
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.shape({
        company: PropTypes.string.isRequired,
        "street-number": PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
      }).isRequired,
      attribution: PropTypes.shape({
        illustrations: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        copyright: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    locale: PropTypes.string.isRequired,
  }).isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
