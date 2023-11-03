import "./translation.css"
import { useTranslation } from "react-i18next"

export const Translation = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div className="translation-buttons">
            <button className="translate-button" onClick={() => changeLanguage("en")}>
                EN</button>
            <button className="translate-button" onClick={() => changeLanguage("sv")}>
                SV</button>
            <button className="translate-button" onClick={() => changeLanguage("zh")}>
                汉字 </button>
            <button className="translate-button" onClick={() => changeLanguage("bg")}>
                BG</button>
                
        </div>
    )
}