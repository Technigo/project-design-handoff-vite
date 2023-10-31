import styles from "./AboutHero.module.scss";
import { content as data } from "../../../statics/content";
import { Slider } from "../../ui/Slider/Slider";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";
export const AboutHero = () => {
  return (
    <ObserverWrapper>
      <section className={styles.about_hero}>
        <img src="/photos/antisocial.png" className={styles.hero_img} />
        <img src="/icons/logo.svg" className={styles.logo} />
        <div className={styles.text_box}>
          <div dangerouslySetInnerHTML={{ __html: data.aboutHero.text }} />
        </div>
        <div className={styles.slider_wrapper}>
          <Slider type="aboutHero" key="aboutHeto" />
        </div>
      </section>
    </ObserverWrapper>
  );
};
