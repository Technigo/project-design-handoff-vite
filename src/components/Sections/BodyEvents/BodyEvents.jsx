import React from "react";
import styles from "./BodyEvents.module.css";
import { useTranslation } from "react-i18next";
//Trans is used to bold certain words in the translated text with <strong> in the json file.
import { Trans } from "react-i18next";

export const BodyEvents = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Trans>
        <div className={styles.eventsContainer}>
          <div className={styles.eventsBox}>
            <h2>{t("eventsPage.mainHeader")}</h2>
            <p> {t("eventsPage.mainText")}</p>
          </div>
        </div>
      </Trans>
    </>
  );
};
