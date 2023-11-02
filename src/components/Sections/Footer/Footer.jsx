import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBoxLeft}>
            <div className={styles.footerBoxLeftRow}>
              <img src="" />
            </div>
            <div className={styles.footerBoxLeftRow}>
              LANGUAGE FAQ TERMS AND CONDITIONS CONTACT US
            </div>
          </div>
          <img src="/assets/icon-facebook.svg" alt="" />
          <img src="/assets/icon-instagram.svg" alt="" />
        </div>
      </div>
    </>
  );
};
