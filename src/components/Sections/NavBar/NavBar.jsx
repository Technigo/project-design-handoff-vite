import styles from "./NavBar.module.css";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navBar}>
          <div className={styles.navItem}>
            <Button buttonName="Flow Yoga" />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navItemMiddle}>
              <a>Our Classes</a>
            </div>
            <div className={styles.navItemMiddle}>
              <a>Schedule</a>
            </div>
            <div className={styles.navItemMiddle}>
              <Link to={`/events`}>
                <a>Events</a>
              </Link>
            </div>
            <div className={styles.navItemMiddle}>
              <a>Blog</a>
            </div>
          </div>
          <div className={styles.navItem}>
            <Button buttonName="Join!" />
            <Button buttonName="Log in" />
          </div>
        </div>
      </div>
      <div className={styles.burgerMenu}>
        <img src="./assets/header-frame.png" />
      </div>
    </>
  );
};
