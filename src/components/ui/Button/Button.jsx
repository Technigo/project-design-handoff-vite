import styles from "./Button.module.scss";

export const Button = ({ children }) => {
  return (
    <button className={styles.button}>
      <p>{children}</p>
    </button>
  );
};
