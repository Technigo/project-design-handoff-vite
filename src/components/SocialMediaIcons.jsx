export const SocialMediaIcons = ({ icons }) => {
  return (
    <div className="flex space-x-4">
      {icons.map((iconName) => (
        <a
          key={iconName}
          href={`https://${iconnName}.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`../assets/icons/${iconName}.png`}
            alt={`${iconName} icon`}
            className="h-8 w-8"
          />
        </a>
      ))}
    </div>
  );
};
