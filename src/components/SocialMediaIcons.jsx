import PropTypes from "prop-types";

export const SocialMediaIcons = ({ icons }) => {
  return (
    <div className="flex py-12 items-center md:mr-20">
      {icons.map((iconName) => (
        <a
          key={iconName}
          href={`https://${iconName}.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`/assets/icons/${iconName.toLowerCase()}.png`} alt={`${iconName} icon`} className="h-8 object-contain mx-3" />

        </a>
      ))}
    </div>
  );
};

SocialMediaIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
