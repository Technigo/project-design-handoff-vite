//This component is mounted in MainCont.jsx
//Includes import/export translation keys to fetch translated content from the translation files.
import "./hero.css"

import { useTranslation } from "react-i18next"

export const Hero = () => {
    const { t } = useTranslation()

    return <div className="hero">
        <h1>{t("Hero.h1")}</h1>
        <h2>{t("Hero.h2")}</h2>
        <button>{t("Hero.button")}</button>
    </div>
}