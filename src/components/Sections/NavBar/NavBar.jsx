import styles from "./NavBar.module.css";
import { Button } from "../../ui/Button/Button";

export const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>
          <a href="/">
            <img
              className={styles.logo}
              src="/assets/logo-white.png"
              alt="Sheness studio logo"
            />
          </a>
        </div>
        <div className={styles.navMenu}>
          <a className={styles.navMenuOption} href="/">
            <Button buttonName="Flow Yoga"></Button>
          </a>
          <a className={styles.navMenuOption} href="/">
            Our Classes
          </a>
          <a className={styles.navMenuOption} href="/">
            Schedule
          </a>
          <a className={styles.navMenuOption} href="/">
            Events
          </a>
          <a className={styles.navMenuOption} href="/">
            Blog
          </a>
          <a className={styles.navMenuOption} href="/">
            <Button buttonName="Join!"></Button>
          </a>
          <a className={styles.navMenuOption} href="/">
            <Button buttonName="Log in"></Button>
          </a>
        </div>
        <div className={styles.hamburgerMenu}>
          <img src="/assets/hamburger.png" alt="hamburger menu" />
        </div>
      </nav>
    </div>
  );
};
