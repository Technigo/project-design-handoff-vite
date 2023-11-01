import styles from "./Modal.module.scss";
import { Form } from "../Form/Form";
import { useAppStore } from "../../../store/useAppStore";
import { formQuestion as data } from "../../../statics/formQuestion";

export const Modal = () => {
  const closeModal = useAppStore((state) => state.closeModal);

  function createForm() {
    if (data[index].type === "input") return <input type="text" placeholder={placeholder} />;
  }
  return (
    <div className={styles.modal} onClick={closeModal} onTouchStart={closeModal}>
      <Form />
    </div>
  );
};
