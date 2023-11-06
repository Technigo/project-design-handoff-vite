import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react"
import map from "../../public/assets/map.png";
import mapPin from "../../public/assets/mapPin.svg";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./Footer.css";

export const Footer = () => {

    const [language, setLanguage] = useState("en")
    const { t, i18n } = useTranslation();

    // function to change the language
    const changeLanguageFunc = (lng) => {
        i18n.changeLanguage(lng);
    };

    const englishFunc = () => changeLanguageFunc("en");
    const swedishFunc = () => changeLanguageFunc("se");

    useEffect(() => {
      setLanguage(i18n.language);
    }, [i18n.language])

    const getFlagClass = (lng) => {
      switch (lng) {
        case "en": 
          return "fi-gb";
        case "se":
          return "fi-se";
        default:
          return "";
      }
    };

    return (
        <footer>
            <div className="footer-wrapper">
                <h2>{t("footer.heading")}</h2>
                <div className="map-with-pin-wrapper">
                    <img className="map" src={map} alt="A map." />
                    <img className="pin-icon" src={mapPin} alt="A map pin." />
                </div>
                <p>{t("footer.address")}</p>

                <p className="p-bold">{t("footer.contact.heading")}</p>
                <p>{t("footer.contact.mobile")}</p>
                <p>{t("footer.contact.email")}</p>

                <p className="p-bold">{t("footer.language.heading")}</p>
                <div className="dropdown">
                    <button className="dropbtn"><span className={`fib ${getFlagClass(language)}`} />{t(`footer.language.${language}`)}</button>
                    <div className="dropdown-content">
                        <span onClick={englishFunc}>
                            <span className="fib fi-gb" />
                            {t("footer.language.en")}
                        </span>
                        <span onClick={swedishFunc}>
                            <span className="fib fi-se" />
                            {t("footer.language.se")}
                        </span>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>{t("footer.copyright")}</p>
            </div>
        </footer>
    );
};
