import "../components/footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  // function to change the language
  console.log("Current Language:", i18n.language);
  console.log("Translated Text:", t("footer.studio"));
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="footer-wrapper">
      <img src="../src/assets/logo/logo_phone.svg" />
      <ul>
        <div className="footer-line-one">
          <li>
            <Link to="/">{t("footer.home")}</Link>
          </li>
          <li>{t("footer.studio")}</li>
          <li>{t("footer.jobs")}</li>
        </div>
        <div className="footer-line-two">
          <li>
            <Link to="/contact">{t("footer.contact")}</Link>
          </li>
          <li>{t("footer.tnc")}</li>
          <li>{t("footer.press")}</li>
        </div>
      </ul>
      <div className="language">
        <img
          src="../src/assets/icon/sweden.png"
          alt="swedish"
          className="swedish"
          onClick={() => changeLang("sv")}
        />
        <img
          src="../src/assets/icon/uk.png"
          alt="english"
          className="english"
          onClick={() => changeLang("en")}
        />
      </div>
    </div>
  );
};
