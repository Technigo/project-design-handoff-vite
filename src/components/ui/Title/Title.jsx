import styles from "./Title.module.scss";

export const Title = ({ children }) => {
  return <h3 className={styles.h3}>{children}</h3>;
};
