import { NavLinks } from "../elements/NavLinks";

export const Footer = () => {
  const navLinks = [
    "contact",
    "faq",
    "follow us",
    "terms & conditions",
    "select language",
    "log in",
  ];
  return (
    <footer className="bg-plum-light flex justify-center py-[70px] max-w-1440 m-auto">
      <nav className="navbar">
        <ul className="items-center px-12 flex flex-wrap justify-center">
          {navLinks.map((links, index) => (
            <li key={`footer_link-${index}`}>
              <NavLinks
                className={
                  "px-10 text-white hover:text-grey text-ps-desktop md:text-h2-desktop"
                }
                label={links}
              />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
