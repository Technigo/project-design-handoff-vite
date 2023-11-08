import { useTranslation } from 'react-i18next';

export const LanguageButton = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    return (
        <div>
            <button className="p-2 mt-4 lg:mt-7 hover:shadow-yellow-box bg-white text-black" onClick={toggleLanguage}>En/Sv</button>
        </div>
    );
};
