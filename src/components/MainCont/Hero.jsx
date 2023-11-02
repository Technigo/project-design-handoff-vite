//This component is mounted in MainCont.jsx
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