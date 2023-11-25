import styles from "./BodySection.module.css";
import { Button } from "../../ui/Button/Button";

export const BodySection = () => {
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.bodyBox}>
          <p>
            <span className={styles.pBold}>Bend, Breathe, Blossom.</span> Our
            experienced instructors make yoga
            <span className={styles.pBold}> accessible</span> and
            <span className={styles.pBold}> enjoyable </span>for all levels
          </p>
        </div>
        <div className={styles.bodyBox}>
          <button
            className={styles.bodyButton}
            style={{ color: "white", backgroundColor: "black" }}
          >
            Join today!
          </button>
        </div>
        <div className={styles.bodyBox}>
          <img src="./assets/1st.png" />
        </div>
        <div className={styles.bodyBox}>
          <p>
            Book a <span className={styles.pBold}>Mat</span>!
          </p>
          <p>
            We're not your typical pretzel-twisting, 'Om'-chanting bunch. We're
            all about infusing your yoga journey with a big dose of FUN, a
            sprinkle of QUIRKY, and a heap of ZEN.
          </p>
          <button
            className={styles.bodyButton}
            style={{ color: "black", backgroundColor: "#ffecea" }}
          >
            Book
          </button>
        </div>
        <div className={styles.bodyBox}>
          <img src="./assets/2nd.png" />
        </div>
        <div className={styles.bodyBox}>
          <p>
            View<span className={styles.pBold}> Schedule</span>
          </p>
          <p>
            Timetable to Tingle Your Chakras: Our flexible schedule offers
            classes to fit every flow, from sunrise salutations to evening
            tranquility.
          </p>
          <button
            className={styles.bodyButton}
            style={{ color: "black", backgroundColor: "#ffecea" }}
          >
            Schedule
          </button>
        </div>
        <div className={styles.bodyBox}>
          <img src="./assets/3rd.png" />
        </div>
        <div className={styles.bodyBox}>
          <p>
            Join our<span className={styles.pBold}> tribe</span>
          </p>
          <p>
            Community That Lifts You Up: Join our yoga tribe and become part of
            a supportive, like-minded community that celebrates your journey.
          </p>
          <button
            className={styles.bodyButton}
            style={{ color: "black", backgroundColor: "#ffecea" }}
          >
            Join
          </button>
        </div>
        <div className={styles.bodyBox}>
          <img src="./assets/3rd.png" />
        </div>
        <div className={styles.bodyBox}>
          <p>
            Take a <span className={styles.pBold}> tour</span>
          </p>
          <p>
            Space to Find Your Inner Peace: Our cozy, chic studio nestled in the
            heart of Stockholm is a haven for relaxation, away from the city's
            hustle and bustle
          </p>
          <button
            className={styles.bodyButton}
            style={{ color: "black", backgroundColor: "#ffecea" }}
          >
            Explore
          </button>
        </div>
        <div className={styles.bodyBox}>
          <p>
            <span className={styles.pBold}> Flex, Inhale, Flourish.</span> Our
            seasoned instructors ensure yoga is{" "}
            <span className={styles.pBold}>accessible</span> and{" "}
            <span className={styles.pBold}>delightful</span> for all
            practitioners
          </p>
          <button
            className={styles.bodyButton}
            style={{ color: "white", backgroundColor: "black" }}
          >
            Join today!
          </button>
        </div>
      </div>
    </>
  );
};
