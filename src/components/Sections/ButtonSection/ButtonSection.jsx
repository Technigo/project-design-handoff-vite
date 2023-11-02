import styles from "./ButtonSection.module.css";
import { Button } from "../../ui/Button/Button";

export const ButtonSection = () => {
  return (
    <>
      <div className={styles.linkButtonContainer}>
        <div className={styles.linkButtonBox}>
          <Button buttonName="SIGN UP"></Button>
        </div>
        <div className={styles.linkButtonBox}>
          <Button buttonName="TRY A CLASS"></Button>
        </div>
      </div>
    </>
  );
};
