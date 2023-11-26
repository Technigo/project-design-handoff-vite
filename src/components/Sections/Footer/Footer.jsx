import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerBox}>
          <button
            className={styles.footerButton}
            style={{ color: "white", backgroundColor: "black" }}
          >
            F
          </button>
        </div>
        <div className={styles.footerBox}>
          <h2>
            Where
            <span className={styles.pBold}> Serenity</span>
          </h2>
          <h2>
            Meets
            <span className={styles.pBold}> Stretch</span>!
          </h2>
        </div>
        <div className={styles.footerBox}>
          <p>Our Classes</p>
        </div>
        <div className={styles.footerBox}>
          <p>Schedule</p>
        </div>
        <div className={styles.footerBox}>
          <p>Events</p>
        </div>
        <div className={styles.footerBox}>
          <p>Blog</p>
        </div>
        <div className={styles.footerBox}>
          <p>Terms</p>
        </div>
        <div className={styles.footerBox}>
          <p>Conditions</p>
        </div>
        <div className={styles.footerBox}>
          <p>Sign Up</p>
        </div>
        <div className={styles.footerBox}>
          <p>Log in</p>
        </div>
        <div className={styles.footerBox}>
          <p>EN | DE</p>
        </div>
        <div className={styles.footerBox}>
          <p>
            <img src="./assets/social.png" />
          </p>
        </div>
      </div>
    </>
  );
};
