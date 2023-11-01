import styles from "./AboutHero.module.scss";
import { content } from "../../../statics/content";
import { Slider } from "../../ui/Slider/Slider";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";
import { useAppStore } from "../../../store/useAppStore";
export const AboutHero = () => {
  const lang = useAppStore((state) => state.lang);
  const data = content.aboutHero[lang];
  return (
    <ObserverWrapper>
      <section className={styles.about_hero}>
        <img src="/photos/antisocial.png" className={styles.hero_img} />
        <img src="/icons/logo.svg" className={styles.logo} />
        <div className={styles.text_box}>
          <div dangerouslySetInnerHTML={{ __html: data.text }} />
        </div>
        <div className={styles.slider_wrapper}>
          <Slider type="aboutHero" key="aboutHeto" />
        </div>
      </section>
    </ObserverWrapper>
  );
};
