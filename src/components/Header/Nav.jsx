import hamburgerMenu from "/icon-hamburger.svg";
import logoStudioMama from "/logo-studio-mama.svg";
import { useState } from "react";

export const Nav = () => {
  const [navlist, setNavlist] = useState(true);
  const handleNavlist = () => {
    setNavlist((prevNavlist) => !prevNavlist);
  };
  return (
    <nav className="absolute backdrop-blur-sm p-4 z-[99] flex justify-between items-center w-full md:relative md:items-end md:p-8 md:h-24 2xl:h-36 2xl:max-w-7xl 2xl:m-auto">
      <div>
        <img
          src={logoStudioMama}
          alt="Studio Mama Logo"
          className="absolute top-4 w-28 md:w-44 md:top-5 2xl:w-80 2xl:top-10 "
        />
      </div>

      <div className="2xl:hidden">
        <img src={hamburgerMenu} alt="Nav menu" onClick={handleNavlist} />
      </div>
      <div className="hidden 2xl:inline-flex">
        <ul className="2xl:inline-flex p-4 gap-11">
          <li>
            <a className="font-inter text-lg" href="#program">
              Program
            </a>
          </li>
          <li>
            <a className="font-inter text-lg" href="#om">
              Om Studio Mama
            </a>
          </li>
          <li>
            <a className="font-inter text-lg" href="#logga-in">
              Logga in
            </a>
          </li>
        </ul>
      </div>
      {!navlist && (
        <ul className="z-[110] md:bg-amber absolute inset-y-28 w-210 inset-x-1/2 justify-center
         text-left align-center 2xl:inline-flex">
          <li>
            <a className="font-inter text-lg hover:font-medium text-darkBlue " href="#program">Program</a>
          </li>
          <li>
            <a className="font-inter text-lg hover:font-medium text-darkBlue " href="#om">Om Studio Mama</a>
          </li>
          <li>
            <a className="font-inter text-lg hover:font-medium text-darkBlue " href="#logga-in">Logga in</a>
          </li>
        </ul>
      )}
    </nav>
  );
};
