import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./Member.module.scss";
import { content as data } from "../../../statics/content";

export const Member = () => {
  return (
    <section className={styles.member}>
      <div className={styles.text}>
        <MessageCard
          text={data.member.text}
          title={data.member.title}
          buttonText={data.member.button}
        />
      </div>
    </section>
  );
};
