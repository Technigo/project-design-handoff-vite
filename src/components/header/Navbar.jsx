import {
  RiArrowDownSLine,
  RiCloseFill,
  RiInstagramFill,
  RiSpotifyFill,
} from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import "./Navbar.css";
import { useState } from "react";
import { HomeLink } from "./HomeLink";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={`top-navbar ${showNavbar ? "fixed" : ""}`}>
      <div className="nav-container">
        <HomeLink />
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <RiCloseFill className="icon close-icon" />
          ) : (
            <HiMenu className="icon" />
          )}
        </div>
        <div className={`nav-menu ${showNavbar && "active"}`}>
          <ul>
            <li>
              {t("navbar.nav1")} <RiArrowDownSLine className="icon" />
            </li>
            <li>
              {t("navbar.nav2")} <RiArrowDownSLine className="icon" />
            </li>
          </ul>
          <div className="social-icons">
            <RiInstagramFill className="icon" />
            <RiSpotifyFill className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};
