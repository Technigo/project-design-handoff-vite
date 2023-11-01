export const Links = ({ links }) => {
    return (
      <div>
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.text}
          </a>
        ))}
      </div>
    );
  };