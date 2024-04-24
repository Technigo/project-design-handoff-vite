export const Link = ({ className, link, text }) => {
  return <a className={className} href={link} target="_blank" rel="noopener noreferrer">{text}</a>;
};
