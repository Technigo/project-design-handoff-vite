import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./AboutContact.module.scss";
import { content, address as addressData } from "../../../statics/content";
import { AddressCard } from "../../ui/AddressCard/AddressCard";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";
import { useAppStore } from "../../../store/useAppStore";
import { Modal } from "../../ui/Modal";

export const AboutContact = () => {
  const lang = useAppStore((state) => state.lang);
  const modalVisible = useAppStore((state) => state.modalVisible);
  const openModal = useAppStore((state) => state.openModal);
  const data = content.aboutContact[lang];

  return (
    <>
      {modalVisible && <Modal />}
      <ObserverWrapper>
        <section className={styles.contact}>
          <div className={styles.text_wrapper}>
            <div className={styles.text_box}>
              <MessageCard
                title={data.title}
                text={data.text}
                buttonText={data.button}
                alwCenter={true}
                handleClick={openModal}
              />
            </div>
          </div>
          <div className={styles.address_box}>
            {addressData[lang].map((address) => (
              <AddressCard
                address={address}
                key={address.address}
                h6={lang === "en" ? "Address" : "Direccion"}
              />
            ))}
          </div>
        </section>
      </ObserverWrapper>
    </>
  );
};
