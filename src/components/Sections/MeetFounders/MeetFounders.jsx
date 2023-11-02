import styles from "./MeetFounders.module.css";

export const MeetFounders = () => {
  return (
    <>
      <div className={styles.meetSection}>
        <div className={styles.meetContainer}>
          <div className={styles.meetBoxLeft}>
            <img src="/assets/founders-img.png" />
            <p>Lisa - Nicole - Anna - Miriam</p>
            <h2>Meet our founders and coaches &#x3e; </h2>
          </div>
          <div className={styles.meetBoxRight}>
            <div className={styles.meetBoxRightRow}>
              <img src="/assets/meet-top.png" />
            </div>
            <div className={styles.meetBoxRightRow}>
              {" "}
              <img src="/assets/meet-middle.png" />
            </div>
            <div className={styles.meetBoxRightRow}>
              {" "}
              <img src="/assets/meet-bottom.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
