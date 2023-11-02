//Mounted in MainCont.jsx

import "./info1.css"

import { useTranslation } from "react-i18next"

export const Info1 = () => {
    const { t } = useTranslation()

    return <div className="info1">
        <h3>{t("Info1.h31")}</h3>
        <p>{t("Info1.p1")}</p>
        <button>{t("Info1.button")}</button>
        <h3>{t("Info1.h32")}</h3>
        <p>{t("Info1.p2")}</p>
    </div>
}