import styles from "./Pagination.module.scss";

export const Pagination = () => {
  return (
    <div className={styles.box}>
      <img src="/icons/right-paw.svg" className={styles.left_paw} />
      <img src="/icons/cat-left.svg" className={styles.left_cat} />
      <div className={styles.dots_box}>
        <span className={styles.dots}> </span>
        <span className={styles.dots}></span>
        <span className={styles.dots}></span>
      </div>
      <img src="/icons/cat-right.svg" className={styles.right_cat} />
      <img src="/icons/right-paw.svg" className={styles.right_paw} />
    </div>
  );
};
