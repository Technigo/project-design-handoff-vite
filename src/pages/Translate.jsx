export const Translate = () => {
    const text = {}

    //define via destructured variablel 2 methods from the useTranslation
    const { t, i18n } = useTranslation()

    //function to change the language
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const englishFunc = () => changeLanguageFunc("en");
    const swedishFunc = () => changeLanguageFunc("se");

    return (
        <>

        </>
    )
}
