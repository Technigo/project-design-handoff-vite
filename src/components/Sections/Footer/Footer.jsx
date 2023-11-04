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
              <a className={styles.footerNav} href="/">
                LANGUAGE
              </a>
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
