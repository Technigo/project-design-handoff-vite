import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./AboutContact.module.scss";
import { content as data, address as addressData } from "../../../statics/content";
import { AddressCard } from "../../ui/AddressCard/AddressCard";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";
import { useAppStore } from "../../../store/useAppStore";
import { Modal } from "../../ui/Modal";

export const AboutContact = () => {
  const modalVisible = useAppStore((state) => state.modalVisible);
  const openModal = useAppStore((state) => state.openModal);
  console.log(openModal, modalVisible);
  return (
    <>
      {modalVisible && <Modal />}
      <ObserverWrapper>
        <section className={styles.contact}>
          <div className={styles.text_wrapper}>
            <div className={styles.text_box}>
              <MessageCard
                title={data.aboutContact.title}
                text={data.aboutContact.text}
                buttonText={data.aboutContact.button}
                alwCenter={true}
                handleClick={openModal}
              />
            </div>
          </div>
          <div className={styles.address_box}>
            {addressData.map((address) => (
              <AddressCard address={address.address} key={address.address} />
            ))}
          </div>
        </section>
      </ObserverWrapper>
    </>
  );
};
