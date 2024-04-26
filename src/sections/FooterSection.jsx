import PropTypes from "prop-types";

export const FooterSection = ({ data, onLanguageChange }) => {
  const { links, info } = data;

    const toggleLanguage = () => {
    onLanguageChange({ target: { value: data.locale === 'en' ? 'jp' : 'en' }});
  };

  return (
  <footer className="bg-main-blue text-text-light font-montserrat text-sm font-extralight text-left">
      <div className="p-6">
        <div className="language-toggle">
        <button onClick={toggleLanguage}>
          {data.locale === 'en' ? '日本語' : 'English'}
        </button>
      </div>
      <div className="mb-4 w-full md:w-auto">
        <a href="/" className="flex items-center justify-center md:justify-start ">
        </a>
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
            <p>{info.address['street-number']}</p>
            <p>{info.address.zipcode} {info.address.city}</p>
          </div>
          <div className="mt-12">
            <p>
              {info.attribution.illustrations} <a href={`https://${info.attribution.link}`} className="underline">{info.attribution.link}</a>
            </p>
          </div>
          <div className="mt-6">
            <p>{info.attribution.copyright} {info.attribution.company}</p>
          </div>
        </div>
      </div>
  </footer>
);
};

FooterSection.propTypes = {
  data: PropTypes.object.isRequired,
  onLanguageChange: PropTypes.func.isRequired
};