import styles from "./Modal.module.scss";

import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useAppStore } from "../../../store/useAppStore";
import { formQuestion as formData } from "../../../statics/formQuestion";

export const Modal = () => {
  const { closeModal, changeFormIndex, currentFormIndex, submitForm } = useAppStore((state) => ({
    closeModal: state.closeModal,
    changeFormIndex: state.changeFormIndex,
    currentFormIndex: state.currentFormIndex,
    submitForm: state.submitForm,
  }));

  const currentFormdata = formData[currentFormIndex];
  const { question, type, button, placeholder, message, name } = currentFormdata;

  return (
    <>
      <div className={styles.modal} onClick={closeModal} onTouchStart={closeModal}></div>
      <div className={styles.modal_inner}>
        <div className={styles.card}>
          {type === "submit" ? <p className={styles.thankYou}>{question}</p> : <p>{question}</p>}

          <Form placeholder={placeholder} type={type} name={name} />

          <Button
            key="form"
            type={type === "submit" ? "submit" : "button"}
            handleClick={type === "submit" ? submitForm : changeFormIndex}
          >
            {button}
          </Button>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    </>
  );
};
