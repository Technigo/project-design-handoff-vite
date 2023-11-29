import styles from "./EventCards.module.css";
import { useTranslation } from "react-i18next";

export const EventCards = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.eventsContainer}>
        <div className={styles.eventsCard}>
          <img src="./assets/event1.png" />
          <h2>{t("eventsPage.card1.header")}</h2>
          <p>{t("eventsPage.card1.text")}</p>
        </div>
        <div className={styles.eventsCard}>
          <img src="./assets/event2.png" />
          <h2>{t("eventsPage.card2.header")}</h2>
          <p>{t("eventsPage.card2.text")}</p>
        </div>
        <div className={styles.eventsCard}>
          <img src="./assets/event3.png" />
          <h2>{t("eventsPage.card3.header")}</h2>
          <p>{t("eventsPage.card3.text")}</p>
        </div>
        <div className={styles.eventsCard}>
          <img src="./assets/event4.png" />
          <h2>{t("eventsPage.card4.header")}</h2>
          <p>{t("eventsPage.card4.text")}</p>
        </div>
        <div className={styles.eventsCard}>
          <img src="./assets/event5.png" />
          <h2>{t("eventsPage.card5.header")}</h2>
          <p>{t("eventsPage.card5.text")}</p>
        </div>
        <div className={styles.eventsCard}>
          <img src="./assets/event6.png" />
          <h2>{t("eventsPage.card6.header")}</h2>
          <p>{t("eventsPage.card6.text")}</p>
        </div>
        <div className={styles.eventsCard}>
          <img src="./assets/event7.png" />
          <h2>{t("eventsPage.card7.header")}</h2>
          <p>{t("eventsPage.card7.text")}</p>
        </div>
        <div className={styles.eventsCard}>
          <img src="./assets/event8.png" />
          <h2>{t("eventsPage.card8.header")}</h2>
          <p>{t("eventsPage.card8.text")}</p>
        </div>
        <div className={styles.eventsCard}>
          <img src="./assets/event9.png" />
          <h2>{t("eventsPage.card9.header")}</h2>
          <p>{t("eventsPage.card9.text")}</p>
        </div>
      </div>
    </>
  );
};
