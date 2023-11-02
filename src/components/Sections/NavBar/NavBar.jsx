import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>
          <a href="/">
            <img
              className={styles.logo}
              src="/assets/logo.png"
              alt="Sheness studio logo"
            />
          </a>
        </div>
        <div className={styles.navMenu}>
          <a className={styles.navMenuOption} href="/">
            CLASSES
          </a>
          <a className={styles.navMenuOption} href="/">
            ABOUT US
          </a>
          <a className={styles.navMenuOption} href="/">
            Shop
          </a>
          <a
            style={{ color: "#c9694d" }}
            className={styles.navMenuOption}
            href="/"
          >
            LOG IN
          </a>
          <a className={styles.navMenuOption} href="/">
            <button className={styles.signupNavButton}>SIGN UP</button>
          </a>
        </div>
        <div className={styles.hamburgerMenu}>
          <img src="/assets/hamburger.png" alt="hamburger menu" />
        </div>
      </nav>
    </div>
  );
};
