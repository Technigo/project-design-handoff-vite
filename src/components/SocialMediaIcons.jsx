import PropTypes from "prop-types";

export const SocialMediaIcons = ({ icons }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex py-12 px-3 items-center">
        {icons.map((iconName) => (
          <a
            key={iconName}
            href={`https://${iconName}.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`../assets/icons/${iconName}.png`}
              alt={`${iconName} icon`}
              className="h-8 object-contain mx-3"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

SocialMediaIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
