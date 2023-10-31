import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./AboutContact.module.scss";
import { content as data, address as addressData } from "../../../statics/content";
import { AddressCard } from "../../ui/AddressCard/AddressCard";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";

export const AboutContact = () => {
  return (
    <ObserverWrapper>
      <section className={styles.contact}>
        <div className={styles.text_wrapper}>
          <div className={styles.text_box}>
            <MessageCard
              title={data.aboutContact.title}
              text={data.aboutContact.text}
              buttonText={data.aboutContact.button}
              alwCenter={true}
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
  );
};
