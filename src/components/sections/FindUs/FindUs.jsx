import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./FindUs.module.scss";
import { content as data } from "../../../statics/content";

export const FindUs = () => {
  return (
    <section className={styles.findUs}>
      <div className={styles.findUs_inner}>
        <img src="/photos/Globe.svg" />
        <div className={styles.text}>
          <MessageCard
            text={data.findus.text}
            title={data.findus.title}
            buttonText={data.findus.button}
            bgWhite={true}
          />
        </div>
      </div>
    </section>
  );
};
