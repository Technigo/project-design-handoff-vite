import styles from "./BodySection.module.css";
import { Button } from "../../ui/Button/Button";
import { useTranslation } from "react-i18next";

//{t("homePage.body.")}
// "body": {
//   "matP": "",
//   "scheduleP": "",
//   "tribeP": "",
//   "tourP": "",
//   "flexP": ""
// },

export const BodySection = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.bodyBox}>
          <p> {t("homePage.body.bendP")}</p>
        </div>
        <div className={styles.bodyBox}>
          <button
            className={styles.bodyButton}
            style={{ color: "white", backgroundColor: "black" }}
          >
            {t("homePage.body.bodyButtonJoin")}
          </button>
        </div>
        <div className={styles.bodyBox}>
          <img src="./assets/1st.png" />
        </div>
        <div className={styles.bodyBox}>
          <p>{t("homePage.body.matPheader")}</p>
          <p>{t("homePage.body.matP")}</p>
          <button
            className={styles.bodyButton}
            style={{ color: "black", backgroundColor: "#ffecea" }}
          >
            {t("homePage.body.bodyButtonBook")}
          </button>
        </div>
        <div className={styles.bodyBox}>
          <img src="./assets/2nd.png" />
        </div>
        <div className={styles.bodyBox}>
          <p>{t("homePage.body.schedulePheader")}</p>
          <p>{t("homePage.body.scheduleP")}</p>
          <button
            className={styles.bodyButton}
            style={{ color: "black", backgroundColor: "#ffecea" }}
          >
            Schedule{t("homePage.body.bodyButtonSchedule")}
          </button>
        </div>
        <div className={styles.bodyBox}>
          <img src="./assets/3rd.png" />
        </div>
        <div className={styles.bodyBox}>
          <p>{t("homePage.body.tribePheader")}</p>
          <p>{t("homePage.body.tribeP")}</p>
          <button
            className={styles.bodyButton}
            style={{ color: "black", backgroundColor: "#ffecea" }}
          >
            {t("homePage.body.bodyButtonJoin")}
          </button>
        </div>
        <div className={styles.bodyBox}>
          <img src="./assets/3rd.png" />
        </div>
        <div className={styles.bodyBox}>
          <p>{t("homePage.body.tourPHeader")}</p>
          <p>{t("homePage.body.tourP")}</p>
          <button
            className={styles.bodyButton}
            style={{ color: "black", backgroundColor: "#ffecea" }}
          >
            {t("homePage.body.bodyButtonExplore")}
          </button>
        </div>
        <div className={styles.bodyBox}>
          <p>{t("homePage.body.flexP")}</p>
          <button
            className={styles.bodyButton}
            style={{ color: "white", backgroundColor: "black" }}
          >
            {t("homePage.body.bodyButtonJoin")}
          </button>
        </div>
      </div>
    </>
  );
};
