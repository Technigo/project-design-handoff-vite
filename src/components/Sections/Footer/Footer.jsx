import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Footer = () => {
  const { t, i18n } = useTranslation();

  //function to change the language
  const changeLanguageFunc = (lng) => {
    i18n.changeLanguage(lng);
  };

  const englishFunc = () => changeLanguageFunc("en");
  const deutschFunc = () => changeLanguageFunc("de");

  const [language, setLanguage] = useState("dn"); // Default language is English

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerBox}>
          <button
            className={styles.footerButton}
            style={{ color: "white", backgroundColor: "black" }}
          >
            F
          </button>
        </div>
        <div className={styles.footerBox}>
          <h2>{t("homePage.footer.header1")}</h2>
          <h2>{t("homePage.footer.header2")}</h2>
        </div>
        <div className={styles.footerBox}>
          <p> {t("homePage.footer.ourClasses")}</p>
        </div>
        <div className={styles.footerBox}>
          <p> {t("homePage.footer.schedule")}</p>
        </div>
        <div className={styles.footerBox}>
          <p> {t("homePage.footer.events")}</p>
        </div>
        <div className={styles.footerBox}>
          <p> {t("homePage.footer.blog")}</p>
        </div>
        <div className={styles.footerBox}>
          <p> {t("homePage.footer.terms")}</p>
        </div>
        <div className={styles.footerBox}>
          <p> {t("homePage.footer.conditions")}</p>
        </div>
        <div className={styles.footerBox}>
          <p> {t("homePage.footer.signUp")}</p>
        </div>
        <div className={styles.footerBox}>
          <p> {t("homePage.footer.logIn")}</p>
        </div>
        <div className={styles.footerBox}>
          <div className={styles.internationalisationWwrapper}>
            <button onClick={englishFunc}>
              <img src="./assets/en-icon.png" />
            </button>
            <button onClick={deutschFunc}>
              <img src="./assets/de-icon.png" />
            </button>
          </div>
        </div>
        <div className={styles.footerBox}>
          <p>
            <img src="./assets/social.png" />
          </p>
        </div>
      </div>
    </>
  );
};
