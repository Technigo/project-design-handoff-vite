import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <>
      <div>HeroSection</div>;
      <div className={styles.HeroSectionheroContainer}>
        <h1> Empowering pregnancy fitness</h1>
        <p>
          Safe, effective, and energizing training throughout the whole
          pregnancy. Join us for a fun fitness journey for both body and soul.
        </p>
        <button>Sign Up</button>
        <button>Try a Class</button>
      </div>
    </>
  );
};
