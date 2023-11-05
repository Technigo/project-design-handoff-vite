//Mounted in the page AboutP

import "./abouthero.css"
import { useTranslation } from "react-i18next"

export const AboutHero = () => {
    // Using the useTranslation hook to get the 't' function for translation
    const { t } = useTranslation();

    // Rendering the component with translated content using "t" function
    return (
        <div className="about-hero"><h1>{t("AboutHero.h1")}</h1>
            <h2>{t("AboutHero.h2")}</h2>
        </div>
    )
}
