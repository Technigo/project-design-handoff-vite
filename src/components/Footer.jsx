import "./footer.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PText } from "./Typography/PText";

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <footer>
      <div className="footer-wrapper">
        <Link to="/contact" className="footer-link">
        <PText className="brown-text" text={t("footer.footerLink1")} />
        </Link>
        <a href="#" className="footer-anchor" target="_blank" rel="noopener noreferrer">
          <PText className="brown-text" text={t("footer.footerLink2")} />
        </a>
        <div className="language-wrapper">
          <button onClick={() => changeLanguage("en")}><PText text={t("footer.footerLink3")} /></button>
          <button onClick={() => changeLanguage("se")}><PText text={t("footer.footerLink4")} /></button>
        </div>
      </div>
    </footer>
  );
};

