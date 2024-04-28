import PropTypes from "prop-types";
import { SocialMediaIcons } from "../components/SocialMediaIcons";
import { TranslationDropdown } from "../components/TranslationDropdown";

export const FooterSection = ({ data, onLanguageChange, icons }) => {
  const { links, info, locale } = data;
  const firstGroup = links.slice(0, 5);
  const secondGroup = links.slice(5);

  return (
    <footer className="bg-main-blue text-text-light font-montserrat text-sm font-extralight text-left">
      <div className="px-6 lg:px-36 flex flex-col justify-between">

        <div className="flex flex-col items-center md:flex-row lg:justify-between">
          <SocialMediaIcons icons={icons} />
          <TranslationDropdown onLanguageChange={onLanguageChange} currentLocale={locale} />
        </div>
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 my-8">
            <div className="flex flex-col">
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
            <div className="lg:flex lg:flex-col">
              <div>
                <p className="text-sm lg:text-base">{info.email}</p>
                <p className="text-sm lg:text-base">{info.phone}</p>
              </div>
              <div className="mt-6">
                <p className="text-sm lg:text-base">{info.address.company}</p>
                <p className="text-sm lg:text-base">
                {info.address["street-number"]}
                </p>
                <p className="text-sm lg:text-base">
                {info.address.zipcode} {info.address.city}
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col">
              <div>
                <p className="text-sm lg:text-base">
                {info.attribution.illustrations}{" "}
                <a
                  href={`https://${info.attribution.link}`}
                  className="no-underline inline md:block lg:block"
                  >
                  {info.attribution.link}
                </a>
                </p>
              </div>
              <div>
                <p className="mt-6 text-sm lg:text-base">
                <span className="inline md:block lg:block">
                <a href="#">{info.attribution.copyright}</a>
                </span> 
                {info.attribution.company}
                </p>
              </div>
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
  icons: PropTypes.arrayOf(PropTypes.string).isRequired
};
