import "./abouthero.css"
import { useTranslation } from "react-i18next"

export const AboutHero = () => {

    const { t } = useTranslation();

    return (
        <div className="about-hero"><h1>{t("AboutHero.h1")}</h1>
            <h2>{t("AboutHero.h2")}</h2>
        </div>
    )
}
