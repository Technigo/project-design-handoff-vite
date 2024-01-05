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
        {/* <div className={styles.hamMenu}>
            <a>{t("navBar.ourClasses")}</a>
            <a>{t("navBar.schedule")}</a>
            <Link to={`/events`}>
              <a>{t("navBar.events")}</a>
            </Link>
            <a>{t("navBar.blog")}</a>
            <a>{t("homePage.hero.buttonJoin")}</a>
          </div> */}
        <div className={styles.hamburgerNav}>
          <button
            className={styles.headerButton}
            style={{ color: "white", backgroundColor: "black" }}
          >
            F
          </button>
          <img src="./assets/ham.png" alt="Menu" />
        </div>
        <div className={styles.desktopNav}>
          <Link className={styles.link} to={`/`}>
            <Button buttonName="FLOW YOGA" className="blackButton" />
          </Link>
          <div className={styles.navItemMiddle}>
            <a className={styles.navLink}>{t("navBar.ourClasses")}</a>
            <a className={styles.navLink}>{t("navBar.schedule")}</a>
            <Link className={styles.link} to={`/events`}>
              <a className={styles.navLink}>{t("navBar.events")}</a>
            </Link>
            <a className={styles.navLink}>{t("navBar.blog")}</a>
          </div>
          <div className={styles.ItemEnd}>
            <Button buttonName="Join!" className="blackButton" />
            <Button buttonName="Log in" className="whiteButton" />
          </div>
        </div>
      </div>
    </>
  );
};
