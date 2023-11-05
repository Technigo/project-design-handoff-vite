import { useTranslation } from "react-i18next";

// Define a functional component named "TranslationComponent."
export const TranslationComponent = () => {
        // Destructure the "t" (translation function) and "i18n" (i18n instance) from the useTranslation hook.
    const { t, i18n } = useTranslation();

        // Define a function to change the language using the i18n instance.
    const changeLanguage = (language) => {
       i18n.changeLanguage(language); 
    };

    return (
        <div>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("se")}>Swedish</button>
        </div>
    );
};