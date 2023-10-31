import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./Member.module.scss";
import { content as data } from "../../../statics/content";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";

export const Member = () => {
  return (
    <section className={styles.member}>
      <ObserverWrapper>
        <div className={styles.text}>
          <MessageCard
            text={data.member.text}
            title={data.member.title}
            buttonText={data.member.button}
          />
        </div>
      </ObserverWrapper>
    </section>
  );
};
