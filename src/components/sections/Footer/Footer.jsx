import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { useAppStore } from "../../../store/useAppStore";

export const Footer = () => {
  const setLang = useAppStore((state) => state.setLang);

  function handleChange(value) {
    setLang(value);
  }

  return (
    <footer className={styles.footer}>
      <select name="lang" onChange={(e) => handleChange(e.target.value)}>
        <option>Language &emsp;🇬🇧</option>
        <option value="en">English &emsp;🇬🇧</option>
        <option value="sv">Svenska &emsp;🇸🇪</option>
        <option value="es">Español &emsp;🇪🇸</option>
      </select>
      <div className={styles.footer_under}>
        <div className={styles.footer_under_left}>
          <Link href="/">About</Link>
          <a href="#">Careers</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookies</a>
        </div>
        <div className={styles.footer_under_right}>
          <Link to="/contact">Contact us</Link>
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
