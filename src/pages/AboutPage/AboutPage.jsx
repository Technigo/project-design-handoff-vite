import { AboutContact } from "../../components/sections/AboutContact";
import { AboutHero } from "../../components/sections/AboutHero";
import styles from "./AboutPage.module.scss";

export const AboutPage = () => {
  return (
    <div className={styles.about_page}>
      <AboutHero />
      <AboutContact />
    </div>
  );
};
