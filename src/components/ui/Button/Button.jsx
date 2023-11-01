import styles from "./Button.module.scss";

export const Button = ({ children, handleClick = null, type = "button" }) => {
  return (
    <button className={styles.button} onClick={handleClick} onTouchStart={handleClick} type={type}>
      <p>{children}</p>
    </button>
  );
};
