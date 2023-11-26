import React from "react";
import styles from "./BodyEvents.module.css";

export const BodyEvents = () => {
  return (
    <>
      <div className={styles.eventsContainer}>
        <div className={styles.eventsBox}>
          <h2>
            Yoga Flow Events: Where Every
            <span className={styles.pBold}> Breath</span> Becomes a
            <span className={styles.pBold}> Celebration</span>
          </h2>
          <p>
            At Yoga Flow, we believe in turning every breath into a celebration
            of life. Our fantastic events offer a unique blend of mindfulness,
            movement, and pure joy. Whether you're a seasoned yogi or just
            dipping your toes into the practice, there's an event for everyone
            to find their zen and have a great time
          </p>
          <p>
            <button
              className={styles.eventsButton}
              style={{ color: "white", backgroundColor: "black" }}
            >
              Join today!"
            </button>
            <button className={styles.eventsButton}>Read More</button>
          </p>
        </div>
      </div>
    </>
  );
};
