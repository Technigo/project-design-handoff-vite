import hamburgerMenu from "/icon-hamburger.svg";
import logoStudioMama from "/logo-studio-mama.svg";
import { useState } from "react";

export const Nav = () => {
  const [navlist, setNavlist] = useState(true);
  const handleNavlist = () => {
    setNavlist((prevNavlist) => !prevNavlist);
  };
  return (
    <nav className=" bg-transparent md:bg-peach">
      <div className=" ">
        <img src={logoStudioMama} alt="Studio Mama Logo" />
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
