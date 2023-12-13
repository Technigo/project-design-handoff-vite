import React from "react";
import styles from "./BodyEvents.module.css";
import { useTranslation } from "react-i18next";
//Trans is used to bold certain words in the translated text with <strong> in the json file.
import { Trans } from "react-i18next";

export const BodyEvents = () => {
  return (
    <>
      <Trans>
        <div className={styles.eventsContainer}>
          <div className={styles.eventsBox}>
            <h2>{t("eventsPage.MainHeader")}</h2>
            <p> {t("eventsPage.mainText")}</p>
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
      </Trans>
    </>
  );
};
