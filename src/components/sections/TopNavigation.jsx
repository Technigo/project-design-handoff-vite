import { NavLink } from "react-router-dom";
import logo from "/assets/logo/logo-desktop.svg";
import { Button } from "../styles/button/Button";
import { SearchIcon, BurgerIcon } from "../../assets/Icons";

export const TopNavigation = () => {
  return (
    <header className="top-navigation flex justify-between items-center px-20 md:px-66 py-10 md:py-20 lg:bg-cyan-500 fixed w-full max-w-1440">
      <img
        src={logo}
        alt="Crossfit Mamas Logo"
        className="md:w-20 w-12 sm:w-16"
      />
      <nav className="navbar items-center px-12 flex">
        <ul className="hidden md:flex">
          <li>
            <NavLink className="px-10 text-white hover:text-grey" to="/">
              getting started
            </NavLink>
            <NavLink className="px-10 text-white hover:text-grey" to="/">
              classes
            </NavLink>
            <NavLink className="px-10 text-white hover:text-grey" to="/">
              about us
            </NavLink>
          </li>
        </ul>
        <div className="mx-10 hidden sm:flex">
          <SearchIcon />
        </div>
        <Button
          className={
            "log_in-btn bg-crimson-light active:bg-plum-light hover:bg-terracotta items-end justify-center text-[25px] hidden md:flex"
          }
          label={"log in"}
        />
        <div className="md:hidden">
          <BurgerIcon />
        </div>
      </nav>
    </header>
  );
};
