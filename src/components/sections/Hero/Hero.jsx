import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./Hero.module.scss";
import { content } from "../../../statics/content";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";
import { useAppStore } from "../../../store/useAppStore";
export const Hero = () => {
  const lang = useAppStore((state) => state.lang);
  const data = content.hero[lang];
  return (
    <section className={styles.hero}>
      <ObserverWrapper>
        <div className={styles.hero_img}> </div>
        <div className={styles.hero_text}>
          <MessageCard
            title={data.title}
            text={data.text}
            buttonText={data.button}
            border={true}
            center={true}
          />
        </div>
      </ObserverWrapper>
    </section>
  );
};
