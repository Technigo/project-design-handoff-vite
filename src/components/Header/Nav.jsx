import hamburgerMenu from "/icon-hamburger.svg";
import logoStudioMama from "/logo-studio-mama.svg";
import { useState } from "react";

export const Nav = () => {
   // State to manage the visibility of the navlist
  const [navlistVisible, setNavlistVisible] = useState(false);
  
  // Function to toggle the visibility of the navlist
  const toggleNavlist = () => {
    setNavlistVisible((prevNavlistVisible) => !prevNavlistVisible);
  };

  return (
    <nav className="absolute backdrop-blur-sm p-4 z-50 flex justify-between items-center w-full md:relative md:items-end md:p-8 md:h-24 2xl:h-36 2xl:max-w-7xl 2xl:m-auto">
      <div>
        <img
          src={logoStudioMama}
          alt="Studio Mama Logo"
          className="absolute top-4 w-28 md:w-44 md:top-5 2xl:w-80 2xl:top-10 "
        />
      </div>

 {/* Hamburger Menu Button for Mobile */}
      <div className="2xl:hidden">
        <img src={hamburgerMenu} alt="Nav menu" className="absolute right-6 top-6 md:top-10 md:right-8 cursor-pointer" onClick={toggleNavlist} />
      </div>

   {/* Navlist for larger devices */}
      <div className="hidden 2xl:inline-flex">
        <ul className="2xl:inline-flex p-4 gap-11">
          <li>
            <a className="font-inter text-lg text-darkBlue" href="#program">
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

 {/* Navlist for Mobile & Tablet - Hidden by Default */}
      {navlistVisible && (
        <ul className="bg-peach w-full text-darkBlue text-sm py-14 absolute top-20 right-0 text-center md:top-24">
          <li className="py-2">
            <a className="font-inter hover:font-medium" href="#program">Program</a>
          </li>
          <li className="py-2">
            <a className="font-inter hover:font-medium" href="#om">Om Studio Mama</a>
          </li>
          <li className="py-2">
            <a className="font-inter hover:font-medium " href="#logga-in">Logga in</a>
          </li>
        </ul>
      )}
    </nav>
  );
};
