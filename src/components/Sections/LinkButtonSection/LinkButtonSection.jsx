import styles from "./LinkButtonSection.module.css";

export const LinkButtonSection = () => {
  return (
    <>
      <div className={styles.linkButtonContainer}>
        <div className={styles.linkButtonBox}>
          <button>Sign Up</button>
        </div>
        <div className={styles.linkButtonBox}>
          <button>Try a Class</button>
        </div>
      </div>
      ;
    </>
  );
};
