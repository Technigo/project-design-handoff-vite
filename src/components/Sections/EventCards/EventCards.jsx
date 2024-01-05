import styles from "./EventCards.module.css";
import { useTranslation } from "react-i18next";
//Trans is used to bold certain words in the translated text with <strong> in the json file.
import { Trans } from "react-i18next";

export const EventCards = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.eventsContainer}>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event1.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card1.header")}</p>
            <p>{t("eventsPage.card1.text")}</p>
          </Trans>
        </div>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event2.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card2.header")}</p>
            <p>{t("eventsPage.card2.text")}</p>
          </Trans>
        </div>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event3.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card3.header")}</p>
            <p>{t("eventsPage.card3.text")}</p>
          </Trans>
        </div>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event4.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card4.header")}</p>
            <p>{t("eventsPage.card4.text")}</p>
          </Trans>
        </div>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event5.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card5.header")}</p>
            <p>{t("eventsPage.card5.text")}</p>
          </Trans>
        </div>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event6.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card6.header")}</p>
            <p>{t("eventsPage.card6.text")}</p>
          </Trans>
        </div>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event7.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card7.header")}</p>
            <p>{t("eventsPage.card7.text")}</p>
          </Trans>
        </div>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event8.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card8.header")}</p>
            <p>{t("eventsPage.card8.text")}</p>
          </Trans>
        </div>
        <div className={styles.eventsCard}>
          <Trans>
            <div className={styles.eventsImage}>
              <img src="./assets/event9.png" />
            </div>
            <p className={styles.cardHeaders}>{t("eventsPage.card9.header")}</p>
            <p>{t("eventsPage.card9.text")}</p>
          </Trans>
        </div>
      </div>
    </>
  );
};
