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
            <a
              href="https://www.instagram.com/inkapetrarebecca/"
              target="_blank"
            >
              <RiInstagramFill className="icon" />
            </a>
            <a
              href="https://open.spotify.com/user/eer0ds8nf29bby3op5iil4rxn?si=f4e01785b6b84794&nd=1"
              target="_blank"
            >
              <RiSpotifyFill className="icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
