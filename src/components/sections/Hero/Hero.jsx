import { MessageCard } from "../../ui/MessageCard/MessageCard";
import styles from "./Hero.module.scss";
import { content as data } from "../../../statics/content";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_img}> </div>
      <div className={styles.hero_text}>
        <MessageCard
          title={data.hero.title}
          text={data.hero.text}
          buttonText={data.hero.button}
          border={true}
          center={true}
        />
      </div>
    </section>
  );
};
