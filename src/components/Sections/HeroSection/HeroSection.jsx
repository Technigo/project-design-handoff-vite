import styles from "./HeroSection.module.css";
import { Button } from "../../ui/Button/Button";

export const HeroSection = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1>Where Serenity Meets Stretch</h1>
          <p>
            At our yoga studio, we're not your typical pretzel-twisting,
            'Om'-chanting bunch. We're all about infusing your yoga journey with
            a big dose of FUN, a sprinkle of QUIRKY, and a heap of ZEN.
          </p>
          <p>
            <Button /> <Button />
          </p>
        </div>
        <div className={styles.heroRight}>
          {" "}
          <img src="/assets/hero-img.png" />
        </div>
      </div>
    </>
  );
};
