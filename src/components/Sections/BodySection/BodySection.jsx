import styles from "./BodySection.module.css";
import { Button } from "../../ui/Button/Button";

export const BodySection = () => {
  return (
    <>
      <div className={styles.classesContainer}>
        <div className={styles.classesBox}>
          <p className={styles.subHeading}>
            Bend, Breathe, Blossom. Our experienced instructors make yoga
            accessible and enjoyable for all levels
            <p>
              <Button />
            </p>
          </p>
        </div>
        <div className={styles.classesBox}>
          <img src="\assets\1st.png" />
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
