import { Button } from "../Button/Button";
import styles from "./Form.module.scss";

export const Form = ({ formData }) => {
  const { id, question, placeholder, button, type, name } = formData;

  return (
    <div className={styles.card}>
      <p>{question}</p>
      {type === "input" ? (
        <input type="text" placeholder={placeholder} />
      ) : type === "text" ? (
        <textarea placeholder={placeholder} />
      ) : (
        ""
      )}
      <Button type={type === "submit" ? "submit" : "button"}>{button}</Button>
    </div>
  );
};
