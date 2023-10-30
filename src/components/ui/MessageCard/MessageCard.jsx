import { Button } from "../Button/Button";
import { Title } from "../Title";
import styles from "./MessageCard.module.scss";

export const MessageCard = ({ title, text, buttonText, border = false, center = false }) => {
  return (
    <div className={`${styles.card} ${border ? styles.border : ""} ${center ? styles.center : ""}`}>
      <Title>{title}</Title>
      <div className={styles.card_text}>
        <p>{text}</p>
      </div>
      <Button>{buttonText}</Button>
    </div>
  );
};
