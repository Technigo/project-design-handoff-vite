import styles from "./Modal.module.scss";

import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useAppStore } from "../../../store/useAppStore";
import { formQuestion as formData } from "../../../statics/formQuestion";
import { useState } from "react";

export const Modal = () => {
  const { closeModal, changeFormIndex, currentFormIndex, submitForm, lang } = useAppStore(
    (state) => ({
      closeModal: state.closeModal,
      changeFormIndex: state.changeFormIndex,
      currentFormIndex: state.currentFormIndex,
      submitForm: state.submitForm,
      lang: state.lang,
    })
  );
  const [triggerAnimation, setTiggerAnimation] = useState(0);
  const [triggerTextFade, setTiggerTextFade] = useState(0);

  const currentFormdata = formData[currentFormIndex];
  const { content, type, name, id, animation } = currentFormdata;
  const { button, message, question, placeholder } = content[lang];
  console.log(id);
  return (
    <>
      <div className={styles.modal} onClick={closeModal} onTouchStart={closeModal}></div>
      <div className={styles.modal_inner}>
        <div
          key={id}
          data-animation={id === 4 ? triggerAnimation : 0}
          className={`${styles.card} ${id === 1 || id === 4 ? styles[animation] : ""}`}
          onAnimationEnd={() => setTiggerAnimation(0)}
        >
          {type === "submit" ? <p className={styles.thankYou}>{question}</p> : <p>{question}</p>}

          <Form
            placeholder={placeholder}
            type={type}
            name={name}
            animation={id === 1 || id === 4 ? "" : animation}
            triggerAnimation={triggerTextFade}
            key={id}
          />

          <Button
            key="form"
            id={id}
            type={type === "submit" ? "submit" : "button"}
            handleClick={type === "submit" ? submitForm : changeFormIndex}
            onTriggerAnimation={id === 4 ? setTiggerAnimation : id === 3 ? setTiggerTextFade : null}
          >
            {button}
          </Button>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    </>
  );
};
