import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

import "../Translation";

export const InfoCard = ({ data }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about'); // Navigate to the "/about" route

        const { t, i18n } = useTranslation();

        const changeLanguage = (language) => {
            i18n.changeLanguage(language);
        };

        const toggleLanguage = () => {
            const currentLanguage = i18n.language;
            const newLanguage = currentLanguage === "en" ? "sv" : "en";
            changeLanguage(newLanguage);
        };

    };

    return (
        <div className="text-center absolute p-4 grid grid-cols-1 md:pt-20 grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-white pl-0 p-0 pt-0 lg:mr-36">
                <div className="sm:grid grid-cols-1 md:grid grid-cols-2 lg:grid-cols-1">
                    <div>
                        <div>
                            <h1 className="pr-0 text-4xl pt-1 mt-0 md:text-6xl lg:pt-0">{t("infoTitle1")}</h1>
                            <p className="mt-0 text-lg pt-0 md:text-lg lg:pt-10 text-white">{t("infoText1")}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="pr-0 text-4xl pt-1 mt-0 md:text-6xl lg:pt-0">{t("infoTitle2")}</h1>
                        <p className="mt-0 text-lg pt-0 md:text-lg lg:pt-10 text-white">{t("infoText2")}</p>
                    </div>
                </div>
                <h1 className="pr-0 text-4xl pt-1 mt-0 md:text-6xl lg:pt-0 md:pt-16">{t("infoTitle3")}</h1>
                <p className="mt-0 text-lg pt-0 md:text-lg lg:pt-10 text-white">{t("infoText3")}</p>
            </div>


            <div className="flex flex-col justify-center items-center text-white">
                <div className="lg:mt-0 pt-0 mr-0 sm:pr-0 lg:border-b-4 border-white lg:pr-10 pb-10 md:pt-16">
                    <span className="mt-0 text-4xl pt-0 md:text-6xl lg:pt-10 text-white">{t("rightText")}<span className="text-yellow-color">{t("rightTextYellow")}</span></span>
                </div>


                <button
                    className="hover:shadow-yellow-box bg-white text-black w-44 border-solid border-2 border-black p-2 mt-0 md:mb-4 mt-4 ml-20 mr-20 lg:mt-10 ml-36 mr-36"
                    onClick={navigateToAbout}
                >
                    {t("rightButton")}
                </button>
            </div>
        </div >
    );
};
