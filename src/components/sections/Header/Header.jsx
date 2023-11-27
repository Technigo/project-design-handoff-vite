import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/icons/logo-small.svg" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <div className={styles.humburger}></div>
        <div className={styles.nav_desktop}>
          <p>Join</p>
          <img src="/icons/avater.svg" />
        </div>
      </nav>
    </header>
  );
};
