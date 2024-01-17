import { Link } from "react-router-dom";
import "./Navbar.css";
import "../translations";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "sv" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header>
      <nav className="navbar">
        <img src="MAGNB.png" alt="Company Logo" />
        <div className="navbar-buttons">
          <Link to="/about">
            <button>{t("about")}</button>
          </Link>
          <Link to="/membership">
            <button>{t("membership")}</button>
          </Link>
          <Link to="/facilities">
            <button>{t("facilities")}</button>
          </Link>
          <Link to="/opening-hours">
            <button>{t("openinghours")}</button>
          </Link>
          <button className="sign-in-button">{t("signIn")}</button>
          <button onClick={toggleLanguage}>Swedish/English</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
