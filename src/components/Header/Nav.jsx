import hamburgerMenu from "/icon-hamburger.svg";
import logoStudioMama from "/logo-studio-mama.svg";
import { useState } from "react";

export const Nav = () => {
  const [navlist, setNavlist] = useState(true);
  const handleNavlist = () => {
    setNavlist((prevNavlist) => !prevNavlist);
  };
  return (
    <nav className="absolute bg-transparent p-4 flex justify-between items-center w-full md:bg-peach md:relative ">
      <div>
        <img
          src={logoStudioMama}
          alt="Studio Mama Logo"
          className=" w-28 md:w-44 2xl:w-80"
        />
      </div>

      <div className="mobile-nav">
        <img src={hamburgerMenu} alt="Nav menu" onClick={handleNavlist} />
      </div>
      {!navlist && (
        <ul className="navigation">
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href="#om">Om Studio Mama</a>
          </li>
          <li>
            <a href="#logga-in">Logga in</a>
          </li>
        </ul>
      )}
    </nav>
  );
};
