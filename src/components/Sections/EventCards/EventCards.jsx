import styles from "./EventCards.module.css";

export const EventCards = () => {
  return (
    <>
      <div className={styles.eventsContainer}>
        <div className={styles.eventsCard}>events card 1</div>
        <div className={styles.eventsCard}>events card 2</div>
        <div className={styles.eventsCard}>events card 3</div>
        <div className={styles.eventsCard}>events card 4</div>
        <div className={styles.eventsCard}>events card 5</div>
        <div className={styles.eventsCard}>events card 6</div>
        <div className={styles.eventsCard}>events card 7</div>
        <div className={styles.eventsCard}>events card 8</div>
      </div>
    </>
  );
};
