import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <img className={styles.logo} src="/assets/logo-blue-sml.png" />
            </div>
            <div className={styles.footerNavs}>
              <div className={styles.langDropdown}>
                <a className={styles.droppDownToggle} href="/">
                  LANGUAGE
                </a>
                <div className={styles.langDropdownMenu}>
                  <a href="#">EN</a>
                  <a href="#">SE</a>
                </div>
              </div>
              <a className={styles.footerNav} href="/">
                FAQ
              </a>
              <a className={styles.footerNav} href="/">
                TERMS AND CONDITIONS
              </a>
              <a className={styles.footerNav} href="/">
                CONTACT US
              </a>
            </div>
          </div>
          <div className={styles.foooterSocials}>
            <img src="/assets/icon-facebook.svg" alt="" />
            <img src="/assets/icon-instagram.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
