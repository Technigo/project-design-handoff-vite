import styles from "./BodySection.module.css";

export const BodySection = () => {
  return (
    <>
      <div>
        <h2 className={styles.classesHeader}>Classes</h2>
      </div>
      <div className={styles.classesContainer}>
        <div className={styles.classesBox}>
          <img src="\assets\classes-img1.png" />
          <p className={styles.subHeading}>CARDIO + STRENGTH</p>
        </div>
        <div className={styles.classesBox}>
          <img src="\assets\classes-img2.png" />
          <p className={styles.subHeading}>YOGA</p>
        </div>
        <div className={styles.classesBox}>
          <img src="\assets\classes-img3.png" />{" "}
          <p className={styles.subHeading}>SLOW FLOW DANCE</p>
        </div>
        <div className={styles.classesBox}>
          <img src="\assets\classes-img4.png" />{" "}
          <p className={styles.subHeading}>BREATHWORK</p>
        </div>
      </div>
    </>
  );
};
