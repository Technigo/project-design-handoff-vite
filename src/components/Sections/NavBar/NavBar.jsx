import styles from "./NavBar.module.css";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.hamburgerNav}>
          <button
            className={styles.headerButton}
            style={{ color: "white", backgroundColor: "black" }}
          >
            F
          </button>
          <img src="./assets/ham.png" alt="Menu" />
          <div className={styles.hamMenu}>
            <a>{t("navBar.ourClasses")}</a>
            <a>{t("navBar.schedule")}</a>
            <Link to={`/events`}>
              <a>{t("navBar.events")}</a>
            </Link>
            <a>{t("navBar.blog")}</a>
            <a>{t("homePage.hero.buttonJoin")}</a>
          </div>
        </div>
        <div className={styles.desktopNav}>
          <div className={styles.navItem}>
            <Button buttonName="Flow Yoga" />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navItemMiddle}>
              <a>{t("navBar.ourClasses")}</a>
            </div>
            <div className={styles.navItemMiddle}>
              <a>{t("navBar.schedule")}</a>
            </div>
            <div className={styles.navItemMiddle}>
              <Link to={`/events`}>
                <a>{t("navBar.events")}</a>
              </Link>
            </div>
            <div className={styles.navItemMiddle}>
              <a>{t("navBar.blog")}</a>
            </div>
          </div>
          <div className={styles.navItem}>
            <Button buttonName="Join!" />
            <Button buttonName="Log in" />
          </div>
        </div>
      </div>
    </>
  );
};
