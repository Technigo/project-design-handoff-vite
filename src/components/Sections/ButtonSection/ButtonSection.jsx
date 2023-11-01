import styles from "./ButtonSection.module.css";

export const ButtonSection = () => {
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
