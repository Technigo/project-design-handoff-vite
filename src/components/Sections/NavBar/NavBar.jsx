import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav className={`${styles.navbar}`}>
        <a href="#home" className={`${styles.logo}`}>
          <img className={styles.logo} src="/assets/logo.png" />
        </a>

        <ul className={styles.navMenu}>
          <li>
            <a href="#home">Classes </a>
          </li>
          <li>
            <a href="#home">About Us </a>
          </li>
          <li>
            <a href="#home">Shop </a>
          </li>
          <li>
            <a href="#home">Log in </a>
          </li>
          <li>
            <a href="#home">sign up button</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
