import styles from "./HeroSection.module.css";
import { Button } from "../../ui/Button/Button";

export const HeroSection = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroBox}>
          <h1>
            Where <span className={styles.h1Bold}>Serenity</span> Meets
            <span className={styles.h1Bold}> Stretch</span>
          </h1>
          <p>
            At our yoga studio, we're not your typical pretzel-twisting,
            'Om'-chanting bunch. We're all about infusing your yoga journey with
            a big dose of FUN, a sprinkle of QUIRKY, and a heap of ZEN.
          </p>
        </div>
        <div className={styles.heroBox}>
          <p>
            <button
              className={styles.heroButton}
              style={{ color: "white", backgroundColor: "black" }}
            >
              Join today!"
            </button>
          </p>
          <p>
            <button className={styles.heroButton}>Read More</button>
          </p>
          <div className={styles.heroBox}>
            <img src="/assets/hero-img.png" />
          </div>
        </div>
      </div>
    </>
  );
};
