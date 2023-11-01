import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./Member.module.scss";
import { content } from "../../../statics/content";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";
import { useAppStore } from "../../../store/useAppStore";
export const Member = () => {
  const lang = useAppStore((state) => state.lang);
  const data = content.member[lang];
  return (
    <section className={styles.member}>
      <ObserverWrapper>
        <div className={styles.text}>
          <MessageCard text={data.text} title={data.title} buttonText={data.button} />
        </div>
      </ObserverWrapper>
    </section>
  );
};
