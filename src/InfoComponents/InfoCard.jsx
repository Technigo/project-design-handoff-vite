import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

import "../Translation";

export const InfoCard = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about'); // Navigate to the "/about" route

    };

    return (
        <div className="text-center absolute lg:pt-12 grid grid-cols-1 md:pt-20 grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="text-white pl-0 p-0 pt-0 lg:mr-36">
                <div className="sm:grid grid-cols-1 md:grid grid-cols-2 lg:grid-cols-1">
                    <div>
                        <div>
                            <h1 className="pr-0 text-4xl pt-5 mt-0 md:text-6xl lg:pt-0">{t("infoTitle1")}</h1>
                            <p className="pr-10 pl-10 pb-5 md:mt-0 text-lg pt-0 md:text-lg md:pr-10 md:pl-10 md:pt-10 lg:pt-5 md:pb-10 lg:px-32 text-white">{t("infoText1")}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="pr-0 text-4xl md:pt-5 mt-0 md:text-6xl lg:pt-0">{t("infoTitle2")}</h1>
                        <p className="pr-10 pl-10 pb-5 md:mt-0 text-lg pt-0 md:text-lg md:pr-10 md:pl-10 md:pt-10 lg:pt-5 md:pb-10 lg:px-32 text-white">{t("infoText2")}</p>
                    </div>
                </div>
                <h1 className="pr-0 text-4xl md:pt-1 mt-0 md:text-6xl lg:pt-0 md:pt-16">{t("infoTitle3")}</h1>
                <p className="pr-10 pl-10 pb-2 md:mt-0 text-lg pt-0 md:text-lg md:pr-48 md:pl-48 md:pt-10 lg:pt-5 lg:px-32 text-white">{t("infoText3")}</p>
            </div>


            <div className="flex flex-col justify-center items-center text-white lg:mr-11 ml-0">
                <div className="pb-3 lg:mt-0 pt-0 mr-0 sm:pr-0 md:px-20 lg:border-b-4 border-white lg:pr-10 md:pb-10 md:pt-16">
                    <span className="px-3 md:mt-0 text-4xl md:text-6xl lg:pt-10 text-white">{t("rightText")}<span className="text-yellow-color">{t("rightTextYellow")}</span></span>
                </div>

                <div className="w-4/5 md:w-3/4 md:w-3/4 md:mb-16 lg:hidden h-1 bg-white"></div>

                <button
                    className="w-3/4 shadow-md shadow-yellow-500 hover:shadow-yellow-box bg-white text-black border-solid border-2 border-black p-1 pr-5 pl-5 mt-0 md:mb-4 mt-4 md:w-2/5 lg:mt-10 ml-36 mr-36"
                    onClick={navigateToAbout}
                >
                    {t("rightButton")}
                </button>
            </div>
        </div >
    );
};
