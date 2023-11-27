import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./FindUs.module.scss";
import { content } from "../../../statics/content";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";
import { useAppStore } from "../../../store/useAppStore";
export const FindUs = () => {
  const lang = useAppStore((state) => state.lang);
  const data = content.findus[lang];
  return (
    <section className={styles.findUs}>
      <ObserverWrapper>
        <div className={styles.findUs_inner}>
          <img src="/photos/Globe.svg" />
          <div className={styles.text}>
            <MessageCard
              text={data.text}
              title={data.title}
              buttonText={data.button}
              bgWhite={true}
            />
          </div>
        </div>
      </ObserverWrapper>
    </section>
  );
};
