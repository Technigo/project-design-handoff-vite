import { NavLinks } from "../../elements/NavLinks";

export const MainNavigation = () => {
  const navLinks = ["getting started", "classes", "about us"];
  return (
    <ul className="hidden md:flex">
      {navLinks.map((link, index) => (
        <li key={`navlink-${index}`}>
          <NavLinks
            className="px-15  hover:text-crimson-light text-nav-desktop"
            label={link}
          />
        </li>
      ))}
    </ul>
  );
};
