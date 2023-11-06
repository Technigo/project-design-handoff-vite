import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import "../Translation";

export const AboutText = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    return (
        <div className="text-yellow-color grid grid-cols-1 md:grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="m-8 text-center flex flex-col">
                <h1 className="hidden lg:block text-6xl">{t("aboutTitle")}</h1>
                <h2 className="pt-5">{t("aboutSubTitle")}</h2>
                <p className="text-lg custom-font pt-20 pr-6 pl-6 md:pr-44 md:pl-44">{t("aboutText")}</p>
            </div>
            <div className="flex flex-col justify-center pb-0">
                <div className="text-sm ml-3 pl-2 lg:text-lg m-20 pl-10 border-l-4 border-yellow-color">
                    <p className="pt-10"> {t("longAboutFirst")}
                    </p>

                    <p className="pt-10">{t("longAboutSecond")}
                    </p>
                </div>
            </div>
        </div>
    );
}
