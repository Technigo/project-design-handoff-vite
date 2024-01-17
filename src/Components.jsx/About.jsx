import "./About.css";
import { VisitUs } from "./VisitUs";
import { Link } from "react-router-dom";
import "../translations";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t, i18n } = useTranslation();
  //When the home button is clicked, this function kicks in
  const handleBack = () => {
    navigate(-1);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "sv" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <ul className="buttons">
        <Link to="/" className="home-button"></Link>
        <div className="navbar-buttons">
          <button onClick={() => (window.location.href = "/membership")}>
            {t("membership")}
          </button>
          <button onClick={() => (window.location.href = "/facilities")}>
            {t("facilities")}
          </button>
          <button onClick={() => (window.location.href = "/opening-hours")}>
            {t("openinghours")}
          </button>

          <button className="sign-in-button">{t("signIn")}</button>
          <button onClick={toggleLanguage}>Swedish/English</button>
        </div>
      </ul>
      <div className="about">
        <div className="left-column">
          <h1 className="what-we-do">{t("aboutTitle")}</h1>
          <h2 className="background">{t("aboutSubTitle")}</h2>
          <div className="first-text">
            <p>{t("aboutText")}</p>
          </div>
        </div>
        <div className="line-column">
          <img className="line" src="Line2.png" alt="line" />
        </div>
        <div className="right-column">
          <div className="about-text">
            <p>{t("longAboutFirst")}</p>
            <p>{t("longAboutSecond")}</p>
          </div>
        </div>
      </div>
      <VisitUs />
    </div>
  );
};
