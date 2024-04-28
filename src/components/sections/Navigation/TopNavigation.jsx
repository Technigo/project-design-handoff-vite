import logo from "/assets/logo/logo-desktop.svg";
import { Button } from "../../styles/Button";
import {
  SearchIcon,
  BurgerIcon,
  BurgerClosingIcon,
} from "../../../assets/Icons";

import { Image } from "../../styles/Image";
import { MainNavigation } from "./MainNavigation";
import { Burger } from "./Burger";
import { useState } from "react";

export const TopNavigation = () => {
  const [active, setActive] = useState(false);

  // Function that will toggle the burger menu
  const handleBurger = () => {
    setActive(!active);
  };

  return (
    <header className="bg-white top-navigation flex justify-between items-center px-20 md:px-66 py-15 md:py-20 lg:bg-cyan-500 w-full max-w-1440 z-50 relative">
      <Image
        src={logo}
        alt="Crossfit Mamas Logo"
        className="md:w-20 w-12 sm:w-16"
      />
      <nav className="navbar items-center px-12 flex">
        {/* Main Navigation */}
        <MainNavigation />

        {/* Search Icon */}
        <div className="mx-10 hidden md:flex">
          <SearchIcon />
        </div>

        {/* Log in */}
        <Button
          className="log_in-btn bg-crimson-light active:bg-plum-light hover:bg-terracotta items-center justify-center text-[25px] hidden md:flex w-32 h-10"
          label={"log in"}
        />

        {/* Burger Menu */}
        <div className="md:hidden cursor-pointer" onClick={handleBurger}>
          {!active ? (
            <BurgerIcon alt="Burger Icon" />
          ) : (
            <>
              <BurgerClosingIcon alt="Burger Icon" />
              <Burger />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
