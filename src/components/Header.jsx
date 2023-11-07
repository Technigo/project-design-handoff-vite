import "./header.css"
import HomeIcon from "../assets/icons/LogoDesktop.svg";
import InfoIcon from "../assets/icons/Lines.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { H2_Headline } from "./Typography/H2_Headline";


export const Header = () => {

  const { t } = useTranslation();

  return (
    <header>
      <div className="header-wrapper">
        <Link to="/" className="icon-home-link link">
          <img src={HomeIcon} alt="Home Icon" className="icon home-icon" />
        </Link>

        <>
          {/* Mobile: Display Info Icon and "Menu" text */}
          <Link to="/about" className="icon-about-link link mobile-only">
            <div className="icon-container">
              <img src={InfoIcon} alt="Info Icon" className="icon info-icon" />
              <p id="menu-text">{t("header.menu")}</p>
            </div>
          </Link>
          {/* Desktop and Tablet: Display "About Us" link */}
          <div className="navbar-link-wrapper">
            <a href="#" className="desktop-tablet-only"><H2_Headline h2_headline={t("header.link1")} /></a>
            <a href="#" className="desktop-tablet-only"><H2_Headline h2_headline={t("header.link2")} /></a>
            <Link to="/about" className="about-link desktop-tablet-only underlined_link">
              <H2_Headline h2_headline={t("header.link3")} />
            </Link>
            <a href="#" className="desktop-tablet-only"><H2_Headline h2_headline={t("header.link4")} /></a>
          </div>
        </>
      </div>
    </header>
  );
};



