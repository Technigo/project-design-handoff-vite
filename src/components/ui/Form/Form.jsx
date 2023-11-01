import { useAppStore } from "../../../store/useAppStore";
import styles from "./Form.module.scss";

export const Form = ({ type, placeholder, name }) => {
  const { setFormAnswer, formAnswer } = useAppStore((state) => ({
    setFormAnswer: state.setFormAnswer,
    formAnswer: state.formAnswer,
  }));

  function handleChange(e) {
    setFormAnswer(name, e.target.value);
  }

  return (
    <>
      {type === "input" ? (
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          name={name}
          value={formAnswer[name]}
          onChange={(e) => handleChange(e)}
        />
      ) : type === "text" ? (
        <textarea
          placeholder={placeholder}
          value={formAnswer[name]}
          onChange={(e) => handleChange(e)}
          className={styles.text}
        />
      ) : (
        ""
      )}
    </>
  );
};
