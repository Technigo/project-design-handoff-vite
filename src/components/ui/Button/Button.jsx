import styles from "./Button.module.css";

export const Button = ({ buttonName, className }) => {
  const buttonClass = `${styles.button} ${
    className === "blackButton" ? styles.buttonBlack : ""
  } ${className === "whiteButton" ? styles.buttonWhite : ""}`;

  return (
    <button className={buttonClass} type="button">
      {buttonName}
    </button>
  );
};
