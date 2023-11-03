//These translation buttons are mounted in the page: LandingP.jsx and AboutP.jsx

//Importing necessary styles, hooks and libraries
import "./translation.css"
import { useTranslation } from "react-i18next"

export const Translation = () => {
    const { i18n } = useTranslation()

    //Function to change the language using i18n object
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    // Rendering the language switch buttons
    return (
        <div className="translation-buttons">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("sv")}>Svenska</button>
        </div>
    )
}