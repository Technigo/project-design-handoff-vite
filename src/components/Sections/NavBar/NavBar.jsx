import { useState } from "react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={`${styles.navbar}`}>
        <a href="#home" className={`${styles.logo}`}>
          <img className={styles.logo} src="public\assets\logo.png" />
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
