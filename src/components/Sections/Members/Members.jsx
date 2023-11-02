import styles from "./Members.module.css";
import { Button } from "../../ui/Button/Button";

export const Members = () => {
  return (
    <>
      <div className={styles.membersSection}>
        <h2 className={styles.quoteHeading}>
          What our members think <img src="/assets/grey-heart.svg" />
        </h2>
        <div className={styles.membersContainer}>
          <div className={styles.membersBox}>
            ‘’The trainers are the best I have ever met. Attentive and
            motivating. I want to be pregnant all the time so I can train with
            them.’’ -Mona, 29
          </div>
          <div className={styles.membersBox}>
            ‘’Without Sheness Studios i would not been comfortable by continuing
            my training trought my pregnancy.’’ -Ellen, 27
          </div>
          <div className={styles.membersBox}>
            ‘’A lifesaver for expecting moms, they helped me find my strength
            within in a time when my body was changing fast.’’ -Sara, 36
          </div>
        </div>
        <div className={styles.linkButtonContainer}>
          <div className={styles.linkButtonBox}>
            <Button buttonName="SIGN UP"></Button>
          </div>
          <div className={styles.linkButtonBox}>
            <Button buttonName="TRY A CLASS"></Button>
          </div>
        </div>
      </div>
    </>
  );
};
