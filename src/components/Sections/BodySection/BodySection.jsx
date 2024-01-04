import styles from "./BodySection.module.css";
import { Button } from "../../ui/Button/Button";
import { useTranslation } from "react-i18next";
//Trans is used to bold certain words in the translated text with <strong> in the json file.
import { Trans } from "react-i18next";

export const BodySection = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Trans>
        <div className={styles.bodyContainer}>
          {/* styles and render for mobile view */}
          <div className={styles.bodyMobile}>
            <div className={styles.bodyLastBox}>
              <p> {t("homePage.body.bendP")}</p>
              <button className={styles.bodyButtonBlack}>
                {t("homePage.body.bodyButtonJoin")}
              </button>
            </div>
            <div className={styles.bodyBox}>
              <img className={styles.imgDesktop} src="/assets/1st.png" />
              <img className={styles.imgMobile} src="/assets/1st-mobile.png" />
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
              <img className={styles.imgDesktop} src="/assets/2nd.png" />
              <img className={styles.imgMobile} src="/assets/2nd-mobile.png" />
            </div>
            <div className={styles.bodyBox}>
              <p>{t("homePage.body.schedulePheader")}</p>
              <p>{t("homePage.body.scheduleP")}</p>
              <button
                className={styles.bodyButton}
                style={{ color: "black", backgroundColor: "#ffecea" }}
              >
                {t("homePage.body.bodyButtonSchedule")}
              </button>
            </div>
            <div className={styles.bodyBox}>
              <img className={styles.imgDesktop} src="/assets/3rd.png" />
              <img className={styles.imgMobile} src="/assets/3rd-mobile.png" />
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
              <img className={styles.imgDesktop} src="/assets/4th.png" />
              <img className={styles.imgMobile} src="/assets/4th-mobile.png" />
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
          {/* styles and render for desktop view */}
          <div className={styles.bodyDesktop}>
            <div className={styles.bodyLastBox}>
              <p> {t("homePage.body.bendP")}</p>
              <button className={styles.bodyButtonBlack}>
                {t("homePage.body.bodyButtonJoin")}
              </button>
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
              <img className={styles.imgDesktop} src="/assets/1st.png" />
              <img className={styles.imgMobile} src="/assets/1st-mobile.png" />
            </div>
            <div className={styles.bodyBox}>
              <img className={styles.imgDesktop} src="/assets/2nd.png" />
              <img className={styles.imgMobile} src="/assets/2nd-mobile.png" />
            </div>
            <div className={styles.bodyBox}>
              <p>{t("homePage.body.schedulePheader")}</p>
              <p>{t("homePage.body.scheduleP")}</p>
              <button
                className={styles.bodyButton}
                style={{ color: "black", backgroundColor: "#ffecea" }}
              >
                {t("homePage.body.bodyButtonSchedule")}
              </button>
            </div>{" "}
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
              <img className={styles.imgDesktop} src="/assets/3rd.png" />
              <img className={styles.imgMobile} src="/assets/3rd-mobile.png" />
            </div>
            <div className={styles.bodyBox}>
              <img className={styles.imgDesktop} src="/assets/4th.png" />
              <img className={styles.imgMobile} src="/assets/4th-mobile.png" />
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
            <div className={styles.bodyLastBox}>
              <p>{t("homePage.body.flexP")}</p>
              <button className={styles.bodyButtonBlack}>
                {t("homePage.body.bodyButtonJoin")}
              </button>
            </div>
          </div>
        </div>
      </Trans>
    </>
  );
};
