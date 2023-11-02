//These translation buttons are mounted in the page: LandingP.jsx

import "./translation.css"
import { useTranslation } from "react-i18next"

export const Translation = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div className="translation-buttons">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("sv")}>Svenska</button>
        </div>
    )
}