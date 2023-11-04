import styles from "./HeroSection.module.css";
import { Button } from "../../ui/Button/Button";
import { NavBar } from "../NavBar/NavBar";

export const HeroSection = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1> Empowering pregnancy fitness</h1>
          <p>
            Safe, effective, and energizing training throughout the whole
            pregnancy. Join us for a fun fitness journey for both body and soul.
          </p>
          <Button buttonName="SIGN UP"></Button>
          <Button buttonName="TRY A CLASS"></Button>
        </div>
        <div className={styles.heroRight}>
          <img
            src="/assets/pregs-kettlebell.png"
            alt="pregnant lady with a kettle bell"
          />
        </div>
      </div>
    </>
  );
};
