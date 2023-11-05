//Mounted in MainCont.jsx
//Includes import/export translation keys to fetch translated content from the translation files.

import "./info2.css"
import { useTranslation } from "react-i18next"

export const Info2 = () => {
    const { t } = useTranslation()

    return <div className="info2">
        <h3>{t("Info2.h3")}</h3>
        <p>{t("Info2.p")}</p>
    </div>
}