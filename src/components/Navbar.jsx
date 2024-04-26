import navbarLogoSm from "../assets/logo-small-notext.svg";
import navbarLogoMd from "../assets/logo-medium.svg";
import navbarLogoLg from "../assets/logo-large.svg";
import searchIcon from "../assets/icon-search.svg";
import hamburgerMenu from "../assets/hamburger-menu.svg";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 flex flex-row items-center justify-between m-4 md:m-8 lg:mx-28 lg:mt-6 z-10">
      <picture>
        <source media="(min-width: 1024px)" srcSet={navbarLogoLg} />
        <source media="(min-width: 768px)" srcSet={navbarLogoMd} />
        <img src={navbarLogoSm} alt="logo" />
      </picture>
      <div className="hidden lg:flex">
        <ul className="flex flex-row items-center gap-6 text-lg font-avengeance text-primary-darkblue">
          <li className="whitespace-nowrap">
            <a href="">About us</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="">Classes</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="">Find your local club</a>
          </li>
          <li className="ml-2">
            <img src={searchIcon} alt="search-icon" />
          </li>
        </ul>
      </div>
      <img src={hamburgerMenu} alt="menu-icon" className="flex lg:hidden" />
    </nav>
  );
};
