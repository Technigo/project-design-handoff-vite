//Mounted in the AboutP page.
//Includes import/export translation keys to fetch translated content from the translation files.

import "./aboutmain.css"
import { useTranslation } from "react-i18next"

export const AboutMain = () => {
    const { t } = useTranslation()

    return (
        <div className="about-main">
            <div className="about-inner">
                <h3>{t("AboutMain.h31")}</h3>
                <p>{t("AboutMain.p1")}</p>

                <h3>{t("AboutMain.h32")}</h3>
                <p>{t("AboutMain.p2")}</p>
                <p>{t("AboutMain.p3")}</p></div></div >
    )
}
