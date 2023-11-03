import {useTranslation} from "react-i18next"


export const TranslationComponent = () => {
    const { i18n } = useTranslation()

    const changeLanguageFunc = (language) => {
        i18n.changeLanguage(language)
    }

    const englishFunc = () => changeLanguageFunc("en")
    const swedishFunc = () => changeLanguageFunc("se")

    return (
        <div>
        <button onClick={englishFunc}>English</button>
        <button onClick={swedishFunc}>Swedish</button>
        </div>
    )

}