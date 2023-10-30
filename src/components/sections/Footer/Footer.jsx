import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <select name="lang">
        <option>Language &emsp;🇬🇧</option>
        <option value="en">English &emsp;🇬🇧</option>
        <option value="sv">Svenska &emsp;🇸🇪</option>
        <option value="es">Español &emsp;🇪🇸</option>
      </select>
      <div className={styles.footer_under}>
        <div className={styles.footer_under_left}>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookies</a>
        </div>
        <div className={styles.footer_under_right}>
          <a href="#">Contact us</a>
          <div className={styles.icons}>
            <a href="#">
              <img src="/icons/social/facebook.svg" />
            </a>
            <a href="#">
              <img src="/icons/social/twitter.svg" />
            </a>
            <a href="#">
              <img src="/icons/social/instagram.svg" />
            </a>
            <a href="#">
              <img src="/icons/social/linkedin.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
