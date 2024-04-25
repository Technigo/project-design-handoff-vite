import PropTypes from "prop-types";

export const FooterSection = ({ data }) => {
  const { links, info } = data;

  return (
  <footer className="bg-main-blue text-text-light font-montserrat text-sm font-extralight text-left">
    <div className="p-6">
      <div className="mb-4 w-full md:w-auto">
        <a href="/" className="flex items-center justify-center md:justify-start">
          {/* Your logo or content here */}
        </a>
      </div>
      <div className="flex flex-col justify-start">
        {links.map((link, index) => (
          <a key={index} href={link.link} className="my-3 ml-2">
            {link.text}
          </a>
        ))}
      </div>
      <div className="my-3 ml-2">
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <p>
          {info.address.company}, {info.address['street-number']}, {info.address.zipcode} {info.address.city}
        </p>
        <p>
            {info.attribution.illustrations} <a href={`https://${info.attribution.link}`} className="underline">{info.attribution.link}</a>
          </p>
          <p>
            {info.attribution.copyright} {info.attribution.company}
          </p>
        </div>
      </div>
  </footer>
);
};


FooterSection.propTypes = {
  data: PropTypes.object.isRequired
};
