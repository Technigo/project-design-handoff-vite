import styles from "./ClassesSection.module.css";

export const ClassesSection = () => {
  return (
    <>
      <div>
        <h2 className={styles.classesHeader}>Classes</h2>
      </div>
      <div className={styles.classesContainer}>
        <div className={styles.classesBox}>
          <img src="\assets\classes-img1.png" />
          <p>CARDIO + STRENGTH</p>
        </div>
        <div className={styles.classesBox}>
          <img src="\assets\classes-img2.png" />
          <p>YOGA</p>
        </div>
        <div className={styles.classesBox}>
          <img src="\assets\classes-img3.png" /> <p>SLOW FLOW DANCE</p>
        </div>
        <div className={styles.classesBox}>
          <img src="\assets\classes-img4.png" /> <p>BREATHWORK</p>
        </div>
      </div>
    </>
  );
};
